import React from "react";

import ExperienceCard from "./cards/ExperienceCard";
import { experiences } from "../constants";
import { styles } from "../styles";

const Experience = () => {
  return (
    <div className="ml-20 mb-20">
      <h2 className={`${styles.sectionHeadText}`}>Experience</h2>
      <div>
        {experiences.map((experience, index) => (
          <ExperienceCard experience={experience} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
