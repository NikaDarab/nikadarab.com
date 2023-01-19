import React from "react";
import { PROJECTS } from "./projects";

const Project = ({ index, mobile = false }) => {
  const projects = mobile ? PROJECTS : PROJECTS[index];
  return (
    <div className="flex flex-col gap-5">
      {mobile ? (
        projects.map((i) => (
          <div className="responsive-text not-fancy-font flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <a
                target="_blank"
                href={i.live}
                className="animate__animated animate__fadeInDown text-lg"
                rel="noreferrer"
              >
                {i.name}
              </a>

              <div className="text-m">{i.description}</div>
            </div>
            <div className="mb-20 flex flex-col gap-3">
              <a href={i.live} target="_blank" rel="noreferrer">
                <img src={i.image} alt={i.name} />
              </a>
              <div className="flex">
                <div className="text-md mr-2">Stack: </div>
                <div className="text-m items-center flex justify-center">
                  {i.techStack}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="responsive-text not-fancy-font flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <a
              target="_blank"
              href={projects.live}
              className="animate__animated animate__fadeInDown text-lg"
              rel="noreferrer"
            >
              {projects.name}
            </a>

            <div className="text-m">{projects.description}</div>
          </div>
          <div className="mb-20 flex flex-col gap-3">
            <a href={projects.live} target="_blank" rel="noreferrer">
              <img src={projects.image} alt={projects.name} />
            </a>
            <div className="flex">
              <div className="text-md mr-2">Stack: </div>
              <div className="text-m items-center flex justify-center">
                {projects.techStack}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
