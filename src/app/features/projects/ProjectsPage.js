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
  <div className="aboutpage__content">
    <h2>{project.title}</h2>
    <img src={project.img} alt={project.title} />
    <div className="aboutpage__text-wrapper">
      <h3>{project.title}</h3>
      <p>{project.content}</p>
      <button>Github</button>
      <button>Live</button>
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
