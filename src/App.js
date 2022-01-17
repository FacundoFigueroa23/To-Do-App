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
        <p className='title'>To Do's</p>
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
          <p>There're no to do's</p> :
          todos.map((todo, index) => {
            return <button className='todo' key={index} onClick={() => completeTodo(index)}>
              <p className='todoText'>{todo}</p>
            </button>
          })
        }
      </section>
    </div>
  );
}

export default App;
