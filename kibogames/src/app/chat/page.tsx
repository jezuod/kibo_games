import { GetServerSideProps } from 'next';

export default function ChatPage() {

    const chatObject = {
        "participants": [
            "user1_id",
            "user2_id"
        ],
        "chatType": "private",
        "messages": [
            {
                "sender": "user1_id",
                "sendDate": "2023-11-21T09:34:22.000Z", // Replace with actual date
                "messageType": "normal",
                "content": "Hello! "
            },
            {
                "sender": "user2_id",
                "sendDate": "2023-11-21T09:35:13.000Z",
                "messageType": "normal",
                "content": "Hey there!  What are you up to?"
            },
            {
                "sender": "user1_id",
                "sendDate": "2023-11-21T09:36:04.000Z",
                "messageType": "videoGameShare",
                "content": {
                    "gameId": "game_id_1", // Replace with actual game ID
                    "gameName": "Awesome Game",
                    "message": "Check out this cool game I found!"
                }
            },
            {
                "sender": "user2_id",
                "sendDate": "2023-11-21T09:37:58.000Z",
                "messageType": "highlightedMessage",
                "content": "Looks interesting!  I might have to try it out."
            }
        ]
    }


    return (
        <div>
            {/* 
            //barralateral 

            div 
                array mensageChat 
                {games.map((chatObject.messages) => ( mensaje
                    <mensageChat key={mensaje} nombreJuego={game.mensaje} />
                ))}
                <newMessageActionBar             */}

        </div>
    );
}
