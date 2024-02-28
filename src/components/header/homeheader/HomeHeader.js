import React from 'react'
import { Link } from 'react-router-dom';
import './HomeHeader.css'
import { AddComponent } from '../../../config/Pageitems';
import { Add } from '@mui/icons-material';

const HomeHeader = () => {

    const HomeNav = [
        { lable: 'Features', path: '/' },
        { lable: 'Pricing', path: '/' },
        { lable: 'Support', path: '/' },
        { lable: 'Resources', path: '/' },
        { lable: 'Contact Us', path: '/' },
    ]

    return (
        <section className='home-header'>
            <div className="hh-container">
                <div className="hh-navlink">
                <div className="hh-logo">
                <h1>LOGO</h1>
                </div>
                    <ul className="hh-navdata">
                        {
                            HomeNav?.map((item, index) => {
                                return (
                                    <li key={index}><Link to={item.path} className="hh-link">{item.lable}</Link></li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="hh-buttons">
                    <div className="hh-help-btn">
                        <p><Link to={''} className="hh-link">Help</Link></p>
                    </div>
                     <AddComponent name={'Create Organization'} icon={<Add/>} onclick={''}/>
                </div>
            </div>
        </section>
    )
}

export default HomeHeader
