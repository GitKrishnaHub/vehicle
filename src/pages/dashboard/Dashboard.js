import React from 'react'
import './Dashboard.css'
import { card } from './Carddata'

const Dashboard = () => {
  return (
    <section className='dashboard'>
    <div className="d-container">
       {
        card?.map((item,index)=>{
          return(
            <div key={index} className='d-card'>
            <h1>{item.title}</h1>
            <div className="d-carddata">
            <p>10000</p>
            {item.icon}
            </div>
            </div>
          )
        })
       }
       </div>
    </section>
  )
}

export default Dashboard
