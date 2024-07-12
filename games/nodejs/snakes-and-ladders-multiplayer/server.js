const express = require("express");
const socket = require("socket.io");
const http = require("http");
const cors = require("cors");


const app = express();
const PORT = 3003 || process.env.PORT;
const server = http.createServer(app);

// Set static folder
app.use(express.static("public"));
app.use(cors());

// Socket setup
const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },

});

// Players array
let users = [];

io.on("connection", (socket) => {
  console.log("Made socket connection", socket.id);

  socket.on("join", (data) => {
    users.push(data);

    console.log("JOIN USER DATA: ",data);
    io.sockets.emit("join", data);
  });

  socket.on("joined", () => {
    socket.emit("joined", users);
  });

  socket.on("rollDice", (data) => {
    users[data.id].pos = data.pos;

    //Si es 6, repite turno!!! - Si no, pasa al siguiente jugador
    const turn = data.num != 6 ? (data.id + 1) % users.length : data.id;
    io.sockets.emit("rollDice", data, turn);
  });

  ///finishGame from PORT 3003 -> SERVER PORT 3003 finishGame -> reactListenerWinner -> restart

  //Cuando un jugador llega a la meta: PORT 3003
  socket.on("finishGame", ( emailWinner ) => {
    io.sockets.emit("reactListenerWinner", emailWinner);
  });

  socket.on("reactListenerWinner", (emailWinner) => {
    console.log("reactListenerWinner", emailWinner);
    // io.sockets.emit("reactListenerWinner", emailWinner);

  });

  socket.on("reactListenerEvent", (emailWinner, eventName) => {
    console.log("reactListenerEvent", emailWinner, eventName);
    io.sockets.emit("reactListenerEvent", emailWinner, eventName);

  });

  

  socket.on("restart", () => {
    users = [];
    io.sockets.emit("restart");
  });
});

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
