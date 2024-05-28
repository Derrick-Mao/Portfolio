import React from "react";

import ProjectCard from "./cards/ProjectCard";
import { projects } from "../constants";
import { styles } from "../styles";

const Activity = () => {
  return (
    <div className="ml-20 mb-20">
      <h2 className={`${styles.sectionHeadText}`}>Activity</h2>
      <div className="flex flex-row items-start">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Activity;
