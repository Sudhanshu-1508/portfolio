import React from 'react';
import './Sidebar.css';
//import './WhatsApp Image 2022-08-28 at 7.47.04 AM.jpeg';
import {FaGithub} from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Head from '../Body/Head';
import { useState } from 'react';

function Sidebar() {
  const [isActive, setIsActive] = useState(false);

  function toggleSidebar() {
    setIsActive(!isActive);
  }

  return (
    <div className={`sidenav ${isActive ? "sidebar-active" : "sidebar-inactive"}`}>
      <div className="toggle" onClick={toggleSidebar}>Toggle</div>
      <h2>Portfolio</h2>
      <Link to="/" className="links">Home</Link>
      <Link to="/skills" className="links">Skills</Link>
      <Link to="/project" className="links">Projects</Link>
      <Link to="/contact" className="links">Contact</Link>
      <ul className="icons">
        <li><a href="https://github.com/Sudhanshu-1508"><FaGithub /></a></li>
        <li><a href="https://www.linkedin.com/in/sudhanshu-kulkarni-72330318b/"><FaLinkedinIn /></a></li>
      </ul>
    </div>
  )
}

export default Sidebar;
