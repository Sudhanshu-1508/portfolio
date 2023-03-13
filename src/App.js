import './App.css';
import Head from './components/Body/Head';
import Sidebar from './components/Nav/Sidebar';
import Skills from './components/Skills/Skills';




function App() {
  return (
    <div className="App">
      <Sidebar />
      <Head />
      <Skills />
    </div>
  );
}

export default App;
