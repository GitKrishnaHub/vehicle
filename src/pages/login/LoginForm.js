import React, { useState } from 'react'
import { google } from '../../images/Images';
// import { faDiscord, faLinkedin, faTwitterSquare, faGithub } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import  Cookies  from 'universal-cookie';
import { Send, Visibility, VisibilityOff } from '@mui/icons-material';
import LoadingButton from '@mui/lab/LoadingButton';
import Alert from '@mui/material/Alert';
import Login from './Login';


const LoginForm = ({setShowCustomAlert}) => {
    const navigate = useNavigate();
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();
    const [loading, setLoading] =useState(false);
     

    const userLogin=async(event)=>{
      event.preventDefault();
      const cookies = new Cookies();
      const token = cookies.get('token'); 
      const response=await fetch('http://localhost:3000/api/auth/login',{
        method: 'POST',
        headers: {'Content-Type': 'application/json','token':'token'},
        body:JSON.stringify({
          email,
          password,
        }),
        credentials: 'include', 
      })
      if (response.ok) {
        setLoading(true); 
        navigate('/Overview/');
        } else {
          setShowCustomAlert(true);
          setTimeout(()=>setShowCustomAlert(false),3000)
        }
    }

     
    const toggelepassword=()=>{
      const password=document.getElementById('password')
      const hidden=document.getElementById('hidden')
      const visble=document.getElementById('visible')
      if(password.type==='password'){
        password.type='text'
        hidden.style.display='flex'
        visble.style.display='none'
      }else{
        password.type='password';
        hidden.style.display='none'
        visble.style.display='flex'
      }
    }

  return (
    <form method='POST' className="login-form">
     <div className="l-header">
            <h1>Sign In</h1>
            {/* <h4>Sign in to your account</h4> */}
          </div>
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
      <input type="text" name="email" id="email" placeholder='Email Address' value={email}  onChange={(e)=>setEmail(e.target.value)} required />
    </div>
    <div className="l-pass">
      <input type="password" name="password" id="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required />
      <div className="l-visibility" onClick={toggelepassword}>
      <span id='visible'><Visibility id='eye' name='visible'  /></span>
      <span  id='hidden' style={{display:'none'}}><VisibilityOff id='eye' name='hidden'/></span>
      </div>
    </div>
    <div className="submit">
      <h4>Forgot password?</h4>
        <LoadingButton
          size="small"
          endIcon={<Send/>}
          loading={loading}
          loadingPosition="end"
          variant="contained"
          type="submit"
           id='Signin'
            onClick={userLogin}
             
        >
          <span>Sign In</span>
        </LoadingButton>
    </div>
    <div className="l-createAcc">
      <p>Don't have an account? <span>Register here</span></p>
    </div>
    {/* <nav>
      <ul className="social-media2">
        <li><FontAwesomeIcon icon={faGithub} /></li>
        <li><FontAwesomeIcon icon={faTwitterSquare} /></li>
        <li><FontAwesomeIcon icon={faLinkedin} /></li>
        <li><FontAwesomeIcon icon={faDiscord} /></li>
      </ul>
    </nav> */}
       
  </form>
  )
}

export default LoginForm
