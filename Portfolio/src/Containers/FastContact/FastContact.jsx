import React from 'react'
import { useState } from 'react'
import './FastContact.css'

export default function FastContact() {

    const [hoverd , setHover] = useState(false);

  return (

    <>
   
    <div className='FastContact'>
       <ul>
        <li ><i class='bx bxl-github' style={{color: hoverd ?'#fffada' : '#0c0c0c'}}  ></i></li>
        <li><i class='bx bxl-gmail' style={{color:'#0c0c0c'}}  ></i></li>
        <li><i class='bx bxs-phone' style={{color:'#0c0c0c'}}  ></i></li>
        <li><i class='bx bxl-linkedin' style={{color:'#0c0c0c'}}  ></i></li>
       </ul>
    </div>

     <h1 className='Creative'>Creative</h1>
     <h1 className='Creative2'>Creative</h1>
     <h1 className='Coding'>Coding</h1>
     <h1 className='Coding2'>Coding</h1>
    </>
  )
}
