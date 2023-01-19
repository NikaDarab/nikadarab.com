import React from "react";
import Project from "../Project";
import ContactForm from "../ContactForm";

export const tabControl = (
  tab,
  setIsHome,
  setIsAbout,
  setIsProjects,
  setContent,
  index = 0,
  mobile
) => {
  const tabs = {
    home: {
      isHome: true,
      isAbout: false,
      isProjects: false,
      content: (
        <div className="flex flex-col not-fancy-font responsive-text capitalize">
          <div className="text-hot-pink mb-5">HOME</div>
          <div className="line-1">Hi, I'm Nika!</div>
          <div className="line-2 capitalize">
            a software engineer and an artist based in Dallas.
          </div>
          <div className="line-3">let's create, collaborate, and connect!</div>
        </div>
      ),
    },
    about: {
      isHome: false,
      isAbout: true,
      isProjects: false,
      content: (
        <div className="flex flex-col not-fancy-font responsive-text capitalize !mb-8">
          <div className="text-hot-pink mb-5">ABOUT</div>
          <div className="flex flex-col gap-5">
            <div className="line-1">
              I am an experienced software engineer with a passion for open
              source and community.
            </div>
            <div className="line-2">
              With a background in Javascript, HTML5, CSS3, Node.js, and Ruby, I
              am well-versed in front-end development and an expert in
              frameworks such as React.
            </div>
            <div className="line-3">
              In my free time, I like to perform, write and paint. After several
              years of being active in the comedy, writing and poetry scene I
              finally found my niche in story telling. I perofrm true stories of
              my life at local theaters and venues in the Dallas area.
            </div>

            <div className="line-4 mb-10">
              The power of story telling and the connection it creates within
              the community paired with my love for technology is what inspires
              me to create meaningful software.
            </div>
          </div>
        </div>
      ),
    },
    projects: {
      isHome: false,
      isAbout: false,
      isProjects: true,
      content: <Project index={index} mobile={mobile} />,
    },
    contact: {
      isHome: false,
      isAbout: false,
      isProjects: false,
      content: <ContactForm />,
    },
  };

  if (!(tab in tabs)) {
    return;
  }
  setIsHome(tabs[tab].isHome);
  setIsAbout(tabs[tab].isAbout);
  setIsProjects(tabs[tab].isProjects);
  setContent(tabs[tab].content);
};
