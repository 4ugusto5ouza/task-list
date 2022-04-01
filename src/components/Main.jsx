import React, { Component } from "react";
import "./Main.css";
import { FaPlus, FaEdit, FaWindowClose } from "react-icons/fa";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: "",
      taskList: ["Task 1", "Task 2", "Task 3"],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      newTask: event.target.value,
    });
  }

  render() {
    const { newTask, taskList } = this.state;
    return (
      <>
        <div className="main">
          <h1>Lista de tarefas</h1>
          <h5>{newTask}</h5>
          <form action="#" className="form">
            <input onChange={this.handleChange} type="text" value={newTask} />
            <button type="submit">
              <FaPlus />
            </button>
          </form>
          <ul className="task">
            {taskList.map((task) => (
              <li key={task}>
                {task}
                <div>
                  <FaEdit className="edit"/>
                  <FaWindowClose className="delete"/>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
