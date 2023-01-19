import React from "react";
import Logo from "./Logo";

const Header = ({ darkMode, setDarkMode, setContent }) => {
  return (
    <div className="flex flex-col gap-10">
      <Logo darkMode={darkMode} setDarkMode={setDarkMode} setContent={setContent} />
    </div>
  );
};

export default Header;
