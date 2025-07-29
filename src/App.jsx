import React, { useState, useRef, useEffect } from "react";
import FrontBack from "./Components/FrontBack";
import bgImg from "./images/bgImg.jpg";
import { gsap } from "gsap";

const App = () => {
  const [boolean, setBoolean] = useState(false);
  const landingRef = useRef(null);

  const buttonHandler = () => {
    setBoolean(true);
  };

  useEffect(() => {
    if (!boolean && landingRef.current) {
      gsap.fromTo(
        landingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 2.2,
          ease: "power3.out",
        }
      );
    }
  }, [boolean]);

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {boolean ? (
        <FrontBack />
      ) : (
        <div
          ref={landingRef}
          className="text-center max-w-xl bg-gray-900 border border-gray-700 rounded-2xl shadow-xl p-10 space-y-10 backdrop-blur-md bg-opacity-70"
        >
          <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 leading-snug">
            Ready to Start Your <span className="text-cyan-300">Web Dev</span>{" "}
            Journey?
          </h1>

          <p className="text-gray-400 text-md">
            Explore HTML, CSS, JavaScript, React, and more!
          </p>

          <div className="flex justify-center pt-4">
            <button
              onClick={buttonHandler}
              className="bg-gradient-to-r from-green-600 to-green-900 hover:from-green-500 hover:to-green-700 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-green-400/30 transition-all duration-300 transform hover:scale-105 active:scale-95 text-lg"
            >
              LET'S GO🚀
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
