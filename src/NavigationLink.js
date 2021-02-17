import { Link } from "react-router-dom";
import React from "react";
import "./Navbar.css";

const NavigationLink = ({ icon, pathname, loading, name }) => {
  return (
    <span className="hi" to={pathname} onClick={loading}>
      {icon}
      <div>{name}</div>
    </span>
  );
};

export default NavigationLink;
