import React, { Component } from "react";
import List from "./list";

class App extends Component {
  state = {
    tasks: [
      { id: 1, text: "lorem ipsum" },
      { id: 2, text: "alpha beta charlie" },
      { id: 3, text: "sample text" },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <List tasks={this.state.tasks}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
