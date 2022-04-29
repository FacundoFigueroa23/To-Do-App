import React, {useState} from 'react'
import './App.css';

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleInput = (e) => {
    e.preventDefault()
    setTodo(e.target.value)
  }

  const addTodo = () => {
    if(todo === ""){
      alert("You have to introduce a to do")
    }else{
      setTodos([...todos, todo])
      setTodo("")
    }
  }

  const completeTodo = (index) => {
    let todosCopy = [...todos]
    todosCopy.splice(index, 1)
    setTodos(todosCopy)
  }
  return (
    <div className='container'>
      <header className='titleContainer'>
        <p className='title'>TO DO'S</p>
      </header>

      <section className='inputContainer'>
        <input className='input' value={todo} placeholder='Add to do' onChange={handleInput}/>
        <button className='addTodo' onClick={addTodo}>
          <p className='textAddTodo'>+</p>
        </button>
      </section>

      <section className='todosContainer'>
        {
          todos.length === 0 ?
          <p className='message'>There're no to do's</p> :
          todos.map((todo, index) => {
            return <div className='todo' key={index} >
              <p className='todoText'>{todo}</p>
              <button className='todoButton' onClick={() => completeTodo(index)}>X</button>
            </div>
          })
        }
      </section>
      
      <nav className='links'>
        <a className='link' href='https://www.linkedin.com/in/facundo-figueroa-dev' target ='_blank' rel="noreferrer">
          <p>LinkedIn</p>
        </a>
        <a className='link' href='https://github.com/FacundoFigueroa23' target ='_blank' rel="noreferrer">
          <p>GitHub</p>
        </a>
        <button className='link' onClick={() => alert("Currently working on it")}>
          <p>Portfolio</p>
        </button>
      </nav>
    </div>
  );
}

export default App;
