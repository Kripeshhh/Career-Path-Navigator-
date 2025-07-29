import React, { useState } from "react";
import PythonOptions from "./../Components/PythonOptions";
import express from "./../images/Express.jpeg";
import node from "./../images/Node.jpeg";
import nest from "./../images/Nest.jpeg";

const Backend = ({ goBack }) => {
  const [showPython, setShowPython] = useState(false);

  // Source links
  const sources = {
    node: "https://nodejs.org/",
    express: "https://expressjs.com/",
    nest: "https://nestjs.com/",
  };

  if (showPython) return <PythonOptions goBack={() => setShowPython(false)} />;

  return (
    <div className="min-h-screen bg-gradient-to-br p-8 text-gray-100">
      {/* Back button */}
      <button
        onClick={goBack}
        className="mb-8 flex items-center text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
      >
        <span className="mr-2 group-hover:-translate-x-1 transition-transform duration-300">
          ←
        </span>
        Back to Path Selection
      </button>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-10 text-center">
          Backend Development Options
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Node.js Card */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl p-6 hover:border-green-400 transition-all duration-300 hover:-translate-y-2 group flex flex-col">
            <div className="w-full h-48 rounded-lg overflow-hidden border-2 border-gray-700 mb-4">
              <img
                src={node}
                alt="Node.js"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mb-3">
              Node.js
            </h3>
            <p className="text-gray-300 mb-4">
              JavaScript-based runtime for building backend apps using
              Express.js, Nest.js, etc.
            </p>
            <div className="bg-gray-700 rounded-lg p-3 border-l-4 border-green-500 mb-4">
              <p className="text-sm text-gray-300">
                Perfect for full-stack JavaScript developers
              </p>
            </div>
            <a
              href={sources.node}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm text-green-400 hover:text-green-300 hover:underline transition-colors flex items-center"
            >
              Source →
            </a>
          </div>

          {/* Express.js Card */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl p-6 hover:border-blue-400 transition-all duration-300 hover:-translate-y-2 group flex flex-col">
            <div className="w-full h-48 rounded-lg overflow-hidden border-2 border-gray-700 mb-4">
              <img
                src={express}
                alt="Express.js"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 mb-3">
              Express.js
            </h3>
            <p className="text-gray-300 mb-4">
              Minimal and fast web framework for Node.js used for API and
              server-side logic.
            </p>
            <div className="bg-gray-700 rounded-lg p-3 border-l-4 border-blue-500 mb-4">
              <p className="text-sm text-gray-300">
                Great for REST APIs and microservices
              </p>
            </div>
            <a
              href={sources.express}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors flex items-center"
            >
              Source →
            </a>
          </div>

          {/* Nest.js Card */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl p-6 hover:border-red-400 transition-all duration-300 hover:-translate-y-2 group flex flex-col">
            <div className="w-full h-48 rounded-lg overflow-hidden border-2 border-gray-700 mb-4">
              <img
                src={nest}
                alt="Nest.js"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500 mb-3">
              Nest.js
            </h3>
            <p className="text-gray-300 mb-4">
              Progressive Node.js framework built with TypeScript for scalable
              apps.
            </p>
            <div className="bg-gray-700 rounded-lg p-3 border-l-4 border-red-500 mb-4">
              <p className="text-sm text-gray-300">
                Enterprise-grade architecture
              </p>
            </div>
            <a
              href={sources.nest}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm text-red-400 hover:text-red-300 hover:underline transition-colors flex items-center"
            >
              Source →
            </a>
          </div>
        </div>

        {/* Python Option */}
        <div
          onClick={() => setShowPython(true)}
          className="mt-12 text-center cursor-pointer group"
        >
          <span className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 group-hover:from-amber-500 group-hover:to-orange-600 transition-all duration-300 underline underline-offset-4">
            Or Are You Interested in Python?
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mx-auto mt-2 text-amber-500 group-hover:translate-x-2 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Backend;
