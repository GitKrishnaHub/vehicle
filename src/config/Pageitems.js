import React, { useEffect, useState } from 'react'
import './Pagestyle.css'
import { Add, Search } from '@mui/icons-material'

import { Box, Button, InputLabel, MenuItem, FormControl, Select, InputAdornment, TextField } from "@mui/material";



export const SearchData = ({setSearchTerm,searchTerm, passingData,setData}) => {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
 
  const handleSearch =  () => {
    try{
      setData(searchTerm);
    }catch{
      setError('Not Found');
    }
  };
  
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };


  return (
    
      <div className="searchbar">
        <TextField
          id="search"
          label="Search User"
          variant="outlined"
          value={searchTerm}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" onClick  ={handleSearch} >
                <Search    style={{cursor:'pointer'}} />
              </InputAdornment>
            ),
          }}
        />
        {error && <div>{error}</div>}
      </div>
  )
}

export const FilterData = ({ passingData, filterData, setFilters }) => {
  const itemsFilter = passingData?.map((org) => org?.roles?.name);
  const handleFilter = (event) => {
    let clonedFilters = { ...filterData };
    clonedFilters.roles = event.target.value;
    setFilters(clonedFilters);
  };

  return (
    <Box id='filter-box'>
      <FormControl fullWidth  id="dropdown">
        <InputLabel id="org-name-dropdown">Role</InputLabel>
        <Select
          labelId="user-name-dropdown"
          id="user-dropdown"
          value={filterData?.roles}
          label="roles"
          onChange={handleFilter}
        >
          <MenuItem value={''}>All</MenuItem>
          {
            itemsFilter?.map((items, index) =>
            (
              <MenuItem key={index} value={items}>{items}</MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </Box>
  )
}

export const AddComponent = (props) => {
  return (
    <Button  variant="contained" id="add-btn" onClick={props.onclick}><Add />{props.name}</Button>
  )
}

