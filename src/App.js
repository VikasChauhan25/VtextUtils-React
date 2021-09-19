import './App.css';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';

//import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

 
function App() {
  const[mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500);
  }
  
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#081d32';
      showAlert("dark mode has been enable","success");
      document.title = 'VtextUtils - Dark Mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enable","success");
      document.title = 'VtextUtils - Light Mode';
    }
  }
  return (
    <>

    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    {/* <Router> */}
    <Navbar title="VtextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/* <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route> */}
          {/* <Route path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route> */}
        {/* </Switch> */}
    </div>
    {/* </Router> */}
    </> 
  );
}

export default App;