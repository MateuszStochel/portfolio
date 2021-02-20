import React from "react";
import { useHistory, useLocation } from "react-router";
import CloseIcon from "@material-ui/icons/Close";
import clsx from "clsx";
import "./SideDrawer.css";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";
import {
  asyncActionFinish,
  asyncActionStart,
} from "../../../store/action/asyncAction";

const SideDrawer = ({ show, onShow, ...props }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  let location = useLocation();

  const changeUrl = (url) => {
    const pathName = location.pathname;
    onShow(!show);
    if (pathName === url) return;
    dispatch(asyncActionStart());
    setTimeout(() => {
      dispatch(asyncActionFinish());
      history.push(url);
    }, 1000);
  };
  const navigation = [
    { title: "main", path: "/" },
    { title: "skills", path: "/skills" },
    { title: "projects", path: "/projects" },
    { title: "contact", path: "/contact" },
  ];

  const link = navigation.map((nav, i) => (
    <li
      key={uniqid()}
      className={clsx({ active: location.pathname === nav.path })}
      onClick={() => changeUrl(nav.path)}
    >
      {nav.title}
    </li>
  ));
  return (
    <nav {...props}>
      <div className="sidedrawer__toggle">
        <CloseIcon onClick={() => onShow(!show)} />
      </div>
      <ul className="sidedrawer__links__wrapper ">{link}</ul>
    </nav>
  );
};

export default SideDrawer;
