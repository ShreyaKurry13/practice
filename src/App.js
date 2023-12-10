import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Form';
import { useState } from 'react';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="Textme" about="About us" mode={mode} toggleMode={toggleMode}/>

      <div className="container my-3">
          <TextForm heading="Enter your text to analyze"/>
          {/* <About/> */}
      </div>
      
      
    </>
  );
}

export default App;
