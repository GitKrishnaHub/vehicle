import React from 'react'
import { Add } from '@mui/icons-material'
import { FilterComponent, SearchComponent } from '../../config/Pageitems';
import './User.css'
const Users = () => {
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
