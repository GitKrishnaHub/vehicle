import React from 'react'
import Dashboard from '../pages/dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Vehicle from '../pages/vehicle/Vehicle'
import Oraganization from '../pages/organization/Oraganization'
import Users from '../pages/Users/Users'
import Role from '../pages/role/Role'
import Feature from '../pages/feature/Feature'
import Routess from '../pages/Routes/Routess'
import Stops from '../pages/stops/Stops'
import Tracking from '../pages/tracking/Tracking'
const Content = () => {
 return(
  <Routes>
    <Route path='/' index element={<Dashboard/>}/>
    <Route path='/user' element={<Users/>}/>
    <Route path='/vehicle' element={<Vehicle/>}/>
    <Route path='/role' element={<Role/>}/>
    <Route path='/feature' element={<Feature/>}/>
    <Route path='/route' element={<Routess/>} />
    <Route path='/stops' element={<Stops/>}/>
    <Route path='/tracking' element={<Tracking/>}/>
    <Route path='/organization' element={<Oraganization/>}/>
  </Routes>
        
 )
}
 

export default Content
