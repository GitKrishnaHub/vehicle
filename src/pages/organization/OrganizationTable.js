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
import { IconButton, Menu, MenuItem, Switch } from "@mui/material";

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

const OrganizationTable = ({ orgData }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    header: { backgroundColor: theme.palette.primary.main, color: "white" },
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell align="center" style={styles.header} key={column}>
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
              <TableCell align="center">
                <Switch
                  checked={row.organizationStatus}
                  //onChange={handleChange}
                  //inputProps={{ "aria-label": "controlled" }}
                />
              </TableCell>
              <TableCell align="center">
                <IconButton
                  aria-label="action-btn"
                  id="action-btn"
                  onClick={handleClick}
                >
                  <MoreHorizIcon />
                </IconButton>

                <Menu
                  id="action-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "action-btn",
                  }}
                >
                  <MenuItem onClick={handleClose}>Update</MenuItem>
                  <MenuItem onClick={handleClose}>Delete</MenuItem>
                </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrganizationTable;
