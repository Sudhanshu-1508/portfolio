import './App.css';
import Head from './components/Body/Head';
import Contact from './components/Contact/Contact';
import Sidebar from './components/Nav/Sidebar';
import Skills from './components/Skills/Skills';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Project from './components/Projects/Project';
import Toggle from './components/Toggle/Toggle';
import React, { useState } from 'react';

export const NavContext = React.createContext();

function App() {
  const [isActive, setIsActive] = useState(false);

  function toggleSidebar() {
    console.log("1")
    setIsActive(!isActive);
  }
  return (
    <>
    <NavContext.Provider value={isActive}>
    <div className="App">
    
      <div >
        <button className="toggle" onClick={toggleSidebar}>Hide Navbar</button>
        </div>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Head></Head>} />
        <Route path='/skills' element={<Skills></Skills>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/project' element={<Project></Project>} />
      </Routes>
      
    
    </div>
    </NavContext.Provider>
    </>
  );
}

export default App;
