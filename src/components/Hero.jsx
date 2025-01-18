import React from "react";

import { pfp } from "../assets";
import { styles } from "../styles";

const Hero = () => {
  return (
    <div className="relative w-full h-screen mx-auto">
      Hero
      <div className="flex flex-row mt-5">
        <div className="my-20 ml-20 w-full max-w-xs 2xl:max-w-md">
          <img
            src={pfp}
            alt="professional photo"
            className="w-full h-auto transform transition-transform hover:scale-125"
          />
        </div>
        <div className="my-20 ml-20 w-2/3">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#9467f6]">Derrick</span>
          </h1>
          <p className={`${styles.heroSubText} mr-2`}>
            Hi, it's good to meet you! My name is Derrick and I am a senior student studying CS at UCR. Currently I am on the software development team for ACM Ignite and ACM Forge. I am looking for internships in software engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
