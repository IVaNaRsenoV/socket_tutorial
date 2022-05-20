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
    socket.broadcast.emit("test", data);
    socket.emit("test", data);
  });
});

server.listen(PORT, () => {
  console.log(`Server works ${PORT}`);
});
