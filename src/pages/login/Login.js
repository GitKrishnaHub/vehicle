import React,{useState} from 'react'
import './Login.css'
import { google,logo } from '../../config/Pageitems';
// import AppleIcon from '@mui/icons-material/Apple';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faLinkedin, faTwitterSquare, faGithub } from '@fortawesome/free-brands-svg-icons';
import LoginForm from './LoginForm';
import { loginsvg } from '../../images/Images';
import AlertPopup from '../../components/alert/AlertPopup';
const Login = () => {
  const [showCustomAlert, setShowCustomAlert] = useState(false);
  return (
    <section className='Login'>
    
    {
      showCustomAlert && <AlertPopup message="This is a custom alert message."/> 
    }
      <div className="l-container">
        <section className="l-frame">
        <div className="l-data">
        <div className="l-content">
          <h1>Your Best Value Proposition</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia suscipit, beatae reprehenderit doloribus sequi ut eius quibusdam itaque dolorem tempore nostrum velit. Aliquam voluptatem unde eaque nihil placeat vel laudantium.</p>
        </div>
           <div className="l-image">
              <img src={loginsvg} alt="Login" />
           </div>
        </div>
        </section>

        <section className="l-frame">
          <LoginForm  setShowCustomAlert={setShowCustomAlert}/>
        </section>
      </div>
    </section>
  )
}

export default Login
