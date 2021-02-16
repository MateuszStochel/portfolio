import React from "react";
import { Route, Switch } from "react-router";

import Loader from "./Loader";
import MainPage from "./MainPage";
import Navbar from "./Navbar";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Loader />
      <Switch>
        <Route path="/" exact component={MainPage} />
      </Switch>
    </>
  );
}

export default App;
