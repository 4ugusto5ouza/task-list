import React, { Component } from "react";
import "./Main.css";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      newTask: event.target.value,
    });
  }

  render() {
    const { newTask } = this.state;
    return (
      <>
        <div className="main">
          <h1>Lista de tarefas</h1>
          <h5>{newTask}</h5>
          <form action="#" className="form">
            <input onChange={this.handleChange} type="text" value={newTask} />
            <button type="submit">+</button>
          </form>
        </div>
      </>
    );
  }
}
