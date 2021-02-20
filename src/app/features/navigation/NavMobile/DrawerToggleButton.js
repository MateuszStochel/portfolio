import React from "react";

import "./DrawerToggleButton.css";

const DrawerToggleButton = ({ drawerClickHandler }) => {
  return (
    <button className="drawerToggleButton" onClick={drawerClickHandler}>
      <div className="drawerToggleButton__line" />
      <div className="drawerToggleButton__line" />
      <div className="drawerToggleButton__line" />
    </button>
  );
};

export default DrawerToggleButton;
