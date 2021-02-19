import React from "react";
import "./ProjectsPage.css";
const technologies = [
  "I love coding in react",
  "I love coding in react2",
  "I love coding in react3",
  "I love coding in react4",
  "I love coding in react5",
  "I love coding in react6",
];
const technologies2 = [
  "classes + hooks1",
  "classes + hooks2",
  "classes + hooks3",
  "classes + hooks4",
  "classes + hooks5",
  "classes + hooks6",
];

const hey = technologies.map((tech, i) => (
  <li>
    <p class="technology-description">
      {tech}
      <br />
      {technologies2[i]}
    </p>
    <div className="line-technology" />
  </li>
));
const ProjectsPage = () => {
  return (
    <div className="projectspage">
      <h1 className="projectspage__header">Technologies</h1>
      <ul className="projectspage__technologies-wrapper">{hey}</ul>
    </div>
  );
};

export default ProjectsPage;
