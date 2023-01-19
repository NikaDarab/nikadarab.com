import React, { useState } from "react";
import LandingPage from "../../LandingPage";
import { Link } from "react-router-dom";
import { tabControl } from "../helper";
import { PROJECTS } from "../../Project/projects";

const NavBar = ({
  setIsHome,
  setIsAbout,
  setIsProjects,
  setContent,
  content,
  expandProjects,
  setExpandProjects,
}) => {
  return (
    <div className="flex not-fancy-font navbar_fullsize text-25 mt-10 mb-8">
      <div className="flex flex-col ml-8 gap-5 w-1/5">
        <Link to="/home">
          <button
            className="border-none bg-transparent"
            onClick={() =>
              tabControl(
                "home",
                setIsHome,
                setIsAbout,
                setIsProjects,
                setContent
              )
            }
          >
            Home
          </button>
        </Link>
        <Link to="/about">
          <button
            className="border-none bg-transparent"
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
            About
          </button>
        </Link>
        <Link to="/projects">
          <button
            className="border-none bg-transparent"
            onClick={() => setExpandProjects(!expandProjects)}
          >
            Projects
          </button>
          <div className="flex flex-col gap-3 mt-3">
            {expandProjects &&
              PROJECTS.map((project, index) => (
                <div
                  className={`text-s line-${index}`}
                  key={index}
                  onClick={() =>
                    tabControl(
                      "projects",
                      setIsHome,
                      setIsAbout,
                      setIsProjects,
                      setContent,
                      index
                    )
                  }
                >
                  {project.name}
                </div>
              ))}
          </div>
        </Link>
      </div>
      <div className="ml-8 mt-10 mb-20" style={{ maxWidth: "700px" }}>
        <LandingPage content={content} />
      </div>
    </div>
  );
};

export default NavBar;
