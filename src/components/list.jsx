import React, { Component } from "react";
import Task from "./task";
import Pagination from "./pagination";
import { paginate, countTotalIndex } from "./utils/paginate";
import "react-edit-text/dist/index.css";

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      currentPage: 1,
      pageSize: 4,
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

  handlePageChange = (page) => {
    console.log(page);
    this.setState({ currentPage: page });
  };



  render() {
    const tasks = paginate(
      this.props.tasks,
      this.state.currentPage,
      this.state.pageSize
    );

    return (
      <React.Fragment>
        {/* Form */}
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
                disabled={this.props.tasks.length === 0 ? "disabled" : ""}
              >
                Delete All
              </button>
            </div>
          </div>
        </form>

        {/* Header */}
        <div className="card-header">
          <div className="row my-2">
            <div className="col-md-1 col-4">
              <div className="row">
                <div className="col-3">#</div>
                <div className="col-8"></div>
              </div>
            </div>
            <div className="col-md-10 col-6">Task</div>
            <div className="col-md-1 col-2">
              <div className="float-end">Remove</div>
            </div>
          </div>
        </div>

        {/* Rows */}
        {tasks.map((task, index) => (
          <Task
            key={task.id}
            number={countTotalIndex(
              this.state.currentPage,
              this.state.pageSize,
              index
            )}
            task={task}
            onRemove={this.props.onRemove}
            onCheck={this.props.onCheck}
            onSave={this.props.onSave}

          ></Task>
        ))}

        {/* Pagination Control */}
        <Pagination
          itemsCount={this.props.tasks.length}
          pageSize={this.state.pageSize}
          currentPage={this.state.currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default List;
