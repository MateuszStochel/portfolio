import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import "./NavigationLink.css";

const NavigationLink = ({ icon, pathname, loading, name }) => {
  return (
    <span className="navigationlink" to={pathname} onClick={loading}>
      {icon}
      <p>{name}</p>
    </span>
  );
};

export default NavigationLink;
