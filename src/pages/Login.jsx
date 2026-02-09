import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {  
    return (   
        <div className="login-container">
            <h2>Login to Your Account</h2>
            <form className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required /> 
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <p className="register-link">
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
}