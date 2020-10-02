import React from 'react'
import './Style/App.css';
import {useState , useEffect} from "react"
import { axiosWithAuth } from "./utils/axiosWithAuth";

const Try = (props) => {
    const[user , setUser] = useState()
    const[tutor,setTutor] = useState()
    const[tutorid , setTutorid] = useState([])

    useEffect(()=>{
        axiosWithAuth().get(`/api/jobs/${props.match.params.id}`)
        .then(res =>  setTutorid(res.data))
      },[])


      axiosWithAuth().get('/api/tutor/a').then(res =>{
     setUser(res.data)
    })

      const Click = () =>{

          if(user != tutorid.User){
              alert('Not your Post')
          }

          if(user === tutorid.User){
            axiosWithAuth().delete(`/api/tutor/${props.match.params.id}`)
          }
        props.history.push("/posts");
      }


    return (
      <div className = "mores"> 
        <div className = "more">
            <h2> {tutorid.companyName} </h2>
            <br></br>
            <h2>  {tutorid.title } , {tutorid.location} </h2>
            <h2 className = "description">  {tutorid.description} </h2>
            <h2>   </h2>
            <h2>  Skills Required {tutorid.skillsrequired} </h2>
    <p> Recruiter Email {tutorid.email}</p>

            {/* <button onClick = {Click}> Delete </button> */}
        </div>
        </div>
    )
}

export default Try
  