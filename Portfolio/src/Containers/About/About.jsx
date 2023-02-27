import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './About.css'
import Image1 from './Images/Image1.jpeg'
import Image2 from './Images/Image2.jpeg'

export default function About() {


   const [scrollY , setScrolly] = useState(0);
   const [scrolled , setScrolled] = useState(false);
    
   window.addEventListener("scroll" , ()=> {
       setScrolly(window.scrollY)   
   }) 

   useEffect(()=> {
       if(scrollY >= 180){
         setScrolled(true)
       }
       else{
         setScrolled(false)
       }
   } , [scrollY])

  return (
    <div className='About'>
       <div className={scrolled ? 'Index Active' : 'Index'}>
          <h1>01</h1>
          <h3>About</h3>
       </div>
       <div className='SocialClone'>
             <div className='post'>
                 <div className={scrolled ? 'ActiveDiv' : ' '}></div>
             </div> 
       </div>
       <div className='AboutDescription'>
          <h1> <del>WHO AM I?</del> </h1>
          <div>
            <ul className={scrolled ? 'ActiveUL' : ' '}>
               <li>
                  First Name : Aymane
               </li>
               <li> Last Name : El Guanouni</li>
               <li className='ActiveLi'> Age : 20</li>
               <li> Based in : Tangier , Morocco </li>
               <li> By the way i love tangier</li>
            </ul>
          </div>

       </div>
    </div>
  )
}
