// Making Connection
const socket = io.connect("http://localhost:3003");
socket.emit("joined");

// http://localhost:3003/?room=25
const urlParams = new URLSearchParams(window.location.search);
const ROOM = urlParams.get("room");
console.log(ROOM);

const email = urlParams.get("email") ?? new Date().getTime();

let players = []; // All players in the game
let currentPlayer; // Player object for individual players

let canvas = document.getElementById("canvas");
canvas.width = document.documentElement.clientHeight * 0.9;
canvas.height = document.documentElement.clientHeight * 0.9;
let ctx = canvas.getContext("2d");

//TODO, DEFINIR QUE EL PRIMERO EN ENTRAR EMPIEZA!
const redPieceImg = "../images/red_piece.png";
const bluePieceImg = "../images/blue_piece.png";
const yellowPieceImg = "../images/yellow_piece.png";
const greenPieceImg = "../images/green_piece.png";

const TIEMPO_ENTRE_MOVIMIENTOS = 100;

const side = canvas.width / 10;
const offsetX = side / 2;
const offsetY = side / 2 + 20;

if (players.length > 3) {
  document.getElementById("restart-btn").hidden = true;
}

const images = [redPieceImg, bluePieceImg, yellowPieceImg, greenPieceImg];

const ladders = [
  [2, 23],
  [4, 68],
  [6, 45],
  [20, 59],
  [30, 96],
  [52, 72],
  [57, 96],
  [71, 92],
];

const snakes = [
  [98, 40],
  [84, 58],
  [87, 49],
  [73, 15],
  [56, 8],
  [50, 5],
  [43, 17],
];

class Player {
  constructor(id, name, pos, img, email) {
    this.id = id;
    this.name = name;
    this.pos = pos;
    this.img = img;
    if (email) this.email = email;
    else this.email = id;
  }

  //DESACTIVAR BOTON DE ROLL MIENTRAS NO SEA SU TURNO
  draw() {
    let xPos =
      Math.floor(this.pos / 10) % 2 == 0
        ? (this.pos % 10) * side - 15 + offsetX
        : canvas.width - ((this.pos % 10) * side + offsetX + 15);
    let yPos = canvas.height - (Math.floor(this.pos / 10) * side + offsetY);

    let image = new Image();
    image.src = this.img;
    console.log("draw INIT", image, xPos, yPos, 30, 40);
    ctx.drawImage(image, xPos, yPos, 30, 40);
  }

  async updatePos(num) {
    console.log("updatePos INIT", this.pos, num);
    if (this.pos + num <= 99) {
      //TODO: Actualizar la posición del jugador - SPRITE POR SPRITE
      for (let i = 0; i < num; i++) {
        this.pos = this.pos + 1;
        console.log("updatePos", this.pos);
        this.draw();
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, TIEMPO_ENTRE_MOVIMIENTOS)
        );
      }

      this.pos = this.isLadderOrSnake(this.pos + 1) - 1;
      console.log("updatePos FIN", this.pos, num);
      this.draw();
      drawUserScores();
    }
  }

  isLadderOrSnake(pos) {
    let newPos = pos;

    for (let i = 0; i < ladders.length; i++) {
      if (ladders[i][0] == pos) {
        newPos = ladders[i][1];
        //TODO: LOGRO, PRIMERA ESCALERA ENCONTRADA
        socket.emit("reactListenerEvent", currentPlayer.email, "ladder");

        break;
      }
    }

    for (let i = 0; i < snakes.length; i++) {
      if (snakes[i][0] == pos) {
        newPos = snakes[i][1];
        //TODO: LOGRO, PRIMERA SERPIENTE ENCONTRADA
        socket.emit("reactListenerEvent", currentPlayer.email, "snake");


        break;
      }
    }

    return newPos;
  }
}

