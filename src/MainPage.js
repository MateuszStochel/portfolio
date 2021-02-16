import React from "react";
import "./MainPage.css";
import MainPageSVG from "./MainPageSVG";
import Lonnn from "./img/iconfinder_React.js_logo_1174949.png";
import js from "./img/iconfinder_nodejs-512_339733.png";

const MainPage = () => {
  const spanText = [
    { text: "<html>" },
    { text: "</head>" },
    { text: "<title>Hello World!</title>" },
    { text: "</head>" },
    { text: "</html>" },
  ];
  return (
    <div className="mainpage">
      <MainPageSVG />

      <div className="title">
        <p>400 Bad Request</p>
        <p>401 Unauthorized</p>
        <p>403 Forbidden</p>
        <p>404 Not Found</p>
      </div>
      <div className="image-wrapper">
        <img className="Image2" src={js} alt="dsad" />
        <img className="Image" src={Lonnn} alt="dsad" />
      </div>
      <div className="frontPage__textContainer">
        {spanText.map((el, i) => (
          <p
            className={`frontPage__writingText frontPage__writingText--${i}`}
            key={i}
          >
            {el.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
