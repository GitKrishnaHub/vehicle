import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { orgStatus } from "./utils";

export default function OrganizationFilter({ orgData, filters, setFilters }) {
  const orgNameOptions = Array.from(new Set(orgData.map((org) => org.name)));
  const orgCityOptions = Array.from(new Set(orgData.map((org) => org.city)));

  const handleFilterName = (event) => {
    let clonedFilters = { ...filters };
    clonedFilters.name = event.target.value;
    setFilters(clonedFilters);
  };
  const handleFilterCity = (event) => {
    setFilters({ ...filters, city: event.target.value });
  };
  const handleFilterStatus = (event) => {
    setFilters({ ...filters, status: event.target.value });
  };

  const filterData = orgData.filter((org) => {
    return (
      (filters.name === "" || org.name === filters.name) &&
      (filters.city === "" || org.city === filters.city) &&
      (filters.status === "" || org.organizationStatus === filters.status)
    );
  });



  return (
    <Box
      sx={{ minWidth: 500 }}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="org-name-dropdown">Organizations</InputLabel>
        <Select
          labelId="org-name-dropdown"
          id="org-name-dropdown"
          value={filters.name}
          label="Organizations"
          onChange={handleFilterName}
        >
          {orgNameOptions.map((orgName) => (
            <MenuItem key={orgName} value={orgName}>
              {orgName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="org-city-dropdown">City</InputLabel>
        <Select
          labelId="org-city-dropdown"
          id="org-city-dropdown"
          value={filters.city}
          label="City"
          onChange={handleFilterCity}
        >
          {orgCityOptions.map((orgCity) => (
            <MenuItem key={orgCity} value={orgCity}>
              {orgCity}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="org-status-dropdown">Status</InputLabel>
        <Select
          labelId="org-status-dropdown"
          id="org-status-dropdown"
          value={filters.status}
          label="Status"
          onChange={handleFilterStatus}
        >
          {Object.values(orgStatus).map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
