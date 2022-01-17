import React, { Component } from "react";

class Task extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row m-2">
          <div className="col-1">{this.props.number}</div>
          <div className="col-4">{this.props.task.text}</div>
          <div className="col-4">
            <button onClick={() => this.props.onRemove(this.props.task)} className="btn btn-sm btn-secondary">
              <i className="fa fa-minus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Task;
