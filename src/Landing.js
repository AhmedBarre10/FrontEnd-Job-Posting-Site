import React from 'react'
import background from "./images/Capture.PNG"
import full from "./images/full-logos.png"
    function Landing (props){

    return (
        
        <div>
            
            <div className = "landingcont"> 
          
  <div className = "logo"><img src = {full} /> </div>
  <div className = "cont"><p className = "h1"> Find your dream job.</p> <h3 className = "desc">
  This is a platform for recruiters and job hunters.
Recruiters can post a position and their contact information. Job seekers 
can find the perfect job and directly contact them.
      </h3> 
       </div>
            <div className = "heroimg">
            <img   src = {background}/>

            </div>
            </div>
        </div>
    )
}

export default Landing
