import React, { useState } from 'react'
import './Login.css'
import { google,logo } from '../../config/Pageitems';
// import AppleIcon from '@mui/icons-material/Apple';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faLinkedin, faTwitterSquare, faGithub } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import  Cookies  from 'universal-cookie';
 
const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const userLogin=async(e)=>{
    e.preventDefault();
    const response=await fetch('http://localhost:3000/api/auth/login',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify({
        email,
        password,
      }),
      credentials: 'include', // Include cookies in the request
    })
    console.log(response)
    // const cookieHeader = response.headers['set-cookie'];
    // console.log(cookieHeader)
    // console.log(response.headers)
    if (response.ok) {
      // Extract cookies from the responseponse headers
      const cookies = new Cookies();
      const token = cookies.get('token'); // Assuming 'token' is the name of the cookie storing the 
      // console.log('Token:', token);
      // Redirect or handle successful login
      // For example, redirect to a dashboard page
      navigate('/home/dashboard');
      } else {
      // Handle login failure
      // For example, show an error message
      alert('Login failed')
      console.error('Login failed');
      }
  }
  return (
    <section className='Login'>
      <div className="l-container">
        <div className="l-left">
          <div className="background"></div>
          <div className="l-data">
            <div className="l-logo">
              <img src={logo} alt="img" />
            </div>
            <div className="base-logo">
              <h1>BASE</h1>
            </div>
            <nav>
              <ul className="social-media">
                <li><FontAwesomeIcon icon={faGithub} /></li>
                <li><FontAwesomeIcon icon={faTwitterSquare} /></li>
                <li><FontAwesomeIcon icon={faLinkedin} /></li>
                <li><FontAwesomeIcon icon={faDiscord} /></li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="l-right">
          <section className="l-header">
            <h1>Sign In</h1>
            <h4>Sign in to your account</h4>
          </section>
          <form method='POST' className="login-form">
            <div className="l-social">
              <div className="l-google">
                <img src={google} alt="google" />
                <span>Sign in with Google</span>
              </div>
              {/* <div className="l-apple">
                <span><AppleIcon /></span>
                <span>Sign in with Apple</span>
              </div> */}
            </div>
            <div className="l-email">
              <label htmlFor="email">Email addresponses</label>
              <input type="text" name="email" id="email" value={email}  onChange={(e)=>setEmail(e.target.value)} required />
            </div>
            <div className="l-pass">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
            </div>
            <div className="submit">
              <h4>Forgot password?</h4>
              <button type="submit" id='Signin' onClick={userLogin}>Sign In</button>
            </div>
            <div className="l-createAcc">
              <p>Don't have an account? <span>Register here</span></p>
            </div>
            <nav>
              <ul className="social-media2">
                <li><FontAwesomeIcon icon={faGithub} /></li>
                <li><FontAwesomeIcon icon={faTwitterSquare} /></li>
                <li><FontAwesomeIcon icon={faLinkedin} /></li>
                <li><FontAwesomeIcon icon={faDiscord} /></li>
              </ul>
            </nav>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Login
