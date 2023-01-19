import React, { useState, useEffect } from 'react';
import LandingPage from './LandingPage';
import Footer from './Footer';
import Header from './Header';
import NavBar from './Header/NavBar';

function App() {
  const [isHome, setIsHome] = useState(true);
  const [isAbout, setIsAbout] = useState(false);
  const [isProjects, setIsProjects] = useState(false);
  const [isContact, setContact] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [expandProjects, setExpandProjects] = useState(false);

  const [content, setContent] = useState(
    <div className="flex flex-col not-fancy-font responsive-text w-full capitalize">
      <h5 className="text-hot-pink mb-5">HOME</h5>
      <div className="line-1">Hi, I'm Nika!</div>
      <div className="line-2">
        a software engineer and an artist based in Dallas.
      </div>
      <div className="line-3">
        let's create, collaborate, and connect!
      </div>
    </div>,
  );

  useEffect(() => {
    const body = document.querySelector('body');
    const mobileNav = document.querySelector('.mobile-nav');
    if (darkMode) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
      mobileNav.classList.add('light-mode');
      mobileNav.classList.remove('dark-mode');
      return;
    }
    body.classList.add('light-mode');
    body.classList.remove('dark-mode');
    mobileNav.classList.add('dark-mode');
    mobileNav.classList.remove('light-mode');
  }, [darkMode]);

  return (
    <div>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setContent={setContent}
      />
      <NavBar
        setIsHome={setIsHome}
        setIsAbout={setIsAbout}
        setIsProjects={setIsProjects}
        content={content}
        setContent={setContent}
        expandProjects={expandProjects}
        setExpandProjects={setExpandProjects}
      />
      <div className="ml-8 mt-10 mb-20 mobile-landing">
        <LandingPage content={content} />
      </div>
      <Footer
        setIsHome={setIsHome}
        setIsAbout={setIsAbout}
        setIsProjects={setIsProjects}
        content={content}
        setContent={setContent}
        isContact={isContact}
        setContact={setContact}
      />
    </div>
  );
}

export default App;
