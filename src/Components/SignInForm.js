import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import '../styles/login.css';
import LoggedInUser from "../utility/loggedInUser"

class SignInForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      error: "",
      redirectToReferer:false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }
  authenticate = (jwt, next) => {
    if(typeof window !== "undefined"){ 
        // localStorage.setItem("jwt", JSON.stringify(jwt))
        localStorage.setItem("token",JSON.stringify(jwt.accessToken))
        next();
    }
}


  handleLogin(event){
    event.preventDefault();
    
    console.log("The form was submitted with the following data:");
    console.log(this.state);
    const { email, password } = this.state;
        const user = {
             email,
            password
        };
        this.signin(user)
        .then(data => {
            if(data.error){
                this.setState({error:data.error})
            } 
            else{
               LoggedInUser.setLoggedUser(data)
               this.authenticate(data, ()=>{
                  this.setState({redirectToReferer:true})
                })
            } 
          })
}

  signin = user => {
    return fetch("http://localhost:4000/lms/login", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
}

  render() {
    const { email, password, error, redirectToReferer } = this.state;
    
    if(LoggedInUser.getLoggedUser().isAdmin === true){
      console.log("loggedin")
      return <Navigate to="/admindashboard" />
  }
    if(redirectToReferer){
              return <Navigate to="/profile" />
    }
    return (
      <>
      <section className="showcase">
      <div className="container grid">
        <div className="showcase-text">
          <h1>LOGIN TO <span className="title-color">EDUCADEMY</span></h1>
          <p>
            Login to the Educademy Portal to continue taking giant leaps in your academic endeavours.
          </p>
          <Link to="/aboutUs" className="btn btn-outline">
              Read More
          </Link>
        </div>

        <div className="showcase-form card">
          <h2>Login Section</h2>

          <form className="formFields">
            <div className="form-control">
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            </div>
            <div className="form-control">
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            </div>
            <input type="submit" value="Login" className="btn btn-primary" onClick={this.handleLogin}/>
            <span><Link to="/signUp" >
              Create an account
            </Link></span>
          </form>
        </div>
      </div>
    </section>
      </>


    );
  }
}

export default SignInForm;
