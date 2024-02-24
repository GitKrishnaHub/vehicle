import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useTheme } from "@mui/material/styles";
import React from "react";
import "./Organization.css";

function createData(id, name, domain, city, contact, organizationStatus) {
  return { id, name, domain, city, contact, organizationStatus };
}

const columns = [
  "Organization Name",
  "Domain",
  "City",
  "Contact",
  "Status",
  "Actions",
];

const getRows = (rows) =>
  rows.map((item, index) =>
    createData(
      item.id,
      item.name,
      item.domain,
      item.city,
      item.contactName,
      item.organizationStatus
    )
  );

const OrganizationTable = ({orgData}) => {
  
  const theme = useTheme();

  const styles = {
    header: { backgroundColor: theme.palette.primary.main, color: "white" },
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell align="center" style={styles.header}>
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {getRows(orgData).map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.domain}</TableCell>
              <TableCell align="center">{row.city}</TableCell>
              <TableCell align="center">{row.contact}</TableCell>
              <TableCell align="center">{row.organizationStatus}</TableCell>
              <TableCell align="center">
                <MoreHorizIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrganizationTable;
