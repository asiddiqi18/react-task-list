import React, { Component } from "react";

class Task extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
          <div className="row"> 
            <div className="col-4">{this.props.task.id}</div>
            <div className="col-4">{this.props.task.text}</div>
          </div>
      </React.Fragment>
    );
  }
}

export default Task;
