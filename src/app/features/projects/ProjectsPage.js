import React from "react";

import img0 from "../../../img/shop.png";

import "./ProjectsPage.css";

const projectsContent = [
  {
    title: "shop",
    content: `Search about upcoming artist's events and concerts in towns. You
must be logged in to use all features available in projects. The
project was created with React(hooks), Typescript, NodeJS,
Sequelize, Ant Design`,
    img: img0,
  },
  {
    title: "shop",
    content: `Search about upcoming artist's events and concerts in towns. You
must be logged in to use all features available in projects. The
project was created with React(hooks), Typescript, NodeJS,
Sequelize, Ant Design`,
    img: img0,
  },
];

const projects = projectsContent.map((project, i) => (
  <div className={`aboutpage__content aboutpage__content__animation-${i}`}>
    <h2 className={`aboutpage__content__title-${i}`}>{project.title}</h2>
    <img
      className={`aboutpage__content__image-${i}`}
      src={project.img}
      alt={project.title}
    />
    <div className="aboutpage__text-wrapper">
      <h3>{project.title}</h3>
      <p>{project.content}</p>
      <button className={`aboutpage__content-button${i} button`}>Github</button>
      <button className={`aboutpage__content-button${i} button`}>Live</button>
    </div>
  </div>
));

const AboutPage = () => {
  return (
    <div className="aboutpage">
      <h1 className="aboutpage__header">Projects</h1>
      {projects}
    </div>
  );
};

export default AboutPage;
