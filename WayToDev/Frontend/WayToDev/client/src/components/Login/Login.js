import React from 'react';
import "./Login.css";
import Footer from "../Shared/Footer.js";
import Header from "../Shared/Header.js"
import LoginWindow from './components/LoginWindow';
function Login() {
    return (
        <div>
             <LoginWindow/>
            <Footer/>
        </div>
    )
}

export default Login
