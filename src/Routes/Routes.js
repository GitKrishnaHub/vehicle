import React from 'react'
import {Routes as RouterRoutes,Route,Navigate} from 'react-router'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import Dashboard from '../pages/dashboard/Dashboard'
const Routes = () => {
  return (
    <RouterRoutes>
        <Route path='/'  element={<Login/>} />
        <Route path='*' element={<Home/>}>
        </Route>
    </RouterRoutes>
  )
}

export default Routes
