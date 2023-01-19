import React, { useEffect, useRef } from "react";
import { TweenLite, TweenMax } from "gsap";
import { Linear, Sine } from "gsap";
import "./petals.css"

const Petals = ({ total = 50 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    TweenLite.set(containerRef.current, { perspective: 600 });

    for (let i = 0; i < total; i++) {
      const div = document.createElement("div");
      TweenLite.set(div, {
        className: "dot",
        x: R(0, window.innerWidth),
        y: R(-200, -150),
        z: R(-200, 200),
      });
      containerRef.current.appendChild(div);
      animm(div);
    }

    function animm(elm) {
      TweenMax.to(elm, R(6, 15), {
        y: window.innerHeight + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -15,
      });
      TweenMax.to(elm, R(4, 8), {
        x: "+=100",
        rotationZ: R(0, 180),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
      });
      TweenMax.to(elm, R(2, 8), {
        rotationX: R(0, 360),
        rotationY: R(0, 360),
        repeat: -1,
        yoyo: true,
        ease: Sine.easeInOut,
        delay: -5,
      });
      TweenMax.to(elm, R(8, 20), {
        y: window.innerHeight + 100,
        ease: Linear.easeNone,
        repeat: -1,
        delay: -15,
    });
    TweenMax.to(elm, R(6, 15), {
      y: window.innerHeight + 100,
      ease: Linear.easeNone,
      repeat: -1,
      delay: -30,
  });
    }

    function R(min, max) {
      return min + Math.random() * (max - min);
    }
  }, [total]);

  return <div ref={containerRef} id="container"/>;
};

export default Petals;
