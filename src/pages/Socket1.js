import React from "react";
import socket from "../assets/socket";
import { useDispatch, useSelector } from "react-redux";
import { test } from "../features/reducer1";

const Socket1 = () => {
  const dispatch = useDispatch();
  const testValue = useSelector((store) => store.test.test);
  const [value, setValue] = React.useState("");
  const [newValue, setNewValue] = React.useState("");

  React.useEffect(() => {
    socket.on("test", (data) => {
      setNewValue(data);
      dispatch(test(data));
    });
  });

  const post = () => socket.emit("test", value);

  return (
    <>
      <input type="text" onChange={(e) => setValue(e.target.value)} />
      <button onClick={post}>кнопка</button>
      <h1>{newValue}</h1>
      <h3>{testValue}</h3>
    </>
  );
};

export default Socket1;
