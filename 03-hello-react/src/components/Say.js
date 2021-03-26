import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("black");
  const onClickEnter = () => setMessage("안녕~");
  const onClickLeave = () => setMessage("ㅂㅂ");

  return (
    <div>
      <h1 style={{ color }}>{message}</h1>

      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <br />
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("green")}>Green</button>
    </div>
  );
};

export default Say;
