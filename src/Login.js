import React from "react"
import { axiosWithAuth } from "./utils/axiosWithAuth";
import {Link} from "react-router-dom"
import full from "./images/full-logo.png"

class Login extends React.Component {




    constructor() {
        super();
        this.state = {
            credentials: {
                email: '',
                password: ''
            },
            alert:"",

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
    }

    handleSubmit = e => {
    	e.preventDefault();
        axiosWithAuth().post('/api/StudentLogin', this.state.credentials)
        .then(res => {
            window.localStorage.setItem('token', res.data.token);
            this.props.history.push('/posts');
            this.setState({...this.state,alert:"Success"});

        })
        .catch(err => {
            this.setState({...this.state,alert:"Unable to sign in"});
        })
    }   

    render() {
        return (
            <div> 
                  <span className = "logos"><img className = "logo-img" src = {full} /> </span>
                  <div className = "auth-container" >

            <div className = "auth-cont" >
            <h1 className = "welcome"> We are <span> Ts Jobs</span></h1>
<h4> Welcome  login!</h4>

                                <p className = "alert"> {this.state.alert} </p>
            <div className="LoginPage">
                <form className = "Login" onSubmit={this.handleSubmit}>
                    <input name="email" placeholder="email" onChange={this.handleChange}/>
                    <input type = "password"name="password" placeholder="Password" onChange={this.handleChange}/>
                    </form>

                   <div className = "auth">
                   <button onClick ={()=> this.props.history.push('/SignUp')}  className = "signup-button">
                       
                   <Link>SignUp</Link>
                       </button>

                   <button onClick = {this.handleSubmit} className = "login-button" >Login</button>
                   </div>

        




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

export default Login