import React, { useState } from "react";
import { Route, Switch } from "react-router";

import Loader from "../common/loader/Loader";

import Navbar from "../features/navigation/NavDesktop/Navbar";

import SideDrawer from "../features/navigation/NavMobile/SideDrawer";
import Backdrop from "../../Backdrop";
import ProjectsPage from "../features/skills/SkillsPage";
import AboutPage from "../features/projects/ProjectsPage";

import DrawerToggleButton from "../features/navigation/NavMobile/DrawerToggleButton";

import "./App.css";
import Contact from "../features/contact/Contact";
import MainPage from "../features/main/MainPage";
import NotFoundPage from "../features/NotFoundPage/NotFoundPage";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };
  let backdrop;
  if (sideDrawerOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  return (
    <>
      <DrawerToggleButton drawerClickHandler={drawerToggleClickHandler} />
      <Navbar />
      <SideDrawer
        show={sideDrawerOpen}
        onShow={setSideDrawerOpen}
        className={sideDrawerOpen ? "side__drawer open" : "side__drawer"}
      />
      <Loader />
      {backdrop}
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/skills" component={ProjectsPage} />
        <Route path="/projects" component={AboutPage} />
        <Route path="/contact" component={Contact} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </>
  );
}

export default App;
