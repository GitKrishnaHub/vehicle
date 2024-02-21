import React from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NotificationsNone } from "@mui/icons-material";

const Header = () => {
  return (
    <section className="header ">
      <header className="h-container">
        <div
          className="h-menu"
          onClick={() => {
            const nav_header = document.querySelector(".navbar");
            const toggleMobile = () => {
              nav_header.classList.toggle("active");
            };
            toggleMobile();
          }}
        >
          <MenuIcon className="mobile-icon" name="menu" />
          <CloseIcon className="mobile-icon" name="close" />
          <header className="h-logo">
            <h1>VTS</h1>
          </header>
        </div>
        <div className="h-profile">
          <div className="h-bell">
            <NotificationsNone style={{ fontSize: "30px" }} />
          </div>
          <div className="h-data">
            <h4>Hey' Admin</h4>
          </div>
          <div className="h-image">
            <img src="" alt="Profile" />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
