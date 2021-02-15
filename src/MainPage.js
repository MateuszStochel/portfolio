import React from "react";
import "./MainPage.css";

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
      <div className="title2">
        <h2>I am Mateusz Stochel</h2>
        <h1>Creative Designer</h1>
        <button>click</button>
      </div>
      <div className="title">
        <p>400 Bad Request</p>
        <p>401 Unauthorized</p>
        <p>403 Forbidden</p>
        <p>404 Not Found</p>
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
