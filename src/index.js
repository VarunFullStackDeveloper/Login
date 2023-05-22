import React from "react";
import ReactDOM from "react-dom/client";
import { UserLoginPage } from "./login";
import { UserSignupPage } from "./signup";
import './index.css'

const LoginPage=()=>{
    return(
    <>
    <div class="container">
    <input type="checkbox" id="check"/>
    <div class="login form">
      <header>Login</header>
      <form action="#">
        <input type="text" placeholder="Enter your email"/>
        <input type="password" placeholder="Enter your password"/>
        <a href="#">Forgot password?</a>
        <input type="button" class="button" value="Login"/>
      </form>
      <div class="signup">
        <span class="signup">Don't have an account?
         <label for="check" onClick={GoToSignup}>Signup</label>
        </span>
      </div>
    </div>
    </div>
    </>);
}


const SignupPage=()=>{
    return(
    <>
   <div class="container">
    <input type="checkbox" id="check"/>
    <div class="login form">
      <header>Signup</header>
      <form action="#">
        <input type="text" placeholder="Enter your username"/>
        <input type="email" placeholder="Enter your email"/>
        <input type="number" placeholder="Enter your phonenumber"/>
        <input type="password" placeholder="Enter your password"/>
        <input type="button" class="button" value="Signup"/>
      </form>
      <div class="signup">
        <span class="signup">Already have an account?
         <label for="check" onClick={GoToLogin}>Login</label>
        </span>
      </div>
    </div>
    </div>
    </>);
}

const GoToSignup=()=>{
    root.render(<SignupPage/>)
}

const GoToLogin=()=>{
    root.render(<LoginPage/>)
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<LoginPage/>)