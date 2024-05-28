import React from "react";

import { styles } from "../styles";

const About = () => {
  return (
    <div className="ml-20 mb-20">
      <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
      <p className={`${styles.sectionSubText}`}>
        I'm a software developer with experience in C++ and HTML/CSS/JavaScript.
        <br />
        I'm a hands-on learner that has collaborated within a team to create
        projects.
        <br />
        I'm looking for intern roles in software engineering area.
      </p>
    </div>
  );
};

export default About;
