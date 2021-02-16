import React, { useEffect, useRef } from "react";

import "./Loader.css";

const Loader = ({ loading }) => {
  const refWrapper = useRef(null);
  const refContent = useRef(null);

  useEffect(() => {
    const initial = refWrapper.current.classList.value.includes(
      "loader__wrapper--initial"
    );
    if (initial) {
      setTimeout(() => {
        refWrapper.current.classList.remove("loader__wrapper--initial");
        refContent.current.classList.remove("loader__content--initial");
      }, 2000);
    }
    if (loading) {
      refWrapper.current.classList.add("loader__wrapper--animate");
      refContent.current.classList.add("loader__content--animate");

      refWrapper.current.classList.remove("loader__wrapper--animateOut");
      refContent.current.classList.remove("loader__content--animateOut");
    }
    if (!initial && !loading) {
      refWrapper.current.classList.add("loader__wrapper--animateOut");
      refContent.current.classList.add("loader__content--animateOut");

      refWrapper.current.classList.remove("loader__wrapper--animate");
      refContent.current.classList.remove("loader__content--animate");
    }
  }, [loading]);

  return (
    <div ref={refWrapper} className="loader__wrapper loader__wrapper--initial">
      <div
        ref={refContent}
        className="loader__content loader__content--initial"
      >
        <div className="loader"></div>
        <div className="loader__infoContainer">
          <h1 className="loader__text">Working on it</h1>
          <div className="loader__dotContainer">
            <div className="loader__dot loader__dot--1"></div>
            <div className="loader__dot loader__dot--2"></div>
            <div className="loader__dot loader__dot--3"></div>
          </div>
        </div>
        <img className="loader__logo" src={Image} alt="logo" />
      </div>
    </div>
  );
};

export default Loader;
