import React from "react";

import { courses, languages, fwAndLib, technologies } from "../constants";
import { styles } from "../styles";

const Education = () => {
  return (
    <div className="ml-20 mb-20 mr-20">
      <h2 className={`${styles.sectionHeadText}`}>Education</h2>
      <h4 className="text-white text-[24px] font-bold">Major</h4>
      <p className={`${styles.sectionSubText} mt-3`}>
        Bachelor of Science in Computer Science | Expected Graduation, Dec 2025
      </p>
      <br />
      <div className="flex flex-row items-start justify-between">
        <div>
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
          <h4 className="text-white text-[24px] font-bold">Languages</h4>
          <ul
            className={`${styles.sectionSubText} mt-3 ml-5 space-y-1 list-disc`}
          >
            {languages.map((language, index) => (
              <li key={index}>{language.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white text-[24px] font-bold">Frameworks/Libraries</h4>
          <ul
            className={`${styles.sectionSubText} mt-3 ml-5 space-y-1 list-disc`}
          >
            {fwAndLib.map((point, index) => (
              <li key={index}>{point.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white text-[24px] font-bold">Technologies</h4>
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
