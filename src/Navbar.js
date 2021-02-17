import React from "react";

import NavigationLink from "./NavigationLink";

import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PersonIcon from "@material-ui/icons/Person";

import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncActionFinish,
  asyncActionStart,
} from "./store/action/asyncAction";
import { useHistory } from "react-router";

const Navbar = () => {
  const { loading } = useSelector((state) => state.async);
  const history = useHistory();
  const dispatch = useDispatch();
  console.log(loading);

  const setLoading = (e) => {
    e.preventDefault();

    const path = e.currentTarget.getAttribute("to");
    dispatch(asyncActionStart());
    setTimeout(() => {
      dispatch(asyncActionFinish());
      history.push(path);
    }, 1000);
  };

  return (
    <div className="navbar">
      <div className="navbar__links--wrapper">
        <NavigationLink
          loading={setLoading}
          icon={<VisibilityIcon />}
          pathname="/about"
        />
        <NavigationLink
          pathname="/projects"
          loading={setLoading}
          icon={<PersonIcon />}
        />
        <NavigationLink
          pathname="/contact"
          loading={setLoading}
          icon={<PersonIcon />}
        />
        <NavigationLink
          pathname="/about"
          loading={setLoading}
          icon={<PersonIcon />}
        />
        <div className="space" />
        <GitHubIcon />
      </div>
    </div>
  );
};

export default Navbar;
