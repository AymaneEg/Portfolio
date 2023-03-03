import React from 'react'
import './Skills.css'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import { useState } from 'react';
import { useEffect } from 'react';


const KEY_SKILLS = {
   HTML : {
    Progress : 90
   } ,
   CSS : {
    Progress : 90
   } ,
   JS : {
    Progress : 80
   } ,
   REACT : {
    Progress : 80
   } ,
   RD : {
    Progress : 90
   } ,
   VC : {
    Progress : 90
   } ,
   XML : {
    Progress : 80
   } ,
   SASS : {
    Progress : 95
   } ,
}

export default function Skills() { 
 


  const [ scrollY,setScrollY ] = useState(0);
  const [scrolled , setScrolled] = useState(false);

  window.addEventListener("scroll" , ()=> {
    setScrollY(window.scrollY)
  })

  useEffect(()=> {
     if(scrollY >= 1200){
       setScrolled(true);
     }
     else{
      setScrolled(false);
     }
  } , [scrollY])
   


  return (
    <div className='Skills'>
        <div className='Index2'>
            <div>
                <h1>02</h1>
                <h3>KeySkills</h3>
            </div>
          
      </div>
      <div className='SkillsBoard'>
          <div className='Skill1'>
            <ul>
              <li><p>Html</p><Progress className="f" percent={scrolled ?  KEY_SKILLS.HTML.Progress : 0} status="success" theme={{ success: { symbol: ' ', color: '#8a8888'}}}/></li>
              <li><p>Css</p><Progress percent={scrolled ?  KEY_SKILLS.CSS.Progress : 0} status="success" theme={{ success: { symbol: ' ', color: '#8a8888'}}}/></li>
              <li><p>JavaScript</p><Progress percent={scrolled ?  KEY_SKILLS.JS.Progress : 0} status="success" theme={{ success: { symbol: ' ', color: '#8a8888'}}}/></li>
              <li><p>React js</p><Progress percent={scrolled ?  KEY_SKILLS.REACT.Progress : 0} status="success" theme={{ success: { symbol: ' ', color: '#8a8888'}}}/></li>
              
            </ul>
          </div>
          <div>
          <ul>
              <li><p>Responsive design</p><Progress percent={scrolled ?  KEY_SKILLS.RD.Progress : 0} status="success" theme={{ success: { symbol: ' ', color: '#8a8888'}}}/></li>
              <li><p>Version Control</p><Progress percent={scrolled ?  KEY_SKILLS.VC.Progress : 0} status="success" theme={{ success: { symbol: ' ', color: '#8a8888'}}}/></li>
              <li><p>Xml & Json</p><Progress percent={scrolled ?  KEY_SKILLS.XML.Progress : 0} status="success" theme={{ success: { symbol: ' ', color: '#8a8888'}}}/></li>
              <li><p>Sass</p><Progress percent={scrolled ?  KEY_SKILLS.SASS.Progress : 0} status="success" theme={{ success: { symbol: ' ', color: '#8a8888'}}}/></li>
              
            </ul>
          </div>
      </div>
      
    </div>
  )
}
