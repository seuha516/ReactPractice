import React, { useState } from "react";
import Average from "./components/Average";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import Info from "./components/Info";
import Info2 from "./components/Info2";
import Info3 from "./components/Info3";

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Counter />
      <hr />
      <Counter2 />
      <hr />
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      {visible && <Info />}
      <hr />
      <Info2 />
      <hr />
      <Info3 />
      <hr />
      <Average />
    </>
  );
};

export default App;
