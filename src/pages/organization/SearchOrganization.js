import CircleIcon from "@mui/icons-material/Circle";
import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import "./Organization.css";

const SearchOrganization = () => {
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
      />
    </div>
  );
};

export default SearchOrganization;
