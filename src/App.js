import './App.css';
import Navbar from './component/Navbar.js';
import Todo from './component/form';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index';
import { useState } from 'react';
import MyTodoList from './component/MyTodo';
function App() {

  const[todo, setTodo]= useState("");
  const[todoList, setTodoList]= useState([]);

  return (
    <div className="App">
      <Navbar />
      <div className="content">

        <Todo
          todo={todo}
        setTodo={setTodo}
        todoList={todoList}
        setTodoList={setTodoList} />

<myTodoList todoList={todoList}/>
      </div>
        </div>
  );
}

export default App;
