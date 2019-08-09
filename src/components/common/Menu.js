import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  const activeLink = { color: "#A9A9A9" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeLink} exact>
        Main Menu
      </NavLink>
      {" | "}
      <NavLink>Save Game</NavLink>
      {" | "}
      <NavLink>Load Game</NavLink>
    </nav>
  );
};

export default Menu;
