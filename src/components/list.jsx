import React, { Component } from "react";
import Task from "./task"

class List extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Task>This is a list</Task>
        <Task>This is a list</Task>
        <Task>This is a list</Task>
        <Task>This is a list</Task>
        <Task>This is a list</Task>
        <Task>This is a list</Task>
      </React.Fragment>
    );
  }
}

export default List;
