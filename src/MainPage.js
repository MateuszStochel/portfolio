import React from "react";

import MainPageSVG from "./MainPageSVG";

import "./MainPage.css";
import InnerContainer from "./wrapper/InnerContainer";

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
      <InnerContainer>
        <MainPageSVG />
        <div className="mainpage__error-types">
          <p>400 Bad Request</p>
          <p>401 Unauthorized</p>
          <p>403 Forbidden</p>
          <p>404 Not Found</p>
          <p>
            Error dasda aadsas adsasdasd asdasdas dasdasd asdasdas dsadasdas
            dsadasdas .Error dasda aadsas adsasdasd asdasdas dasdasd asdasdas
            dsadasdas dsadasdas Error dasda aadsas adsasdasd asdasdas dasdasd
            asdasdas dsadasdas dsadasdas Error dasda aadsas adsasdasd asdasdas
            dasdasd asdasdas dsadasdas dsadasdas
          </p>
          <p>
            Error dasda aadsas adsasdasd asdasdas dasdasd asdasdas dsadasdas
            dsadasdas .Error dasda aadsas adsasdasd asdasdas dasdasd asdasdas
            dsadasdas dsadasdas Error dasda aadsas adsasdasd asdasdas dasdasd
            asdasdas dsadasdas dsadasdas Error dasda aadsas adsasdasd asdasdas
            dasdasd asdasdas dsadasdas dsadasdas
          </p>
        </div>

        <div className="loaderss" />
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
      </InnerContainer>
    </div>
  );
};

export default MainPage;
