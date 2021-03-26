import React from "react";
import CSSModule from "./components/CSSModule";
import SassComponent from "./components/SassComponent";
import StyledComponent from "./components/StyledComponent";

const App = () => {
  return (
    <>
      <SassComponent />
      <hr />
      <CSSModule />
      <hr />
      <StyledComponent />
    </>
  );
};

export default App;
