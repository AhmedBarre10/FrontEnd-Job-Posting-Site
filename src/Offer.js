import React from 'react'
import axios from "axios"
import { axiosWithAuth } from "./utils/axiosWithAuth";
import full from "./images/full-logo.png"
import {useState ,useEffect } from "react"

const Offer = (props) => {
    const[companyName , setCompanyName] = useState()
    const[title , setTitle] = useState()
    const[description,setDescription] = useState()
    const[skillsrequired,setskillsrequired] = useState()
    const[location,setlocation] = useState()
    const[email,setEmail] = useState()
    const[tutor ,setTutor] = useState()

    useEffect(()=>{
      axiosWithAuth().get("/api/Jobs")
      .then(res => {
        setTutor(res.data)
      })
      .catch(()=>{
        props.history.push('/login')
      })
    })

const[alert, setAlert] = useState()
    const [formData, setFormData] = useState({
      title: '',
      companyName: '',
      description: '',
      skillsrequired: '',
      location: '', 
      email:" "
      });

const onChange = (e) =>{
    setFormData({ ...formData, [e.target.name]: e.target.value });


}



const submit = () =>{
  props.history.push('/posts')

}
    const onSubmits = (e) =>{
        e.preventDefault()
        axiosWithAuth().post("/api/Jobs",{
        companyName:formData.companyName,
        title:formData.title,
        skillsrequired:formData.skillsrequired,
        description:formData.description,
        location:formData.location,
        email:formData.email
     })
     .then(res => {
      props.history.push('/posts')
    })
    .catch(err => {

    })

    }


    return (

        <div> 
        <span className = "logos"><img className = "logo-img" src = {full} /> </span>
        <div className = "auth-container" >

  <div className = "auth-cont" >
  <h1 className = "welcome"> Make a job <span> posting </span></h1>
<h4 className = "share"> Share your comapnies open positions. </h4>
    <p className = "alert"> {alert} </p>
  <div className="LoginPage">
      <form className = "Login" onSubmit={onSubmits}>
      <input placeholder = "Company Name" onChange = {onChange} name = "companyName" value = {companyName} />
            <input placeholder = "Title" onChange = {onChange} name = "title" value = {title} />
            <input placeholder = "Email" onChange = {onChange} type = 'email' name = "email" value = {email}/> 
            <textarea placeholder = "Description" onChange = {onChange} name = "description" value = {description} />
            <input placeholder = "Skills Required" onChange = {onChange} name = "skillsrequired" value = {skillsrequired}/>
            <input placeholder = "Location" onChange = {onChange} name = "location" value = {location}/>

            <button >  Submit </button>          
          </form>






  </div>
  </div>
  <div className = "login-blue-cont">
  <div className = "login-blue">

</div>
  </div>

  </div>
</div>


    )
}

export default Offer
