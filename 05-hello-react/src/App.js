import React, { Component } from "react";
import ValidationSample from "./components/ValidationSample";
import ScrollBox from "./components/ScrollBox";

class App extends Component {
  render() {
    return (
      <>
        <ValidationSample />
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </>
    );
  }
}

export default App;
