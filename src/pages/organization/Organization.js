import React, { useEffect, useState } from "react";
import SearchOrganization from "./SearchOrganization";
import OrganizationTable from "./OrganizationTable";
import { Button, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import "./Organization.css";
import Divider from "@mui/material/Divider";

const Organization = () => {
  const [orgData, setOrgData] = useState([]);

  const fetchDataFromApi = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/api/organization/"
      );
      setOrgData(data?.organizations);
    } catch (err) {
      console.log(err);
      return err;
    }
  };
  useEffect(() => {
    fetchDataFromApi();
  }, []);

  console.log(orgData);

  return (
    <div style={{ background: "#D9D9D9" , height:"100%"}}>
      <Paper style={{margin:"20px", height:"100%"}}>
        <OrgHeader orgData={orgData} />
        <Divider />
        <SearchOrganization orgData={orgData} />
        <OrganizationTable orgData={orgData} />
      </Paper>
    </div>
  );
};

const OrgHeader = ({ orgData }) => {
  return (
    <div className="org-header">
      <div>
        <div>
          <span className="org-label">Organizations </span>
          <span className="org-count">
            {orgData.length}{" "}
            {orgData.length > 1 ? "Organizations" : "Organization"}
          </span>
        </div>
        <div className="org-para">
          Keep track of All Organizations in One Place.
        </div>
      </div>
      <Button variant="contained" className="add-org-btn">
        <AddIcon /> Add New Organization
      </Button>
    </div>
  );
};

export default Organization;
