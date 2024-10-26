import React, { useState } from 'react';
import './App.css';
import ToDoTile from './components/ToDoTile';
import Image from './assets/totodile.png';

var currentTaskID = 0;

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");

  function deleteToDo(id) {
    const remainingTasks = toDoList.filter((task) => task.id !== id);
    setToDoList(remainingTasks);
  }

  function handleTaskName(e) {
    setNewTaskName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (newTaskName === "") return;

    const newToDo = {id: currentTaskID, name: newTaskName};
    setToDoList([...toDoList, newToDo]);
    setNewTaskName("");
    currentTaskID++;
  }

  return (
    <div className="App">
      <header>
        <form className="App-Header" onSubmit={handleSubmit}>
        <div className="App-Title">To-Do List</div>
          <input 
            placeholder='To-Do Tile' 
            value={newTaskName}
            onChange={handleTaskName}
            className="App-TaskName"
          ></input>
          <button type="submit" className="App-AddTask"> + Add Task</button>
        </form>
      </header>

      <div className="App-Body">
        {toDoList.length === 0 ? 
          <div className='No-Tasks'>
            Add tasks first
          </div> :
          toDoList.map((toDo) => (
            <ToDoTile props={toDo} deleteToDo={() => deleteToDo(toDo.id)}/>
          ))
        }
      </div>

      <footer className="App-Footer">
        Totodile Wallpaper from <a href='https://www.deviantart.com/dannymybrother/art/Totodile-597327401'>DannyMyBrother</a>
      </footer>
    <div className="App-Background"><img src={Image} height={200}></img></div>
    </div>
  );
}

export default App;
