import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { navData } from "./NavData";

const Navbar = () => {
  return (
    <section className="navbar">
      <nav className="n-container">
        <div className="n-data">
          <div className="n-home">
            {navData?.map((item, index) => {
              return (
                <NavLink to={item.key} key={index} className="sub-data">
                  {item.icon}
                  <p>{item.label}</p>
                </NavLink>
              );
            })}
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
