import React, { useEffect, useState } from "react";
import SearchOrganization from "./SearchOrganization";
import OrganizationTable from "./OrganizationTable";
import { Button, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import "./Organization.css";
import Divider from "@mui/material/Divider";
import Cookies from "universal-cookie";
import OrganizationFilter from "./OrganizationFilter";

const Organization = () => {
  const [orgData, setOrgData] = useState([]);
  const [filters, setFilters] = React.useState({
    name: "",
    city: "",
    status: "",
  });

  const fetchDataFromApi = async () => {
    try {
      const cookies = new Cookies();
      const token = cookies.get("token");
      const response = await axios.get(
        "http://localhost:3000/api/organization/",
        {
          // Include cookies in the request
          // withCredentials: true,
          headers: {
            // Optionally, you can add other headers if needed
            // 'Authorization': `Bearer ${accessToken}`
          },
        }
      );

      if (response.status === 200) {
        const data = response.data;
        // Assuming setOrgState is a state setter function
        setOrgData(data?.organizations);
      } else {
        console.error("Failed to fetch data:", response.statusText);
      }
    } catch (err) {
      console.error("Error during fetch:", err);
    }
  };

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  console.log(orgData);

  const filteredData = orgData.filter((org) => {
    return (
      (filters.name === "" || org.name === filters.name) &&
      (filters.city === "" || org.city === filters.city) &&
      (filters.status === "" || org.organizationStatus === filters.status)
    );
  });

  return (
    <div style={{ background: "#D9D9D9", height: "100%" }}>
      <Paper style={{ margin: "20px", height: "100%" }}>
        <OrgHeader orgData={orgData} />
        <Divider />
        <div className="search-filter-wrapper">
          <SearchOrganization orgData={orgData} />
          <OrganizationFilter
            orgData={orgData}
            filters={filters}
            setFilters={setFilters}
          />
        </div>
        <OrganizationTable orgData={orgData} setOrgData={setOrgData} filteredData={filteredData}/>
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
