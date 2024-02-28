import React, { useEffect, useState } from 'react'
 import { AddComponent, FilterComponent, SearchComponent } from '../../config/Pageitems';
import './User.css'
import useFetch from '../../hooks/useFetch';
 import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from 'react-router-dom';
import { Add } from '@mui/icons-material';
import Pagination from '../../components/pagination/Pagination';
 



const Users = () => {

  const navigate=useNavigate();
  
  //Table Block
  const theme = useTheme();
  const styles = {
    header: { backgroundColor: theme.palette.primary.main, color: "white" },
  };
  const columns = [
    "Name",
    "Email Address",
    "User Name",
    "Role",
    "Actions",
  ];


//Api Fetching Block
  const [user, setUser] = useState();
  const { data } = useFetch('http://localhost:3000/api/user');

  useEffect(() => {
    setUser(data?.users)
    setitemPerPage(10)
  },[data])

  
  //Pagination Block
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setitemPerPage] = useState();
 
  //Page Previous and Next 
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = user?.slice(startIndex, endIndex);
  
  //To show the total Pages
  const totalCount = parseInt(data?.users.length);
  const totalPages=Math.ceil(totalCount / itemsPerPage);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className='user'>
      <div className="user-container">
        <div className="user-heading">
          <div className="user-title">
            <p>Keep track of All Users in One Place</p>
             <span>{user?.length || 0 } Users</span>
          </div>
           <AddComponent name={'Add New User'} onclick={()=>navigate('/AddUser')} icon={<Add/>}/>
        </div>
        <div className="user-searchfilter">
          <SearchComponent />
          <div className="filterdata">
          <select name="" id="" >
            <option value="">Role</option>
            <option value="">asdasd</option>
          </select>
          <FilterComponent />
          </div>
        </div>
        <div className="TableFormat">
       
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns?.map((column,index) => (
              <TableCell align="center" style={styles.header} key={index}>
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>

          {currentData?.map((row,index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.userName}</TableCell>
              <TableCell align="center">{row.roles?.name}</TableCell>
               
              <TableCell align="center">
                <MoreHorizIcon />
                 
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pagination  currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}/>
    </TableContainer>
        </div>
      </div>
    </section>
  )
}

export default Users
