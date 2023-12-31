import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Form';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  // const removeBodyClasses = () =>{
  //   document.body.classList.remove('bg-black')
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-warning')
  //   document.body.classList.remove('bg-danger')
  //   document.body.classList.remove('bg-primary')
  // }

  const toggleMode = ()=>{
    // removeBodyClasses();
    // console.log(cls)
    // document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#001133';
      showAlert("Dark mode has been enabled" , "success");
      document.title = "Textme - DarkMode";
      // setInterval(() => {
      //   document.title = 'Textutils is Amazing!!';
      // }, 1500);
      // setInterval(() => {
      //   document.title = 'Install Textutils Noww!!';
      // }, 2500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled" , "success");
      document.title = "Textme - LightMode";
    }
  }

  return (
    <>
    <Router>
      <Navbar title="Textme" about="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
      <Routes>
          <Route path="/about" element={<About mode={mode}/>}></Route>
          
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra" mode={mode}/>}></Route>
          {/* <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode}/> */}
          
             
        </Routes>
        </div>
      </Router>
      
    </>
  );
}
export default App;
