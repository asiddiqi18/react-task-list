import React, { Component } from "react";
import List from "./list";

class App extends Component {
  state = {
    tasks: [
      { id: 1, text: "lorem ipsum", checked: false },
      { id: 2, text: "alpha beta charlie", checked: false },
      { id: 3, text: "sample text", checked: false },
      { id: 4, text: "california", checked: false },
      { id: 5, text: "texas", checked: false },
      { id: 6, text: "new york", checked: false },
    ],
  };

  resetAllTasks = () => {
    console.log("Resetting all tasks...");
    this.setState({ tasks: [] });
  };

  handleRemove = (task) => {
    const tasks = this.state.tasks.filter((c) => c.id !== task.id);
    this.setState({ tasks });
  };

  handleCheck = (task) => {
    const tasks = [...this.state.tasks];
    const index = tasks.indexOf(task);
    tasks[index] = { ...task };
    tasks[index].checked = !tasks[index].checked;
    this.setState({ tasks });
  };

  handleSubmit = (value) => {
    const tasks = [...this.state.tasks];

    var nextTaskID = 1;

    if (tasks.length > 0) {
      nextTaskID = tasks[tasks.length - 1].id + 1;
    }

    tasks.push({ id: nextTaskID, text: value });
    this.setState({ tasks });
  };

  render() {
    return (
      <React.Fragment>
          <div className="container mt-5">
            <List
              tasks={this.state.tasks}
              onReset={this.resetAllTasks}
              onSubmit={this.handleSubmit}
              onRemove={this.handleRemove}
              onCheck={this.handleCheck}
            />
          </div>
      </React.Fragment>
    );
  }
}

export default App;
