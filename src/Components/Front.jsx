import React, { useState } from "react";
import html from "./../images/HTML.jpeg";
import css from "./../images/CSS.webp";
import js from "./../images/JS.png";
import MoreFront from "./MoreFront.jsx";

const Front = ({ goBack }) => {
  const [showMore, setShowMore] = useState(false);

  // Source links
  const sources = {
    html: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    css: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    js: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br p-6 text-gray-100">
      {/* Back button */}
      <button
        onClick={goBack}
        className="mb-6 flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
      >
        <span className="mr-2 group-hover:-translate-x-1 transition-transform duration-300">
          ←
        </span>
        Back to Path Selection
      </button>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-4">
          Frontend Fundamentals
        </h1>

        {/* Three Column Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* HTML Card */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl hover:border-amber-400 transition-all duration-300 flex flex-col h-96 w-64 mx-auto">
            {/* Centered Square Image with Padding */}
            <div className="p-4 flex justify-center">
              <div className="w-40 h-40 rounded-lg overflow-hidden border-2 border-gray-600">
                <img
                  src={html}
                  alt="HTML"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Bottom */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-amber-400 mb-2 text-center">
                HTML
              </h2>
              <p className="text-sm text-gray-300 mb-4 text-center">
                The backbone of every webpage defining structure and content.
              </p>

              <a
                href={sources.html}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-sm text-amber-400 hover:text-amber-300 hover:underline transition-colors flex justify-center items-center"
              >
                Source →
              </a>
            </div>
          </div>

          {/* CSS Card */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl hover:border-blue-400 transition-all duration-300 flex flex-col h-96 w-64 mx-auto">
            {/* Centered Square Image with Padding */}
            <div className="p-4 flex justify-center">
              <div className="w-40 h-40 rounded-lg overflow-hidden border-2 border-gray-600">
                <img
                  src={css}
                  alt="CSS"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Bottom */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-blue-400 mb-2 text-center">
                CSS
              </h2>
              <p className="text-sm text-gray-300 mb-4 text-center">
                Controls styling, layouts and animations for web pages.
              </p>

              <a
                href={sources.css}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors flex justify-center items-center"
              >
                Source →
              </a>
            </div>
          </div>

          {/* JavaScript Card */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl hover:border-yellow-400 transition-all duration-300 flex flex-col h-96 w-64 mx-auto">
            {/* Centered Square Image with Padding */}
            <div className="p-4 flex justify-center">
              <div className="w-40 h-40 rounded-lg overflow-hidden border-2 border-gray-600">
                <img
                  src={js}
                  alt="JavaScript"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Bottom */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-yellow-400 mb-2 text-center">
                JavaScript
              </h2>
              <p className="text-sm text-gray-300 mb-4 text-center">
                Adds interactivity and dynamic behavior to websites.
              </p>

              <a
                href={sources.js}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-sm text-yellow-400 hover:text-yellow-300 hover:underline transition-colors flex justify-center items-center"
              >
                Source →
              </a>
            </div>
          </div>
        </div>

        {/* Next Steps Button - Dark Theme Version */}
        <button
          onClick={() => setShowMore(true)}
          className="w-full md:w-auto mx-auto mt-8 bg-gray-700 border-2 border-gray-600 hover:border-cyan-500 text-gray-300 hover:text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
        >
          Explore Next Steps
          <span className="text-lg">→</span>
        </button>

        {showMore && <MoreFront />}
      </div>
    </div>
  );
};

export default Front;
