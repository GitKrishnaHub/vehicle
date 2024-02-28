import React from 'react'
import './Overview.css'
import {card} from './Carddata'
import Map from '../../../components/map/Map'
const Overview = () => {
  return (
    <section className='overview'>
    <div className="o-container">
       {
        card?.map((item,index)=>{
          return(
            <div key={index} className='o-card'>
            <h1>{item.title}</h1>
            <div className="o-carddata">
            <p>10000</p>
            {item.icon}
            </div>
            </div>
          )
        })
       }
       </div>
       <div className="o-map">
        <Map/>
       </div>
    </section>
  )
}

export default Overview
