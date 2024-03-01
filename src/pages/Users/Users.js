import React, { useEffect, useState } from 'react'
 import { AddComponent, FilterData, SearchData } from '../../config/Pageitems';
import './User.css'
import UseFetch from '../../hooks/UseFetch';
import { useNavigate } from 'react-router-dom';
import { Add } from '@mui/icons-material';
import TableComponent from '../../components/table/TableComponent';
  
const Users = () => {

  const navigate=useNavigate();

  const columns = [
    "Name",
    "Email Address",
    "User Name",
    "Role",
    "Actions",
  ];


//Api Fetching Block
  const [user, setUser] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [itemsPerPage, setitemPerPage] = useState(undefined);
  
  const { data } = UseFetch('http://localhost:3000/api/user');

  useEffect(() => {
    setUser(data?.users)
    setitemPerPage(10)
  },[data])

  //Filter & search users by their Roles & user Name
  const [filters, setFilters] = React.useState({roles:""});
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = user?.filter((items) => {
    return (
      (filters.roles === "" || items.roles?.name === filters.roles) &&
      (items.userName.toLowerCase().includes(searchTerm.toLowerCase()) || items.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      items.email.toLowerCase().includes(searchTerm.toLowerCase())) 
      );
    });
 
   
     
  return (
    <section className='user'>
      <div className="user-container">
        <div className="user-heading">
          <div className="user-title">
            <h1>Keep track of All Users in One Place</h1>
             <span>{user?.length || 0 } Users</span>
          </div>
           <AddComponent name={'Add New User'} onclick={()=>navigate('/AddUser')} icon={<Add/>}/>
        </div>
        <div className="search-filter">

          <SearchData  searchTerm={searchTerm} setSearchTerm={setSearchTerm} passingData={user} setData={setUser} />

          <div className="filterdata">
          <FilterData passingData={user} filterData={filters} setFilters={setFilters} />
          </div>
        </div>
        <div className="TableFormat">
        <TableComponent columns={columns} passingData={filteredData} itemsPerPages={itemsPerPage} setData={setUser} />
         </div>
      </div>
    </section>
  )
}

export default Users
