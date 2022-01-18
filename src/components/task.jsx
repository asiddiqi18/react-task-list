import React, { Component } from "react";

class Task extends Component {
  state = {};
  render() {
    let strikethrough_class = "";
    let check_icon_class = "fa-check";
    let check_color_class = "success";
    if (this.props.task.checked) {
      strikethrough_class += "add-strikethrough";
      check_icon_class = "fa-undo";
      check_color_class = "info";
    }


    return (
          <div className="card py-2 my-3">
            <div className={"row m-2 " + strikethrough_class}>
              <div className="col-md-1 col-1">{this.props.number}</div>
              <div className={"col-md-9 col-7"}>{this.props.task.text}</div>
              <div className="col-md-1 col-2">
                <button
                  onClick={() => this.props.onRemove(this.props.task)}
                  className="float-end btn btn-sm btn-secondary"
                >
                  <i className="fa fa-minus" aria-hidden="true"></i>
                </button>
              </div>
              <div className="col-md-1 col-2">
                <button
                  onClick={() => this.props.onCheck(this.props.task)}
                  className={"float-end btn btn-sm btn-" + check_color_class}
                >
                  <i className={"fa " + check_icon_class} aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
    );
  }
}

export default Task;
