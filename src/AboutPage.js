import React from "react";
import "./AboutPage.css";
import "./MainPageSVG";
import img from "./img/samuel-girven-VJ2s0c20qCo-unsplash.jpg";
import img2 from "./img/alessandro-sacchi-NUFnfYd09iI-unsplash.jpg";
import img3 from "./img/oskar-yildiz-cOkpTiJMGzA-unsplash.jpg";
import AboutPageSvg from "./AboutPageSvg";

const AboutPage = () => {
  return (
    <div className="aboutpage">
      <div className="aboutpage__divider"></div>

      <div className="lorem">
        <div className="border aboutpage__border-first" />
        <div className="border aboutpage__border-second" />
        <p className="span">Programming</p> consectetur adipisicing elit.
        Deserunt, sit. Harum natus placeat nam sit. Odio nesciunt ipsum
        nostrumnam sit. Odio nesciunt ipsum nostrum nam sit. Odio nesciunt ipsum
        nostrum nam sit. Odio nesciunt ipsum nostrum
        <div className="border aboutpage__border-third" />
      </div>
      <div className="lorem2">
        consectetur adipisicing elit. Deserunt, sit. Harum natus placeat nam
        sit. Odio nesciunt ipsum nostrum voluptates magni cumque iste. Possimus
        magni, architecto quisquam porro maxime libero.
        <p className="span">Programming</p>
        <div className="border aboutpage__border-second" />
        <div className="border aboutpage__border-third" />
      </div>
    </div>
  );
};

export default AboutPage;
