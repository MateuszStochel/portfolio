import React from "react";
import { Route, Switch } from "react-router";

import Loader from "./Loader";
import MainPage from "./MainPage";
import Navbar from "./Navbar";

import "./App.css";
import AboutPage from "./AboutPage";

function App() {
  return (
    <>
      <Navbar />
      <Loader />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </>
  );
}

export default App;
