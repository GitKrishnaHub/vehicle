import React from 'react'
import './Dashboard.css'
import Navbar from '../../components/navbar/Navbar'
import Content from '../../content/Content'
import DashboardHeader from '../../components/header/dashboardheader/DashboardHeader'

const Dashboard = () => {
  return (
    <section className='dashboard-page'>
    <header className='dashboard-page-nav'>
    <Navbar/>
    <nav className='dashboard-page-header'>
      <DashboardHeader/>
       <div className='dashboard-page-navpage' >
          <Content/>
       </div>
    </nav>
    </header>
    </section>
  )
}

export default Dashboard
