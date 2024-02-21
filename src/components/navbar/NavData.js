import {
  AssignmentInd,
  CorporateFare,
  Dashboard as DashboardIcon,
  DirectionsBus,
  FormatListBulleted,
  Hail,
  Map,
  Person,
  Route,
} from "@mui/icons-material";
import Dashboard from "../../pages/dashboard/Dashboard";
import Users from "../../pages/Users/Users";
import Vehicle from "../../pages/vehicle/Vehicle";
import Role from "../../pages/role/Role";
import Feature from "../../pages/feature/Feature";
import Routess from "../../pages/Routes/Routess";
import Stops from "../../pages/stops/Stops";
import Tracking from "../../pages/tracking/Tracking";
import Oraganization from "../../pages/organization/Oraganization";

export const navData = [
  { label: "Dashboard", key: "/", icon: <DashboardIcon /> , component : <Dashboard/>},
  { label: "User", key: "/user", icon: <Person /> , component : <Users/>},
  { label: "Vehicle", key: "/vehicle", icon: <DirectionsBus /> ,component : <Vehicle/>},
  { label: "Role", key: "/role", icon: <AssignmentInd /> ,component : <Role/>},
  { label: "Features", key: "/feature", icon: <FormatListBulleted /> , component : <Feature/>},
  { label: "Routes", key: "/route", icon: <Route /> ,component : <Routess/>},
  { label: "Stops", key: "/stops", icon: <Hail /> ,component : <Stops/>},
  { label: "Tracking", key: "/tracking", icon: <Map /> ,component : <Tracking/>},
  { label: "Organization", key: "/organization", icon: <CorporateFare /> ,component : <Oraganization/>},
];
