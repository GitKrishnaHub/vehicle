import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import './Navbar.css'
import Header from '../header/Header';

const Navbar = () => {
  return (
    <section className='navbar'>
        <nav className="n-container">
            <header className="n-logo">
                <h1>VTS</h1>
            </header>
            <div className="n-data">
                <div className="n-home">
                <MenuIcon/><h4> Dashboard</h4>
                </div>
                <div className="n-home">
                <MenuIcon/><h4>Vehicle</h4>
                </div>
                <div className="n-home">
                <MenuIcon/><h4>Add</h4>
                </div>
                <div className="n-home">
                <MenuIcon/><h4>Remove</h4>
                </div>
                <div className="n-home">
                <MenuIcon/><h4>Fetch</h4>
                </div>
                <div className="n-home">
                <MenuIcon/><h4>Watch</h4>
                </div>
                 
                <div className="n-home">
                <MenuIcon/><h4>Setting</h4>
                </div>
            </div>
            <footer className='n-profile'>
                <div className="p-heading">
                <h4>Profile</h4>
                </div>
                <div className="p-image">
                    <img src="" alt="Profile" />
                </div>
            </footer>
        </nav>
        <Header/>
    </section>
  )
}

export default Navbar
