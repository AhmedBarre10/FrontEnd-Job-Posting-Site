import  React from  "react";
import { Route, Redirect } from  "react-router-dom";
const token = window.localStorage.getItem('token')

const PrivateRoute = ({ component: Component, ...rest }) => (

    <Route {...rest} render={(props) => (
      token  === true? (<Component {...props} /> 
      ):
      (<Redirect to='/Login' />)
 


     
    )} />
  )
  export default PrivateRoute