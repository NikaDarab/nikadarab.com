import React from "react";
import MobileNavBar from "../Header/MobileNavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { tabControl } from "../Header/helper";

const Footer = ({
  setIsHome,
  setIsAbout,
  setIsProjects,
  setContent,
  content,
  isContact,
  setContact,
}) => (
  <div className="bottom-0">
    <MobileNavBar
      setIsHome={setIsHome}
      setIsAbout={setIsAbout}
      setIsProjects={setIsProjects}
      content={content}
      setContent={setContent}
    />
    <div className="flex justify-center mr-5">
      <div className="font-bolder fixed  not-fancy-font items-center flex justify-center bottom-adjuster">
        <a
          href="https://zenhabits.net/uncopyright/"
          target="_"
          className=" rounded-full p-1 opacity-70"
        >
          <div className="flex gap-2">
            🤘🏼<div className="mx-1">uncopyright</div>🤘🏼
          </div>
        </a>
      </div>

      <div className="flex flex-col gap-5 fixed right-5 bottom-20 mb-5">
        <a
          href="https://github.com/NikaDarab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="text-3xl" />
        </a>

        <a
          href="https://www.linkedin.com/in/nikadarab/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
        </a>
        <button
          onClick={() =>
            tabControl(
              "contact",
              setIsHome,
              setIsAbout,
              setIsProjects,
              setContent,
              0
            )
          }
        >
          <FontAwesomeIcon icon={faEnvelope} className=" text-3xl" />
        </button>
        <a
          href="https://calendly.com/nikadarab"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faCalendarDays} className=" text-3xl" />
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
