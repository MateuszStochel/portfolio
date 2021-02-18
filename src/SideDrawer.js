import React from "react";
import { useHistory } from "react-router";
import CloseIcon from "@material-ui/icons/Close";
import "./SideDrawer.css";

const SideDrawer = ({ show, onShow, ...props }) => {
  const history = useHistory();

  const changeUrl = (url) => {
    history.push(url);
    onShow(!show);
  };
  return (
    <nav {...props}>
      <div className="sidedrawer__toggle">
        <CloseIcon onClick={() => onShow(!show)} />
      </div>
      <ul className="sidedrawer__links__wrapper">
        <li onClick={() => changeUrl("about")}>About</li>
        <li onClick={() => changeUrl("about")}>About</li>
        <li onClick={() => changeUrl("about")}>About</li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
