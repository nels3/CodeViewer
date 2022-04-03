import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

import "../../static/navbar.css";

const Navbar = () => {
  return (
    <>
      <Nav className="navbar">
        <NavMenu>
          <NavLink to="/competition">Competition</NavLink>
          <NavLink to="/series">Series</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
