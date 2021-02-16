import React from "react";

import NavigationLink from "./NavigationLink";

import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PersonIcon from "@material-ui/icons/Person";

import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links--wrapper">
        <NavigationLink icon={<VisibilityIcon />} />
        <NavigationLink icon={<PersonIcon />} />
        <NavigationLink icon={<PersonIcon />} />
        <NavigationLink icon={<PersonIcon />} />
        <div className="space" />
        <GitHubIcon />
      </div>
    </div>
  );
};

export default Navbar;
