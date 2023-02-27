import React from 'react'
import FastContact from '../FastContact/FastContact'
import './NavBar.css'

export default function NavBar() {
  return (
    <>
    <div className='NavBar'>
        
        <p>El Guanouni <span>Aymane</span> </p>
        <ul>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
    </div>
    <FastContact/>
    </>
  )
}
