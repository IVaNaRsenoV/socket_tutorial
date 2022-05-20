require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");
const http = require("http");

const app = express();

const PORT = process.env.PORT || 8080;

const server = http.createServer(app);
const io = new Server(server, {
  cors: "*",
});

app.use(express.json());
app.use(cors());

io.on("connection", (socket) => {
  socket.on("test", (data) => {
    io.emit("test", data);
  });

  // Приєднання до кімнати
  socket.on("join_room", (data) => {
    socket.join(data);
    socket.broadcast.to(data).emit("room", data);
  });

  // DISCONNECT
  socket.on("disconnect", () => {
    console.log("socket disconnected!", socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`Server works ${PORT}`);
});
