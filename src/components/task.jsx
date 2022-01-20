import React, { Component } from "react";

import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";

class Task extends Component {
  state = {};
  render() {
    let strikethrough_class = "";
    if (this.props.task.checked) {
      strikethrough_class += "add-strikethrough";
    }

    return (
      <React.Fragment>

        <div className="card py-2 my-3 task">
          <div className={"row m-2 " + strikethrough_class}>
            <div className="col-md-1 col-4">
              <div class="row">
                <div className="col-auto me-2">{this.props.number}</div>
                <div className="col-auto">
                  {" "}
                  <div className="col-md-1 col-1">
                    <div className="form-check">
                      <input
                        onClick={() => this.props.onCheck(this.props.task)}
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-10 col-6">
              <EditText
              className="p-0"
                name={"task" + this.props.number}
                defaultValue={this.props.task.text}
                onSave={this.props.onSave}
              />
            </div>
            <div className="col-md-1 col-2">
              <button
                onClick={() => this.props.onRemove(this.props.task)}
                className="float-end btn btn-sm btn-secondary"
              >
                <i className="fa fa-minus" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Task;
