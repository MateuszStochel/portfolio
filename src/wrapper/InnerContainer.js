import React from "react";

import { useSelector } from "react-redux";

import "./InnerContainer.css";

const InnerContainer = ({ children }) => {
  const { loading } = useSelector((state) => state.async);
  const innerContainerClassName = [loading && "innerContainer--loading"];

  return <div className={innerContainerClassName}>{children}</div>;
};

export default InnerContainer;
