import React, { Component } from "react";
import List from "./list";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <List>Hello World</List>
      </React.Fragment>
    );
  }
}

export default App;
