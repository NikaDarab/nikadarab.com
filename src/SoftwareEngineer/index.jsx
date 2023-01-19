import React, { useState } from "react";
import TakeMeHome from "../TakeMeHome";
import PDF from "../resume.pdf";
import Modal from "../Modal";

const SoftwareEngineer = () => {
  const [displayPdf, setDisplayPdf] = useState(false);
  const [displayIntroduction, setDisplayIntroduction] = useState(false);
  const [displayCode, setDisplayCode] = useState(false);
  const [displayWorks, setDisplayWorks] = useState(false);

  const isMobile = window.matchMedia(
    "only screen and (max-width: 760px)"
  ).matches;

  return (
    <>
      <div className="text-hot-red max-h-screen absolute inset-0 flex flex-col   gap-10 swe-page-font">
        <TakeMeHome />
        <button
          className="border-none bg-transparent text-4xl text-sm:text-2xl"
          onClick={() => setDisplayIntroduction(!displayIntroduction)}
        >
          Introduction
        </button>
        <button
          className="border-none bg-transparent text-4xl text-sm:text-2xl"
          onClick={() => setDisplayCode(!displayCode)}
        >
          The Code I live By
        </button>
        <button
          className="border-none bg-transparent text-4xl text-sm:text-2xl"
          onClick={() => setDisplayWorks(!displayWorks)}
        >
          Works
        </button>
        {isMobile ? (
          <a href={PDF} download target="_blank" rel="noreferrer">
            <button>Resume on mobile</button>
          </a>
        ) : (
          <button>
            <h2
              className="text-4xl text-sm:text-2xl"
              onClick={() => setDisplayPdf(true)}
            >
              Resume
            </h2>
          </button>
        )}

        {displayPdf && (
          <Modal showModal={displayPdf} setShowModal={setDisplayPdf} />
        )}
      </div>
    </>
  );
};

export default SoftwareEngineer;
