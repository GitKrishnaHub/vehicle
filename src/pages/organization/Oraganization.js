import React, { useEffect, useState } from "react";
import "./Organization.css";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

function createData(
  id,
  name,
  domain,
  address,
  city,
  state,
  country,
  pincode,
  contact
) {
  return { id, name, domain, address, city, state, country, pincode, contact };
}

const columns = [
  "Name",
  "Domain",
  "Address",
  "City",
  "State",
  "Country",
  "Pincode",
  "Contact",
  "Actions",
];

const getRows = (rows) =>
  rows.map((item, index) =>
    createData(
      item.id,
      item.name,
      item.domain,
      item.address,
      item.city,
      item.state,
      item.country,
      item.pincode,
      item.contact
    )
  );

const Oraganization = () => {
  const [orgState, setOrgState] = useState([]);

  const theme = useTheme();

  const styles = {
    header: { backgroundColor: theme.palette.primary.main, color: "white" },
  };

  const fetchDataFromApi = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/organization/"
      );
      setOrgState(data?.organizations);
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  useEffect(() => {
    fetchDataFromApi();
  }, []);

  console.log(orgState);

  return (
    <section className="Organization">
      <OrgHeader />
      <div className="o-container">
        <div className="o-inputdata">
          <div className="o-searchbar">
            <input type="text" name="search" id="search" placeholder="Search" />
            <SearchIcon />
          </div>
          <Button variant="contained">Add Organization</Button>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell align="right" style={styles.header}>
                    {column}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {getRows(orgState).map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="right">{row.name}</TableCell>
                  <TableCell align="right">{row.domain}</TableCell>
                  <TableCell align="right">{row.address}</TableCell>
                  <TableCell align="right">{row.city}</TableCell>
                  <TableCell align="right">{row.state}</TableCell>
                  <TableCell align="right">{row.country}</TableCell>
                  <TableCell align="right">{row.pincode}</TableCell>
                  <TableCell align="right">{row.contact}</TableCell>
                  <TableCell align="right">
                    <button>Update</button>
                  </TableCell>
                  <TableCell align="right">
                    <button>Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </section>
  );
};

const OrgHeader = () => {
  return <div>Organization</div>;
};

export default Oraganization;
