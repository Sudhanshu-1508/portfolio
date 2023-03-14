import React from 'react';
import './Sidebar.css';
//import './WhatsApp Image 2022-08-28 at 7.47.04 AM.jpeg';
import {FaGithub} from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Head from '../Body/Head';

function Sidebar() {

  function handleClick1 () {
    window.open('https://github.com/Sudhanshu-1508')
  }
    return (

      
        <div className="sidenav">
          <h2>Portfolio</h2>

          
            
          
          <Link to='/skills' className='links' >Skills </Link>
          <Link to='/contact' className='links' >Contact</Link>
          <a className='links' href="#">Link 4</a>
          
{/** 
          <Link to='' className='links'>About</Link>
          <Link to='/skills' className='links'>Skills</Link>
          <Link to='/projects' className='links'>Projects</Link>
          <Link to='contact' className='links'>Contact</Link>

     
          <Route path='/skills' Component={Skills} />
          
          <Route path='/contact' Component={Contact} />
          </Router>  
          */}
          <ul className='icons'>
          <li><a href='https://github.com/Sudhanshu-1508'><FaGithub /></a></li>
          <li><a href='https://www.linkedin.com/in/sudhanshu-kulkarni-72330318b/'><FaLinkedinIn /></a></li>
          </ul>
        </div>
        
       
      )
}

export default Sidebar