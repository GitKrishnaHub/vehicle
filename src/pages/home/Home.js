import React from 'react'
import './Home.css'
import Login from '../login/Login' 
import HomeHeader from '../../components/header/homeheader/HomeHeader'
 const Home = () => {
  return (
    <section className='home'>
    <HomeHeader/>
     <Login/>
    </section>
  )
}

export default Home
