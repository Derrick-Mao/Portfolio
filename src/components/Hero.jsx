import React from "react";

import { pfp } from "../assets";
import { styles } from "../styles";

const Hero = () => {
  return (
    <div className="relative w-full h-screen mx-auto">
      Hero
      <div className="flex flex-row mt-5">
        <div className="my-20 ml-20 w-1/3">
          <img
            src={pfp}
            alt="professional photo"
            className="w-80 h-80 transform transition-transform hover:scale-125"
          />
        </div>
        <div className="my-20 ml-20 w-2/3">
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#9467f6]">Derrick</span>
          </h1>
          <p className={`${styles.heroSubText}`}>
            A 3rd year student at UCR majoring in CS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
