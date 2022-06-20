import React from 'react'
import './Link.css'

export default function Link({name, url}) {
  return (
    <a className='link' href={url} target ='_blank' rel="noreferrer">
        <p>{name}</p>
    </a>
  )
}