import React from "react";
import { useHistory } from "react-router";

import "./NotFoundPage.css";

const NotFoundPage = () => {
  const history = useHistory();
  const changeUrl = () => {
    history.push("/");
  };
  return (
    <div className="notfoundpage">
      <h1>Page not found</h1>
      <button onClick={changeUrl}>Back to main</button>
    </div>
  );
};

export default NotFoundPage;
