import React from "react";

import "./SkillsPage.css";

const technologies = [
  { title: "I love coding in react", subtitle: "classes + hooks1" },
  { title: "I love coding in react", subtitle: "classes + hooks1" },
  { title: "I love coding in react", subtitle: "classes + hooks1" },
  { title: "I love coding in react", subtitle: "classes + hooks1" },
  { title: "I love coding in react", subtitle: "classes + hooks1" },
  { title: "I love coding in react", subtitle: "classes + hooks1" },
];

const hey = technologies.map((tech, i) => (
  <li>
    <p class="technology-description">
      {tech.title}
      <br />
      {tech.subtitle}
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
