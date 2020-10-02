import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import './App.css';
import Landing from "./Landing"
import Login from "./Login"
import Offer from "./Offer"
import Allpost from "./Allpost"
import Try from "./Try"
import SignUp from "./Signup"
import Logout from "./Logout"
import {useState , useEffect} from "react"
import PrivateLinks from "./PrivateLinks"
import PrivateRoute from "./PrivateRoute"
const Nav = () => {
    const token = window.localStorage.getItem("token")
    const[tok,setTok] = useState()
    useEffect(()=>{
        if(token){
return(<div>

    
</div>)
        }
    })
    return (
        <div>
            <Router>


<nav>
   <div className = "links">
   <Link className = "homelink"  to = '/'> Home  </Link>
   <Link to = '/Login'> Login</Link>  
   <Link to = '/SignUp'> SignUp </Link>
 


        <Link to = "/posts"> Jobs </Link>
        <Link to = "/PostJob"> Post a Job </Link>
        </div>
        </nav>     
      
   <Route  exact path="/" component = {Landing}/>
 
    <Route  exact path="/Login" component = {Login}/>
   
    <Route exact path="/Logout" component = {Logout}/>

    <Route  exact path="/posts" component = {Allpost} />

    <Route  exact path="/SignUp" component = {SignUp}/>

    <Route  exact path="/PostJob" component = {Offer}/>

    <Route exact path="/try/:id" component = {Try}/>

    </Router>

        </div>
    )
}

export default Nav
