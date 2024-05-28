import React from "react";

import { courses, technologies } from "../constants";
import { styles } from "../styles";

const Education = () => {
  return (
    <div className="ml-20 mb-20">
      <h2 className={`${styles.sectionHeadText}`}>Education</h2>
      <h4 className="text-white text-[24px] font-bold">Major</h4>
      <p className={`${styles.sectionSubText} mt-3`}>
        Bachelor of Science in Computer Science | October 2023 - present
      </p>
      <br />
      <div className="flex flex-row">
        <div className="mr-40">
          <h4 className="text-white text-[24px] font-bold">
            Relevant Courseworks
          </h4>
          <ul
            className={`${styles.sectionSubText} mt-3 ml-5 space-y-1 list-disc`}
          >
            {courses.map((course, index) => (
              <li key={index}>{course.class}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white text-[24px] font-bold">Skills</h4>
          <ul
            className={`${styles.sectionSubText} mt-3 ml-5 space-y-1 list-disc`}
          >
            {technologies.map((technology, index) => (
              <li key={index}>{technology.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Education;
