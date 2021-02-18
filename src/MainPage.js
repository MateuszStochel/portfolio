import React from "react";

import MainPageSVG from "./MainPageSVG";

import "./MainPage.css";
import InnerContainer from "./wrapper/InnerContainer";

const MainPage = () => {
  const spanTexts = [
    "<html>",
    "</head>",
    "<title>Hello World!</title>",
    "</head>",
    "</html>",
  ];
  const errorsType = [
    "400 Bad Request",
    "401 Unauthorized",
    "403 Forbidden",
    "404 Not Found",
  ];

  return (
    <div className="mainpage">
      <InnerContainer>
        <MainPageSVG />
        <div className="mainpage__error-types">
          {errorsType.map((error, i) => (
            <p key={i}>{error}</p>
          ))}
        </div>
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
