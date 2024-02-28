
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Vehicle from '../pages/vehicle/Vehicle'
import Oraganization from '../pages/organization/Organization'
import Users from '../pages/Users/Users'
import Role from '../pages/role/Role'
import Feature from '../pages/feature/Feature'
import Routess from '../pages/Routes/Routess'
import Stops from '../pages/stops/Stops'
import Tracking from '../pages/tracking/Tracking'
import Overview from '../pages/dashboard/dashboarddata/Overview'
import AddUser from '../pages/Users/adduser/AddUser'
const Content = () => {
 return(
   <Routes>
    <Route index path='/Overview/' element={<Overview/>}/>
    <Route path='/Users' element={<Users/>}/>
    <Route path='/Vehicle' element={<Vehicle/>}/>
    <Route path='/Role' element={<Role/>}/>
    <Route path='/Feature' element={<Feature/>}/>
    <Route path='/Route' element={<Routess/>} />
    <Route path='/Stops' element={<Stops/>}/>
    <Route path='/Tracking' element={<Tracking/>}/>
    <Route path='/Organization' element={<Oraganization/>}/>
    <Route path='/AddUser' element={<AddUser/>}/>
  </Routes>
        
 )
}

export default Content;
