import './App.css';
import Navbar from './component/Navbar.js';
import TodoForm from './component/form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import MyTodoList from './component/MyTodo';
import { BrowserRouter as Router, Route, Routes } from  'react-router-dom';
function App() {

  const[todo, setTodo]= useState("");
  const[todoList, setTodoList]= useState([]);

  return (
    <Router>
      <div className="App">
        <Navbar/>
          <div className="content">
          <Routes>
            <Route exact path="/"
                element={<MyTodoList setTodoList={setTodoList} todoList={todoList}/>}>
            </Route>

            <Route path="/form"
              element={<TodoForm 
              todo={todo} 
              setTodo={setTodo} 
              todoList={todoList} 
              setTodoList={setTodoList}
            />}>    
            </Route>
          </Routes>
          
       
          {/* <MyTodoList setTodoList={setTodoList} todoList={todoList}/> */}
        
          </div>
      </div>
    </Router>
  );
}


export default App;
