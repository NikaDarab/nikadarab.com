import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Logo = ({ setDarkMode, setContent }) => (
  <div className="not-fancy-font flex flex-col ml-5 mt-8 max-w-700 max-h-800 !overflow-hidden">
    <div className="flex items-center">
      <Link
        to="/"
        onClick={() =>
          setContent(
            <div className="flex flex-col not-fancy-font  responsive-text w-full">
              <h5 className="text-hot-pink mb-5">HOME</h5>
              <div className="line-1">Hi, I'm Nika!</div>
              <div className="line-2">
                a software engineer and an artist based in Dallas.
              </div>
              <div className="line-3">
                let's create, collaborate, and connect!
              </div>
            </div>
          )
        }
      >
        <div className="text-40 font-light tracking-12">NEEK</div>
      </Link>
      <div className="flex gap-5 right-5 fixed">
        <button
          onClick={() => setDarkMode(true)}
          className="border-none bg-transparent"
        >
          <FontAwesomeIcon icon={faMoon} className="text-x-large" />
        </button>
        <button
          onClick={() => setDarkMode(false)}
          className="border-none bg-transparent"
        >
          <FontAwesomeIcon icon={faSun} className="text-x-large" />
        </button>
      </div>
    </div>
    <Link
      to="/"
      onClick={() =>
        setContent(
          <div className="flex flex-col not-fancy-font  responsive-text w-full">
            <h5 className="text-hot-pink mb-5">HOME</h5>
            <div className="line-1">Hi, I'm Nika!</div>
            <div className="line-2">
              a software engineer and an artist based in Dallas.
            </div>
            <div className="line-3">
              let's create, collaborate, and connect!
            </div>
          </div>
        )
      }
    >
      <div className="flex gap-3">
        <div className=" h-2 w-115  mt-2" id="logo-bar" />
        <div className=" text-16">Software Engineer / Artist</div>
      </div>
    </Link>
  </div>
);

export default Logo;
