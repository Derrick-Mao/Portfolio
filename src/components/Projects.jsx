import React from "react";

import ProjectCard from "./cards/ProjectCard";
import { projects } from "../constants";
import { styles } from "../styles";

const Projects = () => {
  return (
    <div className="ml-20 mb-20 mr-10">
      <h2 className={`${styles.sectionHeadText}`}>Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mx-auto">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
