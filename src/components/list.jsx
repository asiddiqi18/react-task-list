import React, { Component } from "react";
import Task from "./task";

class List extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        {this.props.tasks.map((task) => (
          <Task key={task.id} task={task}></Task>
        ))}
      </React.Fragment>
    );
  }
}

export default List;
