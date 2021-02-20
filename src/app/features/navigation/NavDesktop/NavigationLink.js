import { useLocation } from "react-router-dom";
import React from "react";
import "./Navbar.css";
import "./NavigationLink.css";

const NavigationLink = ({ icon, pathname, loading, name }) => {
  let location = useLocation();

  return (
    <span
      className={
        location.pathname === pathname
          ? "navigationlink active"
          : "navigationlink"
      }
      to={pathname}
      onClick={loading}
    >
      {icon}
      <p>{name}</p>
    </span>
  );
};

export default NavigationLink;
