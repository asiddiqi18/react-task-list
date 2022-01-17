import React, { Component } from "react";

class Task extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h4>{this.props.task.text}</h4>
      </React.Fragment>
    );
  }
}

export default Task;
