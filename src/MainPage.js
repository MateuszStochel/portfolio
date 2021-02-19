import React from "react";

import MainPageSVG from "./MainPageSVG";
import InnerContainer from "./wrapper/InnerContainer";

import "./MainPage.css";

const MainPage = () => {
  const spanTexts = [
    "<html>",
    "</head>",
    "<title>Hello World!</title>",
    "</head>",
    "</html>",
  ];

  return (
    <div className="mainpage">
      <InnerContainer>
        <MainPageSVG />
        <div className="mainpage__text-wrapper">
          {spanTexts.map((text, i) => (
            <p
              className={`mainpage__text-animation mainpage__text-animation--${i}`}
              key={i}
            >
              {text}
            </p>
          ))}
        </div>
      </InnerContainer>
    </div>
  );
};

export default MainPage;
