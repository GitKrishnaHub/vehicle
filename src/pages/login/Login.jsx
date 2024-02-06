import React from 'react'
import { loginphoto } from '../../images/image'
import './Login.css'
const Login = () => {
    return (
        <section className='login'>
        <img src={loginphoto} alt="background" />
        <header className='l-logo'><h1>VTS</h1></header>
            <div className="l-container">
                <div className="l-data">
                    <form action="" className='login-form'>
                        <div className="l-heading">
                            <h1>Login</h1>
                        </div>
                        <div className="l-email">
                            <label htmlFor="email">Email Address</label>
                            <input type="text" name="email" id="email" required />
                        </div>
                        <div className="l-password">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" required />
                        </div>
                        <div className="l-forgot">
                            <p>Forgot Password ?</p>
                        </div>
                        <div className="l-btn">
                            <button type="submit" id='sub-btn'>Login</button>
                        </div>
                        <div className="l-createacc">
                            <p>Create new Account? <span className='l-signup'>Sign Up</span></p>
                        </div>
                    </form>
                </div>
                <div className="l-data"><h1>Vehicle Tracking System</h1></div>
            </div>
        </section>
    )
}

export default Login
