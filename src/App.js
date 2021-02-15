import React from "react";
import "./App.css";
import { Route, Switch } from "react-router";
import MainPage from "./MainPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={MainPage} />
      </Switch>
    </>
  );
}

export default App;
