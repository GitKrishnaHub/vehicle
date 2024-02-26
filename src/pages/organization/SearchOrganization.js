import CircleIcon from "@mui/icons-material/Circle";
import { InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import "./Organization.css";

const SearchOrganization = () => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const filteredOrgData = orgData.filter(
    (row) =>
      row.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.contact.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="o-searchbar">
      <TextField
        id="search-organization"
        label="Search Organization"
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <CircleIcon />
            </InputAdornment>
          ),
        }}
        onChange={handleSearchChange}
        value={searchQuery}
      />
    </div>
  );
};

export default SearchOrganization;
