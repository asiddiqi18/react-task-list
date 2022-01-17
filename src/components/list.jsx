import React, { Component } from "react";
import Task from "./task";

class List extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }

  }

  handleChange = (event) => {
    console.log(event)
    this.setState({ value: event.target.value });
  }

  handleSubmit = (event) => {
    alert('A name wllas submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <form>
          <div className="row align-items-center mb-5">

            <div className="col-auto">
              <label htmlFor="inputTask" className="col-form-label">
                Enter task
              </label>
            </div>

            <div className="col-auto">
              <input
                type="input"
                value={this.state.value}
                onChange={this.handleChange}
                id="inputTask"
                className="form-control"
                aria-describedby="inputHelpLine"
              ></input>
            </div>

            <div className="col-auto">
              <button type="submit" onClick={(e) => this.props.onSubmit(e, this.state.value)} className="btn btn-primary">
                Add <i className="fa fa-plus" aria-hidden="true"></i>
              </button>
            </div>

            <div className="col-auto">
              <button type="reset" onClick={this.props.onReset} className="btn btn-danger">
                Reset <i className="fa fa-trash" aria-hidden="true"></i>
              </button>
            </div>

          </div>
        </form>

        {this.props.tasks.map((task, index) => (
            <Task key={task.id} number={index + 1} task={task} onRemove={this.props.onRemove}></Task>
        ))}
      </React.Fragment>
    );
  }
}

export default List;
