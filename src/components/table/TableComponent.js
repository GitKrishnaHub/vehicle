import React, { useEffect, useState } from 'react'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, InputLabel, FormControl, Select, InputAdornment, TextField, Paper, Table, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Menu, MenuItem, TableBody, TableCell, TableContainer, TableHead, TableRow, useTheme } from "@mui/material";
import Pagination from '../../components/pagination/Pagination';
import axios from 'axios';
import UseFetch from '../../hooks/UseFetch';

const TableComponent = ({ columns, passingData, itemsPerPages, setData }) => {

    //Style the table
    const theme = useTheme();
    const styles = {
        header: { backgroundColor: theme.palette.primary.main, color: "white" },
    };



    //Pagination Block
    const [currentPage, setCurrentPage] = useState(1);

    //Page Previous and Next 
    const startIndex = (currentPage - 1) * itemsPerPages;
    const endIndex = startIndex + itemsPerPages;
    const currentData = passingData?.slice(startIndex, endIndex);

    //To show the total Pages
    const totalCount = parseInt(passingData?.length);
    const totalPages = Math.ceil(totalCount / itemsPerPages);

    //handle pagination function
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    //Dialog box 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isResetPassword, setIsResetPassword] = useState(false);
   

    const open = Boolean(anchorEl);

    //Menu Fuctions
    const handleOpenMenu = (event, id) => {
        setAnchorEl(event.currentTarget);
        setSelectedUserId(id)
    };
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    //delete fuctions start
    const openDeleteModal = (action) => {
        if (action === "Delete") {
            setIsDeleteModalOpen(true);
        }
        handleCloseMenu();
    };

 
    const handleDeleteConfirm =async () => {
        const DeleteId=await axios.delete(`http://localhost:3000/api/user/${selectedUserId}`)
        const updatedData = passingData.filter((row) => row.id !== DeleteId);
        setData(updatedData);
        setSelectedUserId(null);
        setIsDeleteModalOpen(false)
    };
    
    const handleDeleteCancel = () => {
        setSelectedUserId(null);
        setIsDeleteModalOpen(false)
    };
 //delete fuctions end
  

    //reset password functions
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    
    const openChangePassword = (action) => {
        if (action === "password") {
            setIsResetPassword(true);
        }
        handleCloseMenu();
    };

    const handlePasswordCancel = () => {
        setSelectedUserId(null);
        setIsResetPassword(false)
    }



    const handlePasswordConfirm = async () => {
        if (newPassword !== confirmPassword) {
            setErrorMessage("Passwords don't match");
            return;
        }
        try {
            const response = await axios.post(`http://localhost:3000/api/user/password/${selectedUserId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ newPassword }),
                credentials: 'include',
            });
            console.log(response)
            if (response.ok) {
                setSuccessMessage('Password updated successfully');
                setErrorMessage('');
            } else {
                const errorData = await response;
                setSuccessMessage('');
                setErrorMessage(errorData.message || 'Failed to update password');
            }
        } catch (error) {
            console.error('Error updating password:', error);
            setSuccessMessage('');
            setErrorMessage('An unexpected error occurred');
        }
    };

    //Update functions
    const [isUpdateUser, setIsUpdateUser] = useState(false);
    const [editingId, setEditingId] = useState(null);
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const [editedUsername, setEditedUsername] = useState('');
  const [editedRole, setEditedRole] = useState('');

    const openUpdateUser = (action) => {
        if (action === "update") {
            setIsUpdateUser(true);
        }
        handleCloseMenu();
    };

    const handleUpdateCancel = () => {
        setSelectedUserId(null);
        setIsUpdateUser(false)
    }

    const handleEdit = (id, name, email,username,role) => {
        setEditingId(id);
        setEditedName(name);
        setEditedEmail(email);
        setEditedUsername(username);
        setEditedRole(role);
        handleCloseMenu();
      };

      const handleSave = () => {
        const updatedData = passingData.map(item => {
          if (item.id === selectedUserId) {
            return { ...item, name: editedName, email: editedEmail, userName: editedUsername, rolesName: editedRole};
          }
          return item;
        });
        setData(updatedData);
        setEditingId(null);
      };

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {columns?.map((column, index) => (
                                <TableCell align="center" style={styles.header} key={index}>
                                    {column}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentData?.map((row, index) => (
                            <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                             {editingId === row.id ? (<input type='text' value={editedName} onChange={(e)=>setEditedName(e.target.value)}/>) : <TableCell align="center">{row.name}</TableCell> }  
                             {editingId === row.id ? (<input type='text' value={editedEmail} onChange={(e)=>setEditedEmail(e.target.value)}/>) :  <TableCell align="center">{row.email}</TableCell> }  
                             {editingId === row.id ? (<input type='text' value={editedUsername} onChange={(e)=>setEditedUsername(e.target.value)}/>) :<TableCell align="center">{row.userName}</TableCell> }  
                             {editingId === row.id ? (<input type='text' value={editedRole} onChange={(e)=>setEditedRole(e.target.value)}/>) :  <TableCell align="center">{row.roles?.name}</TableCell> }  
                             {editingId === row.id ? (<input type='button' value={'Save'}  onClick={()=>handleSave(row.id)}/>) :     
                                
                                <TableCell align="center">
                                    <IconButton
                                        aria-label="action-btn"
                                        id="action-btn"
                                        onClick={(event) => handleOpenMenu(event, row.id)}
                                    >
                                        <MoreHorizIcon />
                                    </IconButton>
                                    {anchorEl && (
                                        <Menu
                                            id="action-menu"
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleCloseMenu}
                                            MenuListProps={{
                                                "aria-labelledby": "action-btn",
                                            }}
                                        >
                                            <MenuItem
                                                // onClick={() => openUpdateUser("update", row.id,row.name,row.email,row.userName,row.roles?.name)}
                                                onClick={()=>handleEdit(row.id,row.name,row.email,row.userName,row.roles?.name)}
                                            >
                                                Update
                                            </MenuItem>
                                            <MenuItem
                                                onClick={() => openChangePassword("password", row.id)}
                                            >
                                                Change Password
                                            </MenuItem>
                                            <MenuItem
                                                onClick={() => openDeleteModal("Delete", row.id)}
                                            >
                                                Delete
                                            </MenuItem>
                                        </Menu>
                                    )}
                                </TableCell>
                        }
                             
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Pagination component start */}

            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />

            {/* Pagination component end */}

            <Dialog open={isDeleteModalOpen} onClose={handleDeleteCancel} id='reset-password' >
                <DialogTitle id='rp-title'>Delete User !</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Do you want to proceed?
                    </DialogContentText>
                </DialogContent>

                <DialogActions id='rp-btn'>
                    <Button onClick={handleDeleteCancel} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleDeleteConfirm}
                        color="primary"
                        autoFocus
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>


            <Dialog open={isResetPassword} onClose={handlePasswordCancel} id='reset-password'>
                <DialogTitle id='rp-title' >Reset Password !</DialogTitle>
                <DialogContent id='rp-content'>
                    <TextField id="password" label="Enter a New Password" variant="outlined" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    <TextField id="password" label="Confirm Your New Password" variant="outlined" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </DialogContent>
                {successMessage && <p>{successMessage}</p>}
                {errorMessage && <p>Error: {errorMessage}</p>}
                <DialogActions id='rp-btn' >
                    <Button onClick={handlePasswordCancel} color="primary">Cancel</Button>
                    <Button onClick={handlePasswordConfirm} color="primary" autoFocus>Confirm</Button>
                </DialogActions>
            </Dialog>



            <Dialog open={isUpdateUser} onClose={handleUpdateCancel} id='reset-password'>
                <DialogTitle id='rp-title' >Reset Password !</DialogTitle>
                <DialogContent id='rp-content'>
                    <TextField id="password" label="Enter a New Password" variant="outlined" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    <TextField id="password" label="Confirm Your New Password" variant="outlined" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </DialogContent>
                {successMessage && <p>{successMessage}</p>}
                {errorMessage && <p>Error: {errorMessage}</p>}
                <DialogActions id='rp-btn' >
                    <Button onClick={handleUpdateCancel} color="primary">Cancel</Button>
                    <Button onClick={handlePasswordConfirm} color="primary" autoFocus>Confirm</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default TableComponent
