import React from "react"
import { axiosWithAuth } from "./utils/axiosWithAuth";
import{Link} from "react-router-dom"
import full from "./images/full-logo.png"
class SignUp extends React.Component {

    constructor() {
        super();
        this.state = {
            isLoading: false,
            credentials: {
                name:"",
                email: '',
                password: ''
            }
        }
    }


    componentDidMount(){
        axiosWithAuth().get("/api/Jobs")
        .then(res => {
          this.props.history.push('/posts')
        })
        .catch(()=>{
        })
      
    }


    handleChange = e => {
   		this.setState({credentials: {
            ...this.state.credentials,
            [e.target.name]: e.target.value
        }});
        console.log(this.state.credentials);
    }

    handleSubmit = e => {
    	e.preventDefault();
        this.setState({...this.state, isLoading: true});

        axiosWithAuth().post('/api/StudentSignUp', this.state.credentials)
        .then(res => {
            // Give localStorage the token
            window.localStorage.setItem('token', res.data.token);
            this.setState({...this.state, isLoading: false});
            // Send logged in user to protected page
            this.props.history.push('/posts');
        })
        .catch(err => {
            console.log(err);
            this.setState({...this.state,alert:`${err}`});
            this.setState({...this.state, isLoading: false});
        })

    }   

    render() {
        return (
            <div> 
                
            <span className = "logos"><img className = "logo-img" src = {full} /> </span>
            <div className = "auth-container" >

      <div className = "auth-cont" >
<h1 className = "welcome"> We are <span> Tutor Script </span></h1>
<h4> Welcome  login as a Tutor </h4>

                          <p className = "alert"> {this.state.alert} </p>
      <div className="LoginPage">
          <form className = "Login" onSubmit={this.handleSubmit}>
          <input name="name" placeholder="name" onChange={this.handleChange}/>
              <input name="email" placeholder="email" onChange={this.handleChange}/>
              <input type = "password"name="password" placeholder="Password" onChange={this.handleChange}/>         
             <div className = "auth">
             </div>

  

          </form>

          <div className = "auth">
          <button onClick ={()=> this.props.history.push('/Login')} className = "login-button" >Login</button>

                   <button   onClick = {this.handleSubmit}    className = "signup-button">
                       
                   <Link>Signup</Link>
                       </button>

                   </div>

          {this.state.isLoading && <div><h3>Logging in</h3></div>}
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
}

export default SignUp