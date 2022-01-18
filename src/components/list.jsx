import React, { Component } from "react";
import Task from "./task";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (e) => {
    this.setState({ value: "" });
    this.props.onSubmit(this.state.value);
    e.preventDefault();
  };

  isBlank(str) {
    return !str || /^\s*$/.test(str);
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <div className="row align-items-center mb-5">
            <div className="col-md-9 mb-2">
              <div className="form-floating">
                <input
                  type="input"
                  value={this.state.value}
                  onChange={this.handleChange}
                  className="form-control"
                  placeholder="New task"
                  id="floatinginput"
                  rows="1"
                ></input>
                <label htmlFor="floatinginput">Create a Task</label>
              </div>
            </div>

            <div className="col-md-1 col-6">
              <button
                type="submit"
                onClick={this.handleSubmit}
                className=" btn btn-primary"
                disabled={this.isBlank(this.state.value) ? "disabled" : ""}
              >
                Add
              </button>
            </div>

            <div className="col-md-2 col-6">
              <button
                type="reset"
                onClick={this.props.onReset}
                className="float-end btn btn-danger"
                disabled={this.props.tasks.length == 0 ? "disabled" : ""}
              >
                Delete All
              </button>
            </div>
          </div>
        </form>

          <div className="card-header">
            <div className="row my-2">
              <div className="col-md-1 col-1">#</div>
              <div className="col-md-9 col-7">Task</div>
              <div className="col-md-1 col-2"><div className="float-end">Remove</div></div>
              <div className="col-md-1 col-2"><div className="float-end">Check</div></div>
            </div>
          </div>
            {this.props.tasks.map((task, index) => (
              <Task
                key={task.id}
                number={index + 1}
                task={task}
                onRemove={this.props.onRemove}
                onCheck={this.props.onCheck}
              ></Task>
            ))}
      </React.Fragment>
    );
  }
}

export default List;
