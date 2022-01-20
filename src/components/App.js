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

  handleSave = ({ name, value, previousValue }) => {
    var index = parseInt(name.slice(4)) - 1
    const tasks = [...this.state.tasks];
    let task = {...tasks[index]}
    task.text = value;
    tasks[index] = task
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

<div class="text-center p-3 mb-4 bg-light rounded-3">
      <div class="container-fluid py-4">
        <h1 class="display-5 fw-bold">Task List</h1>
      </div>
    </div>
        <div className="container mt-5">
          <List
            tasks={this.state.tasks}
            onReset={this.resetAllTasks}
            onSubmit={this.handleSubmit}
            onRemove={this.handleRemove}
            onCheck={this.handleCheck}
            onSave={this.handleSave}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
