import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Job from "./Allpost"
import Landing from "./Landing"
import Login from "./Login"
import Offer from "./Offer"
import Allpost from "./Allpost"
import Try from "./Try"
import SignUp from "./Signup"
import Logout from "./Logout"
import {useState , useEffect} from "react"
import Nav from "./Nav"



function App() {


const token = window.localStorage.getItem("token")








  return (
<div className="App">
<Nav/>
    
   </div>
  );
}

export default App;
