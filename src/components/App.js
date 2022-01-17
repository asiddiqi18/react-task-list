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

  addNewTask = () => {
    console.log("Adding new task...");
    const tasks = [...this.state.tasks];
    tasks.push({ id: tasks.length + 1, text: "lol" });
    this.setState({ tasks });
  };

  resetAllTasks = () => {
    console.log("Resetting all tasks...");
    this.setState({ tasks: [] });
  };

  handleSubmit = (event, value) => {
    console.log("event: ", event)
    console.log("value: ", value)

    const tasks = [...this.state.tasks];
    tasks.push({ id: tasks.length + 1, text: value });
    this.setState({ tasks });

    event.preventDefault();
  };

  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <List
            tasks={this.state.tasks}
            onAdd={this.addNewTask}
            onReset={this.resetAllTasks}
            onSubmit={this.handleSubmit}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
