import React from 'react'
import './AddUser.css'
import { AddComponent } from '../../../config/Pageitems'
import { Cancel, Save } from '@mui/icons-material'
import { Box, Button, InputLabel, MenuItem, FormControl, Select, InputAdornment, TextField } from "@mui/material";


const AddUser = ({filterData}) => {
  return (
    <section className='Adduser'>
      <div className="au-container">
        <form action="post" className='au-form'>
            <div className="au-heading">
                <h1>User Details</h1>
            </div>
            <div className="au-inputfield">
            <TextField label={'First Name'} id='firstname' />
            <TextField label={'Last Name'} id='firstname' />
             
                {/* <input type="text" name="firstname" id="firstname" placeholder='First Name'  required/>
                <input type="text" name="lastname" id="lastname" placeholder='Last Name'  required/> */}
            </div>
            <div className="au-inputfield">
            <TextField label={'User Name'} id='username' />
            <Box id='filter-box'>
      <FormControl fullWidth  id="dropdown">
        <InputLabel id="org-name-dropdown">Role</InputLabel>
        <Select
          labelId="user-name-dropdown"
          id="user-dropdown"
          value={''}
          label="roles"
          onChange={''}
        >
          <MenuItem value={''}>All</MenuItem>
          {/* {
            itemsFilter?.map((items, index) =>
            (
              <MenuItem key={index} value={items}>{items}</MenuItem>
            ))
          } */}
        </Select>
      </FormControl>
    </Box>
                {/* <input type="text" name="username" id="username" placeholder='User Name'  required/> */}
                {/* <select name="" id="">
                    <option value="">Role</option>
                    <option value="">asdasd</option>
                </select> */}
            </div>
            <div className="au-emailpass">
            <TextField label={'Email Address'} id='email' />
            <TextField label={'Password'} id='password' />
            </div>
            <div className="au-btns">
            <Button id="cancel-btn">Cancel</Button>
            <Button  variant="contained" id="save-btn">Save</Button>
                  
            </div>
        </form>
      </div>
    </section>
  )
}

export default AddUser
