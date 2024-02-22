import React, { useEffect, useState } from 'react';
import './Organization.css'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios'
import Cookies from 'universal-cookie';

const Oraganization = () => {
const [OrgState,setOrgState]= useState([]);

const fetchDataFromApi = async () => {
  try {
    const cookies = new Cookies();
    const token = cookies.get('token');
    const response = await axios.get('http://localhost:3000/api/organization/', {
      withCredentials: true, // Include cookies in the request
      headers: {
        // Optionally, you can add other headers if needed
        // 'Authorization': `Bearer ${accessToken}`
      }
    });

    if (response.status === 200) {
      const data = response.data;
      // Assuming setOrgState is a state setter function
      setOrgState(data?.organizations);
    } else {
      console.error('Failed to fetch data:', response.statusText);
    }
  } catch (err) {
    console.error('Error during fetch:', err);
  }
};

useEffect(()=>{
  fetchDataFromApi();
},[]);
 
 console.log(OrgState)
return (
    <section className='Organization'>
    <header>
      <h1>Organization</h1>
    </header>
    <div className="o-container">
      <div className="o-inputdata">
        <div className="o-searchbar">
          <input type="text" name="search" id="search" placeholder='Search'/>
           <SearchIcon/>
        </div>
        <div className="o-addbtn">
          <input type="button" value="Add Organixation" />
        </div>
      </div>
      <div className="o-tabledata">
        <table>
        <thead>
     
           
            {
              OrgState?.map((items,index)=>{
                return(
                  <tr key={index}>
                    <th key={index}>
                      {Object.keys(items)}
                    </th>
                  </tr>
                )
              })
            }
           
        
        </thead>
          <tbody>
            <tr>
              <td>krishna</td>
              <td>krishnasdas</td>
              <td>krishnasdaasdsadsas</td>
              <td>krishnasdasadfsfss</td>
              <td>krishnasdasadfsfsasdasds</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </section>
  )
}

export default Oraganization
 