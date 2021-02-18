import React from "react";
import "./AboutPage.css";
import "./MainPageSVG";
import img from "./img/samuel-girven-VJ2s0c20qCo-unsplash.jpg";
import img2 from "./img/victor-freitas-Yuv-iwByVRQ-unsplash.jpg";
import AboutPageSvg from "./AboutPageSvg";

const AboutPage = () => {
  return (
    <div className="aboutpage">
      <AboutPageSvg />
      <div className="wrapper">
        <h1>My Passion</h1>
        <p>Programming</p>
        <p>Programming</p>
        <p>Programming</p>
      </div>
      <div className="aboutpage__images--wrapper">
        <div class="front">
          <img src={img2} alt="gym" />
        </div>
        <div class="back">
          <div class="back-content middle">
            <h2>DarkCode</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              voluptate aut doloribus molestias ratione temporibus officia
              distinctio excepturi animi dolores non reprehenderit illum
              officiis impedit, id nihil, odit, aperiam assumenda?
            </span>
          </div>
        </div>
      </div>
      <div className="aboutpage__images--wrapper">
        <div className="background" />
        <div class="front">
          <img src={img} alt="gym" />
        </div>
        <div class="back">
          <div class="back-content middle">
            <h2>DarkCode</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              voluptate aut doloribus molestias ratione temporibus officia
              distinctio excepturi animi dolores non reprehenderit illum
              officiis impedit, id nihil, odit, aperiam assumenda?
            </span>
          </div>
        </div>
      </div>
      <div className="aboutpage__images--wrapper">
        <div className="background" />
        <div class="front">
          <img src={img} alt="gym" />
        </div>
        <div class="back">
          <div class="back-content middle">
            <h2>DarkCode</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              voluptate aut doloribus molestias ratione temporibus officia
              distinctio excepturi animi dolores non reprehenderit illum
              officiis impedit, id nihil, odit, aperiam assumenda?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
