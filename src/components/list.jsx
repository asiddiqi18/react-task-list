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
    return (!str || /^\s*$/.test(str));
}

  render() {
    return (
      <React.Fragment>

        <form>
          <div className="row align-items-center mb-5">            
            <div className="submit-inline col-6">
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

            <div className="col-2">
              <button
                type="submit"
                onClick={this.handleSubmit}
                className="submit-inline button-fat btn btn-primary"
                disabled={this.isBlank(this.state.value) ? "disabled" : ""}

              >
                Add <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>

            <div className="col-2">
              <button
                type="reset"
                onClick={this.props.onReset}
                className="btn btn-danger"
                disabled={this.props.tasks.length == 0 ? "disabled" : ""}
              >
                Delete All <i className="fa fa-trash" aria-hidden="true"></i>
              </button>
            </div>
          </div>
        </form>

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
