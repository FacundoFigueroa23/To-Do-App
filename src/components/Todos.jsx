import React from 'react'
import './Todos.css'
import Todo from './Todo'

export default function Todos({todos, completeTodo}) {
  return (
    <div className='todosContainer'>
    {
        todos.length === 0 ?
        <p className='message'>There're no to do's</p> :
        todos.map((todo, index) => {
            return <Todo todo={todo} completeTodo={completeTodo} i={index} key={index}/>
          })
    }
    </div>
  )
}