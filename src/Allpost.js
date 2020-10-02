import React from 'react';
import logo from './images/logo.png';
import './Style/App.css';
import {useState , useEffect} from "react"
import {Link} from "react-router-dom"
import { axiosWithAuth } from "./utils/axiosWithAuth";

function Allpost(props) {

  const[tutors , setTutors] = useState([])
  const[tutor , setTutor] = useState([])

const[ad , setAd] = useState()

useEffect(()=>{
  axiosWithAuth().get("/api/Jobs")
  .then(res => {
    setTutor(res.data)
  })
  .catch(()=>{
    props.history.push('/login')
  })

  
},[])
useEffect(()=>{
  axiosWithAuth().get("/api/StudentLogin")
  .then(res => {
    setTutors(res.data)
  })
},[])
// useEffect(()=>{
//   axiosWithAuth().get("/api/Jobs")
//   .then(res => {
//     setTutors(res.data)
//   })
// },[])

  return (
    <div>
   <nav className = "out" >
   <Link  to = '/Logout'> Logout</Link>  
        </nav>     
      
<div className = "posts"> <div className = "postcont">        <div className = "poststutor"> <h2> Welcome <span> {tutors.name} </span> </h2> </div><br></br>
 <p className = "postss"> Find your dream job . </p>  </div>
 </div>

    <div className="Apps">
    <ul class="flex-container wrap">

    
{tutor.map(item=>{
  return(
    <div className = "tutors" key = {item.id}>
<img src = {logo}/> 
     <a className = "Tutor" onClick = { ()=> window.location.pathname = `/try/${item._id}`}>
     <h2> {item.companyName} </h2> 
     <p className = "title"> {item.title} </p> 

{item.location}
     <p className = "sub-cont" >  Skills Required :  {item.skillsrequired} </p>
<button> Contact Info </button>
         </a> 
      </div>
  )
})}
</ul>



    </div>
    </div>
  );
}

export default Allpost;
