import React from "react";
import Counter from "./components/Counter";
import MyComponents from "./components/MyComponents";
import MyComponents2 from "./components/MyComponents2";
import Say from "./components/Say";

const App = () => {
  return (
    <>
      <MyComponents name="React" str="string.." favoriteNumber={3}>
        Children
      </MyComponents>
      <br />
      <MyComponents2 name="React" str="string.." favoriteNumber={3}>
        Children
      </MyComponents2>
      <hr />
      <Counter />
      <hr />
      <Say />
    </>
  );
};

export default App;
