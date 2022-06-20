import React from 'react'
import './Input.css'

export default function Input({handleInput, addTodo, value}) {
  return (
    <div className='inputContainer'>
        <input className='input' value={value} placeholder='Add to do' onChange={handleInput}/>
        <button className='addTodo' onClick={addTodo}>
            <p className='textAddTodo'>+</p>
        </button>
    </div>
  )
}