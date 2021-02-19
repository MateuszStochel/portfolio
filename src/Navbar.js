import React from "react";

import NavigationLink from "./NavigationLink";

import GitHubIcon from "@material-ui/icons/GitHub";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PersonIcon from "@material-ui/icons/Person";
import SyncAltIcon from "@material-ui/icons/SyncAlt";
import AirplayIcon from "@material-ui/icons/Airplay";
import ContactMailIcon from "@material-ui/icons/ContactMail";

import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncActionFinish,
  asyncActionStart,
} from "./store/action/asyncAction";
import { useHistory, useLocation } from "react-router";

const Navbar = () => {
  let location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();

  const setLoading = (e) => {
    console.log(location.pathname);
    const path = e.currentTarget.getAttribute("to");
    if (location.pathname === path) return;
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
          name="Main"
          loading={setLoading}
          icon={<VisibilityIcon />}
          icon2={<SyncAltIcon />}
          pathname="/"
        />
        <NavigationLink
          name="about"
          pathname="/about"
          loading={setLoading}
          icon={<PersonIcon />}
        />
        <NavigationLink
          name="projects"
          pathname="/projects"
          loading={setLoading}
          icon={<AirplayIcon />}
        />
        <NavigationLink
          name="contact"
          pathname="/contact"
          loading={setLoading}
          icon={<ContactMailIcon />}
        />
        <div className="space" />
        <div className="navbar-contact">
          <p>Check me</p>
          <GitHubIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
