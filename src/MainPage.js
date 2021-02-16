import React from "react";

import MainPageSVG from "./MainPageSVG";

import react from "./img/iconfinder_React.js_logo_1174949.png";

import js from "./img/iconfinder_nodejs-512_339733.png";
import "./MainPage.css";

const MainPage = () => {
  const spanTexts = [
    { text: "<html>" },
    { text: "</head>" },
    { text: "<title>Hello World!</title>" },
    { text: "</head>" },
    { text: "</html>" },
  ];

  return (
    <div className="mainpage">
      <MainPageSVG />
      <div className="mainpage__error-types">
        <p>400 Bad Request</p>
        <p>401 Unauthorized</p>
        <p>403 Forbidden</p>
        <p>404 Not Found</p>
      </div>
      <div className="main-page__image-wrapper">
        <img className="main-page__image-js" src={js} alt="js" />
        <img className="main-page__image-react" src={react} alt="react" />
      </div>
      <div className="mainpage__text-wrapper">
        {spanTexts.map((text, i) => (
          <p
            className={`mainpage__text-animation mainpage__text-animation--${i}`}
            key={i}
          >
            {text.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
