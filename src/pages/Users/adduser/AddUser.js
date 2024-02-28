import React from 'react'
import './AddUser.css'
import { AddComponent } from '../../../config/Pageitems'
import { Cancel, Save } from '@mui/icons-material'

const AddUser = () => {
  return (
    <section className='Adduser'>
      <div className="au-container">
        <form action="post" className='au-form'>
            <div className="au-heading">
                <h1>Add User</h1>
            </div>
            <div className="au-inputfield">
                <input type="text" name="firstname" id="firstname" placeholder='First Name'  required/>
                <input type="text" name="lastname" id="lastname" placeholder='Last Name'  required/>
            </div>
            <div className="au-inputfield">
                <input type="text" name="username" id="username" placeholder='User Name'  required/>
                <select name="" id="">
                    <option value="">Role</option>
                    <option value="">asdasd</option>
                </select>
            </div>
            <div className="au-emailpass">
                <input type="text" name="email" id="email" placeholder='Email Address' required/>
                <input type="text" name="password" id="password" placeholder='Password' required/>
            </div>
            <div className="au-btns">
                <button type="cancel"><Cancel/>Cancel</button>
                 <AddComponent name={'Save'} icon={<Save/>} onclick={''}/>
            </div>
        </form>
      </div>
    </section>
  )
}

export default AddUser
