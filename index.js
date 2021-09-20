const { Server } = require("socket.io");
const io = new Server({
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("connected");
  let players = {};
  let ball = {
      x : 0,
      y : 0
  };
  players.player1 = 0;
  players.player2 = 0;
  socket.on("sendposition", (pos) => {
    if (Object.keys(pos)[0] === "player1")
      players.player1 = Object.values(pos)[0];
    if (Object.keys(pos)[0] === "player2")
      players.player2 = Object.values(pos)[0];
    io.emit("playerposition",  players );
  });
});

io.listen(3000);
