import React from "react";

import { styles } from "../styles";

const Contact = () => {
  return (
    <div className="max-w-72 ml-20 pb-10">
      <h2 className={`${styles.sectionHeadText}`}>Contact</h2>
      <div className="flex flex-row items-start justify-between">
        <a
          href="https://www.linkedin.com/in/derrick-mao/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn1.iconfinder.com/data/icons/logotypes/32/circle-linkedin-512.png"
            alt="linkedin icon"
            className="w-20"
          />
        </a>
        <a
          href="https://github.com/derrick-mao"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgCL6squJi5XJkuVhF1NesTXiHbGHGdZP_bh4Ob94K-w&s"
            alt="github icon"
            className="w-20"
          />
        </a>
        <a href="mailto:derrickmao03@gmail.com">
          <img
            src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
            alt="github icon"
            className="w-20"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
