import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimneyWindow,
  faAddressCard,
  faRectangleList,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { tabControl } from "../helper";

const MobileNavBar = ({ setIsHome, setIsAbout, setIsProjects, setContent }) => {
  return (
    <nav className="mobile-nav not-fancy-font">
      <Link to="/about">
        <button
          className="bloc-icon flex flex-col border-none bg-transparent mt-2"
          onClick={() =>
            tabControl(
              "about",
              setIsHome,
              setIsAbout,
              setIsProjects,
              setContent
            )
          }
        >
          <FontAwesomeIcon icon={faAddressCard} className="text-30 " />
          <div> About</div>
        </button>
      </Link>
      <Link to="/home">
        <button
          className="bloc-icon flex flex-col border-none bg-transparent mt-2"
          onClick={() =>
            tabControl("home", setIsHome, setIsAbout, setIsProjects, setContent)
          }
        >
          <FontAwesomeIcon icon={faHouseChimneyWindow} className="text-30 " />
          <div>Home</div>
        </button>
      </Link>
      <button
        className="bloc-icon flex flex-col border-none bg-transparent mt-2"
        onClick={() =>
          tabControl(
            "projects",
            setIsHome,
            setIsAbout,
            setIsProjects,
            setContent,
            [0, 1, 2],
            true
          )
        }
      >
        <FontAwesomeIcon icon={faRectangleList} className="text-30 " />
        <div>Projects</div>
      </button>
    </nav>
  );
};

export default MobileNavBar;
