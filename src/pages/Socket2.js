import React from "react";
import socket from "../assets/socket";

const Socket2 = () => {
  const [roomValue, setRoomValue] = React.useState(null);

  React.useEffect(() => {
    socket.on("room", (data) => {
      console.log(data);
    });
  }, []);

  const room = () => {
    socket.emit("join_room", roomValue);
  };

  return (
    <div>
      <input
        type="number"
        placeholder="room"
        onChange={(e) => setRoomValue(e.target.value)}
      />
      <button onClick={room}>room</button>
    </div>
  );
};

export default Socket2;
