import React from 'react';
import './Sidebar.css';
//import './WhatsApp Image 2022-08-28 at 7.47.04 AM.jpeg';
import {FaGithub} from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

function Sidebar() {

  function handleClick1 () {
    window.open('https://github.com/Sudhanshu-1508')
  }

    return (
        <div className="sidenav">
          <h2>Portfolio</h2>

          <a className='links' href="#">Link 1</a>
          <a className='links' href="#">Link 2</a>
          <a className='links' href="#">Link 3</a>
          <a className='links' href="#">Link 4</a>
          <ul className='icons'>
          <li><a href='https://github.com/Sudhanshu-1508'>< FaGithub/></a></li>
          <li><a href='https://www.linkedin.com/in/sudhanshu-kulkarni-72330318b/'><FaLinkedinIn /></a></li>
          </ul>
        </div>  
      )
}

export default Sidebar