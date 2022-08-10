import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import '../styles/signup.css';
import LoggedInUser from "../utility/loggedInUser";


var emailReg = /^([0-9A-Za-z])+[0-9A-Za-z_\.\-]+\@(northeastern)\.(edu)$/;
var passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
var nameReg = /^[a-zA-Z -]*$/;

const initState = {
  id:"",
  email: "",
  password: "",
  name: "",
  membershipType:"basic",
  hasAgreed: false,
  redirectToReferer:false,
  isAdmin:false,
  nameError: "",
  passwordError: "",
  emailError: ""  
};

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      id:"",
      email: "",
      password: "",
      name: "",
      membershipType:"basic",
      hasAgreed: false,
      redirectToReferer:false,
      isAdmin:false,
      nameError: "",
      passwordError: "",
      emailError: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validate = () => {
    let nameError =  "";
    let passwordError = "";
    let emailError = "";

  if (!emailReg.test(this.state.email) === true) {
      emailError = 'Email must be a @northeastern.edu address';
    }
    else { emailError = '' }

    if (!passwordReg.test(this.state.password) === true) {
      passwordError = 'Ensure password has one uppercase letter, one special case letter, one digit, one lowercase letter, minimum length 8';
    }

    else { passwordError = '' }

    if (!nameReg.test(this.state.name) === true) {
      nameError = 'Name should only have alphanumeric values';
    }

    else { nameError = '' }

        this.setState({ emailError });
        this.setState({ passwordError });
        this.setState({ nameError });
        
        if(emailError || passwordError || nameError) {
      return false;
    }
    return true;
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
        console.log(`token is ${jwt.accessToken
        }`)
        localStorage.setItem("token",JSON.stringify(jwt.accessToken))
        next();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const isValid = this.validate();
    if(isValid) {
    console.log("The form was submitted with the following data:");
    console.log(this.state);

    const { name,email, password,membershipType,hasAgreed, isAdmin,id } = this.state;
    
    const user = {
         email,
        password,
        name,
        membershipType,
        hasAgreed,
        isAdmin,
        id
    };
   

    this.signup(user)
    .then(data => {
        if(data.error){
            this.setState({error:data.error})
            
        } 
        else{
        
          const msg=data.message
          if(msg.includes('email_1 dup key')){
            this.setState({redirectToReferer:false})
            this.setState({emailError:"Email already exists!"})

          }
          else{
          const loggedUser={
            id:data._id,
            isAdmin:data.isAdmin,
            name:data.name,
            membershipType:data.membershipType
        }
           LoggedInUser.setLoggedUser(loggedUser)
           this.authenticate(data, ()=>{
              this.setState({redirectToReferer:true})
            })
          }
        } 
      })
      this.setState(initState);
    }
}

signup = user => {
return fetch("http://localhost:4000/lms/create", {
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
    .catch(err => console.log(`error is ${err}`));
}

  

  render() {
    const redirectToReferer=this.state.redirectToReferer;
    if(redirectToReferer){
      console.log("inside if")
      return <Navigate to="/profile" />
    }
    return (
      <>
      <section className="showcase">
      <div className="container grid">
        <div className="showcase-text">
          <h1>SIGN UP FOR <span className="title-color">EDUCADEMY</span></h1>
          <p>
            Sign up and create an account with us to take the first step towards your desired academic and professional goals with EDUCADEMY
          </p>
          <Link to="/aboutUs" className="btn btn-outline">
              Read More
          </Link>
        </div>

        <div className="showcase-form card">
          <h2>Sign Up</h2>

          <form className="formFields" onSubmit={this.handleSubmit}>
            <div className="form-control">
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Full Name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            </div>
            <div style={{color:"red", fontSize:12}}>{this.state.nameError}</div>
            <div className="form-control">
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            </div>
            <div style={{color:"red", fontSize:12}}>{this.state.passwordError}</div>
            <div className="form-control">
            <input
              type="text"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            </div>
            <div style={{color:"red", fontSize:12}}>{this.state.emailError}</div>
            <label className="formFieldLabel" htmlFor="membershipType">
              Select Membership
            </label><span> </span>
            <select name="membershipType" id="membershipType" className="formFieldInput" onChange={this.handleChange} value={this.state.membershipType}>
                <option value="basic">Basic</option>
                <option value="pro">Pro</option>
                <option value="premium">Premium</option>
            </select>
           
           
            <label className="formFieldCheckboxLabel">
              <input
                className="formFieldCheckbox"
                type="checkbox"
                name="hasAgreed"
                value={this.state.hasAgreed}
                onChange={this.handleChange}
              />{" "}
              I agree all statements in{" "}
              <a href="null" className="formFieldTermsLink">
                terms of service
              </a>
            </label>
           
            <button className="btn btn-primary" onClick={this.handleSubmit}>Sign Up</button>{" "}
            <Link to="/login" className="formFieldLink">
              I'm already member
            </Link>
          </form>
        </div>
      </div>
    </section>
      </>
    );
  }
}
export default SignUpForm;
