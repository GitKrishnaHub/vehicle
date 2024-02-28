import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useTheme } from "@mui/material/styles";
import React, { useState } from "react";
import "./Organization.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Menu,
  MenuItem,
  Switch,
} from "@mui/material";

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

const OrganizationTable = ({ orgData, setOrgData, filteredData }) => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedOrgId, setSelectedOrgId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(null);

  const open = Boolean(anchorEl);
  const handleOpenMenu = (event, id) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrgId(id)
  };
  const openDeleteModal = (action) => {
    if (action === "Delete") {
      setIsDeleteModalOpen(true);
    }
    handleCloseMenu();
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleDeleteConfirm = () => {
    const updatedData = orgData.filter((row) => row.id !== selectedOrgId);
    setOrgData(updatedData);
    setSelectedOrgId(null);
    setIsDeleteModalOpen(false)
  };

  const handleDeleteCancel = () => {
    setSelectedOrgId(null);
    setIsDeleteModalOpen(false)
  };

  const handleStatusUpdate = () => {};
  const handleUpdateOrg = () => {};

  const styles = {
    header: { backgroundColor: theme.palette.primary.main, color: "white" },
  };

  return (
    <>
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
            {getRows(filteredData).map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.domain}</TableCell>
                <TableCell align="center">{row.city}</TableCell>
                <TableCell align="center">{row.contact}</TableCell>
                <TableCell align="center">
                  <Switch
                    checked={row.organizationStatus === "ACTIVE" ? true : false}
                    onChange={handleStatusUpdate}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </TableCell>
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
                        onClick={() => handleUpdateOrg("Update", row.id)}
                      >
                        Update
                      </MenuItem>
                      <MenuItem
                        onClick={() => openDeleteModal("Delete", row.id)}
                      >
                        Delete
                      </MenuItem>
                    </Menu>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={isDeleteModalOpen} onClose={handleDeleteCancel}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this row?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
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
    </>
  );
};

export default OrganizationTable;
