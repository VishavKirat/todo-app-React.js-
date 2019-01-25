import React, { Component } from 'react';
import AddTasks from './AddTasks.js'
import DisplayTasks from './DisplayTasks.js'


class App extends Component {
  state = {
    tasks : [
      {name: " Kamal didi's project", id :1},
      {name: " Call Rajbir", id :2},
      {name: " Do hourly patrol", id :3},
    ]
  }

  addTasks = (task) =>{    // add tasks function.
    
    task.id = Math.floor(Math.random()*100);
    let tasks = [...this.state.tasks,task]
    return ( this.setState({
      tasks : tasks
    })
  )
  }

  deleteTask = (id) =>{
    let updatedList =  [...this.state.tasks].filter((item)=>{
          return item.id != id;
      })
      this.setState({
        tasks : updatedList
      })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React Todo App</h1>
        </header>
        <AddTasks addtask = {this.addTasks}/>
          <DisplayTasks tasks = {this.state.tasks} deleteTask ={this.deleteTask}/>
      </div>
    );
  }
}

export default App;
