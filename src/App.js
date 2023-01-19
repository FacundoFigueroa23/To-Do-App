import React, { useState, useEffect } from 'react'
import './App.css';
import Footer from './components/Footer';
import Input from './components/Input';
import Todos from './components/Todos';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("Todos")) ?? [])

  useEffect(() => {
    console.log("Todos: ", todos)
  }, [todos])
  
  const handleInput = (e) => {
    e.preventDefault()
    setTodo(e.target.value)
  }
  
  const addTodo = () => {
    if(todo === ""){
      alert("You have to introduce a to do")
    }else{
      localStorage.setItem("Todos", JSON.stringify([...todos, todo]))
      setTodos(JSON.parse(localStorage.getItem("Todos")))
      setTodo("")
    }
  }

  const completeTodo = (index) => {
    let todosCopy = [...todos]
    todosCopy.splice(index, 1)
    localStorage.setItem("Todos", JSON.stringify(todosCopy))
    setTodos(JSON.parse(localStorage.getItem("Todos")))
  }
  return (
    <div className='container'>
      <p className='title'>TO DO'S</p>

      <Input handleInput={handleInput} addTodo={addTodo} value={todo}/>

      <Todos todos={todos} completeTodo={completeTodo}/>

      <Footer/>
    </div>
  );
}

export default App;