document.getElementById("start-btn").addEventListener("click", () => {
  document.getElementById("start-btn").hidden = true;
  if (players.length > 3) {
    alert("Solo se permiten 4 jugadores por sala");

    document.getElementById("restart-btn").hidden = false;

    return;
  }

  const name = document.getElementById("name").value;
  document.getElementById("name").disabled = true;
  document.getElementById("start-btn").hidden = true;
  document.getElementById("roll-button").hidden = false;
  console.log("players.length", players.length);

  //Cantidad de Jugadores valido
  currentPlayer = new Player(players.length, name, 0, images[players.length], email);
  document.getElementById(
    "current-player"
  ).innerHTML = `<p>Anyone can roll</p>`;
  socket.emit("join", currentPlayer);
  drawPins();
  console.log("players.length", players.length);
});

document.getElementById("roll-button").addEventListener("click", () => {
  const num = rollDice();
  //Mandar el número al servidor
  socket.emit("rollDice", {
    num: num,
    id: currentPlayer.id,
    pos: currentPlayer.pos,
  });
  //Actualizar la posición del jugador actual - SPRITE POR SPRITE

  currentPlayer.updatePos(num);
});

//TODO: Función para lanzar el dado DATOS POR DEFECTO PARA TESTING
function rollDice() {
  // return 1;
  const number = Math.ceil(Math.random() * 6);
  return number;
}

function drawPinsAndScores() {
  drawUserScores();
  drawPins();
}

function drawPins() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  players.forEach((player) => {
    player.draw();
  });
}

function drawUserScores() {
  document.getElementById(
    "players-table"
  ).innerHTML = `<tr><th>Name-</th><th>Image-</th><th>Position</th></tr>`;
  players.forEach((player) => {
    document.getElementById("players-table").innerHTML += `<tr><td>${
      player.name
    }</td><td><img src=${player.img} height=50 width=40></td> <td>Pos: ${
      player.pos + 1
    }</td></tr>`;
  });
}

// Listen for events
socket.on("join", (data) => {
  players.push(new Player(players.length, data.name, data.pos, data.img, email));
  drawPins();
  drawUserScores();
  // document.getElementById(
  // "players-table"
  // ).innerHTML += `<tr><td>${data.name}</td><td><img src=${data.img} height=50 width=40></td> <td>Pos: ${data.pos}</td></tr>`;
});

socket.on("joined", (data) => {
  data.forEach((player, index) => {
    players.push(new Player(index, player.name, player.pos, player.img, email));
    console.log(player);
    // document.getElementById(
    // "players-table"
    // ).innerHTML += `<tr><td>${data.name}</td><td><img src=${data.img} height=50 width=40></td> <td>Pos: ${data.pos}</td></tr>`;
  });
  drawUserScores();
  drawPins();
});

socket.on("rollDice", (data, turn) => {
  //Perspetiva de los otros jugadores que están esperando
  document.getElementById("dice").src = `./images/dice/dice${data.num}.png`;

  // TODO: Update the current player's position - SPRITE BY SPRITE

  if (turn != currentPlayer.id) {
    document.getElementById("roll-button").hidden = true;
    document.getElementById(
      "current-player"
    ).innerHTML = `<p>It's ${players[turn].name}'s turn</p>`;
  } else {
    document.getElementById("roll-button").hidden = false;
    document.getElementById(
      "current-player"
    ).innerHTML = `<p>It's your turn</p>`;
  }

  players[data.id].updatePos(data.num);
  drawPinsAndScores();

  let winner;
  for (let i = 0; i < players.length; i++) {
    if (players[i].pos == 99) {
      winner = players[i];
      break;
    }
  }

  if (winner) {
    document.getElementById(
      "current-player"
    ).innerHTML = `<p>${winner.name} has won!</p>`;
    document.getElementById("roll-button").hidden = true;
    document.getElementById("dice").hidden = true;
    document.getElementById("restart-btn").hidden = false;

    socket.emit("finishGame", winner.email);
  }
});

// Logic to restart the game
document.getElementById("restart-btn").addEventListener("click", () => {
  socket.emit("restart");
});

socket.on("restart", () => {
  window.location.reload();
});
