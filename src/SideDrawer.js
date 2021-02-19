import React from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router";
import CloseIcon from "@material-ui/icons/Close";
import "./SideDrawer.css";
import { useDispatch } from "react-redux";
import {
  asyncActionFinish,
  asyncActionStart,
} from "./store/action/asyncAction";

const SideDrawer = ({ show, onShow, ...props }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  let location = useLocation();

  const changeUrl = (url) => {
    const pathName = location.pathname.slice(1);
    onShow(!show);
    if (pathName === url) return;
    dispatch(asyncActionStart());
    setTimeout(() => {
      dispatch(asyncActionFinish());
      history.push(url);
    }, 1000);
  };
  return (
    <nav {...props}>
      <div className="sidedrawer__toggle">
        <CloseIcon onClick={() => onShow(!show)} />
      </div>
      <ul className="sidedrawer__links__wrapper">
        <li onClick={() => changeUrl("about")}>Main</li>
        <li onClick={() => changeUrl("about")}>About</li>
        <li onClick={() => changeUrl("contact")}>Projects</li>
        <li onClick={() => changeUrl("contact")}>Skills</li>
        <li onClick={() => changeUrl("contact")}>Contact</li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
