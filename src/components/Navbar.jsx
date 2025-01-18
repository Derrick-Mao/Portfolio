import React from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { dmlogo } from "../assets";

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full flex justify-between items-center fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={dmlogo} alt="logo" className="w-9 h-9 mb-2" />
          <p className="text-white text-[18px] font-medium">Derrick Mao</p>
        </Link>
        <ul className="list-none flex flex-row gap-10">
          {/* <li>
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                window.scrollTo(0, 520);
              }}
            >
              <p className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
                About
              </p>
            </Link>
          </li> */}
          {/* <li>
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                window.scrollTo(0, 1280);
              }}
            >
              <p className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
                Work
              </p>
            </Link>
          </li> */}
          <li>
            <Link
              to="/"
              className="flex items-center gap-2"
              onClick={() => {
                window.scrollTo(0, 10000);
              }}
            >
              <p className="text-secondary hover:text-white text-[18px] font-medium cursor-pointer">
                Contact
              </p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
