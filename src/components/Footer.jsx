import React from 'react'
import './Footer.css'
import Link from './Link'

export default function Footer() {
  return (
    <nav className='links'>
      <Link name='LinkedIn' url='https://www.linkedin.com/in/facundo-figueroa-dev' />
      <Link name='GitHub' url='https://github.com/FacundoFigueroa23' />
      <Link name='Portfolio' url='https://facundoleonelfigueroa.vercel.app' />
    </nav>
  )
}