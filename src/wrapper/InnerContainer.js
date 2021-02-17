import React from "react";
import { useSelector } from "react-redux";
import "../MainPage.css";

const InnerContainer = ({ children }) => {
  const { loading } = useSelector((state) => state.async);
  console.log(loading, "inner");
  const innerContainerClassName = [loading && "innerContainer--loading"];

  return <div className={innerContainerClassName}>{children}</div>;
};

export default InnerContainer;
