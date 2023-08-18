import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, 
  Route, Redirect,} from "react-router-dom";
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Forgot_pass from './Components/Forgot_pass/Forgot_pass';
import Home from './Components/Main/Home';

function App() {
  return (
    <React.Fragment>
     <Router>
      
        <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/Forgot_pass' Component={Forgot_pass} />
        </Routes>
        
     </Router>
    </React.Fragment>
  );
}

export default App;
