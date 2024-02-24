import React, { useEffect, useState } from 'react'
import { Add } from '@mui/icons-material'
import { FilterComponent, SearchComponent } from '../../config/Pageitems';
import './User.css'
import Cookies from 'universal-cookie';
import FetchApiData from '../../api/FetchApiData';
import axios from 'axios'

const Users = () => {
  const [user,setUser]=useState()

  useEffect(() =>{

    const fetchDataFromApi = async () => {
      try {
        const cookies = new Cookies();
        const token = cookies.get('token');
        const response = await axios.get('http://localhost:3000/api/user', {
          withCredentials: true, // Include cookies in the request
        });
    
        if (response.status === 200) {
          const data = response.data;
          // Assuming setOrgState is a state setter function
          setUser(data);
        } else {
          console.error('Failed to fetch data:', response.statusText);
        }
      } catch (err) {
        console.error('Error during fetch:', err);
      }
    };
    fetchDataFromApi();
  },[]);

console.log(user)
  return (
    <section className='user'>
      <div className="user-container">
        <div className="user-heading">
          <div className="user-title">
            <h1>Users <span>{200} User</span></h1>
            <p>Keep track of All Users in One Place</p>
          </div>
          <div className="Add">
            <button type='button'><Add />Add New User</button>
          </div>
        </div>
        <div className="user-searchfilter">
          <SearchComponent />
          <FilterComponent />
        </div>
        <div className="Table">
          <table>
               <thead>
                <tr>
                  <td>krishna</td>
                </tr>
               </thead>
              <tbody>
                <tr>
                  <td>dasads</td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Users
