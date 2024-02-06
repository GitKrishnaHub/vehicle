import React from 'react'
import './Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
  return (
    <header className='header '>
      <div className="h-container">
        <div className="h-menu" onClick={() => {
                        const nav_header = document.querySelector('.navbar');
                        const toggleMobile = () => {
                            nav_header.classList.toggle('active');
                        }
                        toggleMobile()
                    }}>
              <MenuIcon className='mobile-icon' name='menu' />
              <CloseIcon className='mobile-icon' name='close' />
        </div>
        {/* <div className="h-search">
          <input type="text" name="" id="" />
        </div> */}
        <div className="h-profile">
            <div className="h-data">
                <h4>Hey' Admin</h4>
            </div>
            <div className="h-image">
                <img src="" alt="Profile" />
            </div>
        </div>
      </div>
    </header>
  )
}

export default Header
