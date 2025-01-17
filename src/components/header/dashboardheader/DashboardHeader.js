import React from 'react'
import { navData } from '../../navbar/NavData';
import { NotificationsNone,Menu,Close,Logout } from '@mui/icons-material';
import './DashboardHeader.css'
import {useLocation} from 'react-router'
const DashboardHeader = () => {

  const location = useLocation()
  const currentpath=location.pathname.substring(1)
  const currentpage=currentpath.split('/')
  return (
    <section className='dashboard-header '>
      <header className="dh-container">
        <div className="dh-menu" onClick={() => {
                        const nav_header = document.querySelector('.navbar');
                        const toggleMobile = () => {
                            nav_header.classList.toggle('active');
                        }
                        toggleMobile()
                    }}>
              <Menu className='mobile-icon' name='menu' />
              <Close className='mobile-icon' name='close' />
                
        <div className="dh-page">
          <h1>{currentpage}</h1>
        </div>
        </div>
        <div className="dh-profile">
        <div className="dh-bell">
          {/* <NotificationsNone style={{fontSize:'30px'}}/> */}
        </div>
            <div className="dh-data">
                <h4>Message</h4>
            </div>
            <div className="dh-image">
                <img src="" alt="Profile" />
            </div>
            <div className="dh-logoout">
              <Logout/>
            </div>
        </div>
      </header>
    </section>
  )
}

export default DashboardHeader
