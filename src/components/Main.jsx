import React, { Component } from "react";
import "./Main.css";
import { FaPlus, FaEdit, FaWindowClose } from "react-icons/fa";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTask: "",
      taskList: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    const {taskList} = this.state;
    let {newTask} = this.state;
    newTask = newTask.trim();

    if(taskList.indexOf(newTask) !== -1) return;

    const newTaskList = [... taskList];

    this.setState({
      taskList: [... newTaskList, newTask]
    });
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
          <form onSubmit={this.handleSubmit} action="#" className="form">
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
