import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div
      style={{
        borderBottom: "3px solid maroon",
        paddingBottom: "10px",
        marginBottom: "12px",
        letterSpacing: "5px",
        fontSize: "1.5em"
      }}
    >
      <NavLink style={{ marginRight: "10px" }} to="/">
        Home
      </NavLink>
      <NavLink style={{ marginRight: "10px" }} to="/movies">
        Movies
      </NavLink>
    </div>
  );
}

export default NavBar;
