 
import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import { navData, setting } from './NavData';

const Navbar = () => {
    return (
        <section className='navbar'>
            <nav className="n-container">
            <header className="n-logo">
                    <h1>LOGO</h1>
                </header>
                <div className="n-data">
                    <div className="n-home">
                        
                        {
                            navData?.map((item, index) => {
                                return (
                                    <NavLink to={item.path} key={index} className="sub-data">
                                        {item.icon}
                                        <p>{item.lable}</p>
                                    </NavLink>

                                )
                            })
                        }

                    </div>
                        <div className="n-setting">
                            {
                                setting?.map((item, index) =>{
                                    return (
                                        <NavLink to={item.path} key={index} className='sub-data'>
                                            {item.icon}
                                            {item.lable}
                                        </NavLink>
                                    )
                                })
                            }
                        </div>
                </div>
            </nav>
        </section>
    )
}

export default Navbar
 
