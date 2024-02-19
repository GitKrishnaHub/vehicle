import React, { useEffect, useState } from 'react';
import './Organization.css'
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios'

const Oraganization = () => {
const [OrgState,setOrgState]= useState([]);

const fetchDataFromApi = async () => {
  try {
      const {data} = await axios.get('http://localhost:3000/api/organization/')
      setOrgState(data?.organizations)
  } catch (err) {
      console.log(err);
      return err;
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
 