import React from 'react'
import { Link } from 'react-router-dom';
import './HomeHeader.css'

const HomeHeader = () => {

    const HomeNav = [
        { lable: 'Link 1', path: '/' },
        { lable: 'Link 2', path: '/' },
        { lable: 'Link 3', path: '/' },
        { lable: 'Link 4', path: '/' },
        { lable: 'Link 5', path: '/' },
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
                    <div className="hh-organization-btn">
                        <input type="button" value="Create Organization" id='btn-create-organization'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeHeader
