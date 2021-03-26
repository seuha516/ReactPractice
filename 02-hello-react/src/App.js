import React from "react";
import "./App.css";

function App() {
  const name = "리액트";
  const Undefined = undefined;

  // 스타일 객체로 저장
  const style = {
    backgroundColor: "black",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    <>
      <div style={style}>{name}</div>
      <div
        style={{
          backgroundColor: "black",
          color: "aqua",
          fontSize: "48px",
          fontWeight: "bold",
          padding: 16,
        }}
      >
        {name}
      </div>
      <div className="react">{name}</div>

      <h1>{name} 안녕!</h1>
      {name === "리액트" ? <h2>리액트입니다.</h2> : <h2>리액트가 아닙니다.</h2>}
      {name === "리액트" && <h2>리액트입니다!!</h2>}
      <h2>잘 작동하니?</h2>

      {/* undefined만 렌더링하지 않기 */}
      {/* JSX 내부에서는 괜찮음 */}
      <div>{Undefined || "값이 undefined"}</div>

      <input />
    </>
  );
}

export default App;
