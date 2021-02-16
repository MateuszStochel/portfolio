import React from "react";
import "./Navbar.css";
import PersonIcon from "@material-ui/icons/Person";
import VisibilityIcon from "@material-ui/icons/Visibility";
import NavigationLink from "./NavigationLink";
import GitHubIcon from "@material-ui/icons/GitHub";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__links--wrapper">
        <NavigationLink icon={<VisibilityIcon />} />
        <NavigationLink icon={<PersonIcon />} />
        <NavigationLink icon={<PersonIcon />} />
        <NavigationLink icon={<PersonIcon />} />
        <GitHubIcon />
      </div>
    </div>
  );
};

export default Navbar;
