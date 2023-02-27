import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Profile from './Containers/Profile/Profile'
import NavBar from './Containers/NavBar/NavBar'
import FastContact from './Containers/FastContact/FastContact'
import About from './Containers/About/About'
import Skills from './Containers/Skills/Skills'

function App() {

  return (
    <div className="App">
       <NavBar/>
       <Profile/>
       <FastContact/>
       <About/>
       <Skills/>
    </div>
  )
}

export default App
