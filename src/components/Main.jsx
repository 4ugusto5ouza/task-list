import React, { Component } from "react";
import "./Main.css";
import { FaPlus, FaEdit, FaWindowClose } from "react-icons/fa";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: -1,
      newTask: "",
      taskList: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnClickDelete = this.handleOnClickDelete.bind(this);
    this.handleOnClickEdit = this.handleOnClickEdit.bind(this);
  }

  componentDidMount(){
    const taskList = JSON.parse(localStorage.getItem('taskList'));

    if(!taskList) return;

    this.setState({taskList});
  }

  componentDidUpdate(prevProps, prevState){
    const {taskList} = this.state;

    if(taskList === prevState.taskList) return;

    localStorage.setItem('taskList', JSON.stringify(taskList));
  }

  handleSubmit(event) {
    event.preventDefault();

    const { taskList, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    const newTaskList = [...taskList];

    if (newTask) {
      if (taskList.indexOf(newTask) !== -1) return;

      if (index === -1) {
        this.setState({
          taskList: [...newTaskList, newTask],
          newTask: "",
        });
      } else {
        newTaskList[index] = newTask;
        this.setState({
          index: -1,
          taskList: [...newTaskList],
        });
      }
    }
  }

  handleChange(event) {
    this.setState({
      newTask: event.target.value,
    });
  }

  handleOnClickEdit(event, index) {
    const { taskList } = this.state;

    this.setState({
      index: index,
      newTask: taskList[index],
    });
  }

  handleOnClickDelete(event, index) {
    const { taskList } = this.state,
      newTaskList = [...taskList];
    newTaskList.splice(index, 1);

    this.setState({
      taskList: [...newTaskList],
    });
  }

  render() {
    const { newTask, taskList } = this.state;
    return (
      <>
        <div className="main">
          <h1>Lista de tarefas</h1>
          <form onSubmit={this.handleSubmit} action="#" className="form">
            <input onChange={this.handleChange} type="text" value={newTask} />
            <button type="submit">
              <FaPlus />
            </button>
          </form>
          <ul className="task">
            {taskList.map((task, index) => (
              <li key={task}>
                {task}
                <div>
                  <FaEdit
                    onClick={(event) => this.handleOnClickEdit(event, index)}
                    className="edit"
                  />
                  <FaWindowClose
                    onClick={(event) => this.handleOnClickDelete(event, index)}
                    className="delete"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}
