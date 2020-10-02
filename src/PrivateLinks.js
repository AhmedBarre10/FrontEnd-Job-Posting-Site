import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";


  const token = window.localStorage.getItem('token')

const PrivateLinks = ({ component: Component, ...rest }) => (

    <Route {...rest} render={(props) => (
      token === ''
        ?       <div>
        <nav>
   <div className = "links">
   <Link className = "homelink"  to = '/'> Home  </Link>
   <Link to = '/Login'> Login</Link>  
   <Link to = '/SignUp'> SignUp </Link>
 
   </div>

   </nav> 
   </div>
        :
        <div>             <nav>
        <div className = "links">
        <Link className = "homelink"  to = '/'> Home  </Link>
        <Link to = "/logout"> Logout </Link>
        <Link to = "/posts"> Jobs </Link>
        <Link to = "/PostJob"> Post a Job </Link>
        </div>
        </nav>  </div>   
    )} />



    
  )
export default PrivateLinks
