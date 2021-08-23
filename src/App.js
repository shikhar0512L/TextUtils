// import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Form from './Components/Form';
import Navbar from './Components/Navbar';
import React, { useState } from 'react'
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";



function App() {


const [alert, setAlert] = useState(null);    //Alert is aobject. 

const showAlert =(message,type)=>{
setAlert({
  msg:message,
  type:type
});

setTimeout(() => {
  setAlert(null);
}, 2000);

};

const [mode, setMode] = useState("light");

const toggleMode = ()=>{
  if (mode === "light") {
    setMode ("dark");
    document.body.style.backgroundColor = '#042743'
    showAlert("Dark mode has been enabled","sucess");
    
  } else {
    setMode( "light");
    document.body.style.backgroundColor = 'white'
    showAlert("Light mode has been enabled","sucess");
    
  }

}







  return (
<>
{/* <Router> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          </Route>
        </Switch> */}
{/* <hr /> */}
          <Form heading="Enter the text to analyze below" mode={mode} showAlert={showAlert}/>



</div>
{/* </Router> */}
</>
  );
}
export default App;