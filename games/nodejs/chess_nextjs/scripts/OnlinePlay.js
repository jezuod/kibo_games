CHESSAPP.onlinePlay = {
	sk : null,
	/*
	   connects to websocket server, and sets up events for when a matched player is found
	   */
	connect: function(stg, callback){
		var op = CHESSAPP.onlinePlay;
		var hostPort = "http://localhost:" + CHESSAPP.globalSettings.port;
		if(CHESSAPP.globalSettings.live){
			hostPort = CHESSAPP.globalSettings.host;
		}
		this.sk = io.connect(hostPort);
		CHESSAPP.ui.statusUpdate({type: 'fb', msg: 'Buscando contringante...'});
		this.sk.emit('setup', {color: stg.preferredColor});
		this.sk.on("chat", function(data){
			CHESSAPP.GamePlay.chatMessage(data);
		});
		this.sk.on("partnerDisconnect", function(){
			CHESSAPP.GamePlay.statusUpdate({type: 'e', msg: 'Tu contrincante se ha desconectado. Por favor refresca la página para intentar de nuevo. Sentimos la inconveniencia.'});
			//CHESSAPP.GamePlay.showSplash();
		});
		this.sk.on("disconnect", function(){
			CHESSAPP.GamePlay.statusUpdate({type: 'e', msg: 'El servidor se ha desconectado. Por favor refresca la página para intentar de nuevo. Sentimos la inconveniencia.'});
		});
		this.sk.on('matchfound', function (data) {

			CHESSAPP.GamePlay.statusUpdate({type: 'fb', msg: 'Contrincante encontrado!'});
			CHESSAPP.GamePlay.statusUpdate({type: 'fb', msg : 'Jugando como ' + (data.color == 'W' ? "blancas" : 'negras')})
			CHESSAPP.GamePlay.setOnlineColor(data.color); //maybe change this to decouple
		callback();
		});
		this.sk.on('opposing_move', function(data){
			CHESSAPP.GamePlay.onlineMove(data);
			CHESSAPP.GamePlay.statusUpdate({type: 's', msg: "Es tu turno!"});
		});
	},
	sendMove: function(stg){
		this.sk.emit('movemade', stg);
		CHESSAPP.GamePlay.statusUpdate({type: 's', msg: "Movimiento enviado!"});
		console.log("Sending messsage");
	},
	sendChat: function(stg){
		stg.local = false;//because the recieved message will not be local
		this.sk.emit('chat', stg);
	},
	handleMsg : function(e){
		var resp = JSON.parse(e.data);
		console.log(resp);
	}
};
