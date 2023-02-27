import React from 'react'
import FastContact from '../FastContact/FastContact'
import './NavBar.css'

export default function NavBar() {
  return (
    <>
    <div className='NavBar'>
        
        <p>El Guanouni <span>Aymane</span> </p>
        <ul>
            <li>About <p>01</p></li>
            <li>Skills <p>02</p></li>
            <li>Projects <p>03</p></li>
            <li>Contact <p>04</p></li>
        </ul>
    </div>
    
    </>
  )
}
