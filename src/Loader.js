import React from "react";
import { useSelector } from "react-redux";

import "./Loader.css";

const Loader = () => {
  const { loading } = useSelector((state) => state.async);

  const classesLoader = loading
    ? ["loader loader__animation"]
    : ["loader loader__animationOff"];

  const classesContent = loading
    ? ["loader__content loader__content--animation"]
    : ["loader__content loader__content--animationOff"];

  return (
    <div className={classesLoader}>
      <div className={classesContent}>
        <div className="loader__spinner" />
        <h1 className="loader__title">Loading</h1>
      </div>
    </div>
  );
};

export default Loader;
