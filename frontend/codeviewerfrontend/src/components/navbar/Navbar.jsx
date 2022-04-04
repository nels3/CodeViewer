import React from "react";
import { NavLink } from "react-router-dom";

import "../../static/navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div>
          <NavLink to="/competition">Competition</NavLink>
          <NavLink to="/series">Series</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
          <NavLink to="/solutions">Solutions</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
