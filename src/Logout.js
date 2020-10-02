import React from 'react'

const   Logout = (props) => {
    try{
        window.localStorage.setItem('token' ,  "")
        props.history.push('/login')
    }
    catch(err){
        console.log(err)
    }

    

return(
    <div>

    </div>
)


}

export default Logout
