import React, { useState } from "react";
import { Route, Router, Switch } from "react-router";

import Loader from "./Loader";
import MainPage from "./MainPage";
import Navbar from "./Navbar";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";
import ProjectsPage from "./ProjectsPage";

import "./App.css";
import AboutPage from "./AboutPage";
import DrawerToggleButton from "./DrawerToggleButton";

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

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

      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </>
  );
}

export default App;
