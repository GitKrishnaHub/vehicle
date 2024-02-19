import React from 'react'
import './Home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Content from '../../content/Content'
 
const Home = () => {
  return (
    <section className='home'>
    <header className='ho-header'>
      <Header/>
    </header>
    <nav className='ho-nav'>
      <Navbar/>
       <div className='ho-navpage'>
          <Content/>
       </div>
    </nav>
    </section>
  )
}

export default Home
