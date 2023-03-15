import './App.css';
import Head from './components/Body/Head';
import Contact from './components/Contact/Contact';
import Sidebar from './components/Nav/Sidebar';
import Skills from './components/Skills/Skills';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Project from './components/Projects/Project';



function App() {
  return (
    <>
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path='/' element={<Head></Head>} />
        <Route path='/skills' element={<Skills></Skills>} />
        <Route path='/contact' element={<Contact></Contact>} />
        <Route path='/project' element={<Project></Project>} />
      </Routes>
      
    
    </div>
    </>
  );
}

export default App;
