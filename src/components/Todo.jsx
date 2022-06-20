import React from 'react'
import './Todo.css'

export default function Todo({todo, completeTodo, i}) {
  return (
    <div className='todo'>
        <p className='todoText'>{todo}</p>
        <button className='todoButton' onClick={() => completeTodo(i)}>
            <img className='button' src='https://api.iconify.design/uiw:delete.svg?color=%23ff0000' alt='Delete'/>
        </button>
    </div>
  )
}