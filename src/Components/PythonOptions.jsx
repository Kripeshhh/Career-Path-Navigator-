import React from "react";
import django from "./../images/Django.jpeg";
import flask from "./../images/Flask.jpeg";
import FastApi from "./../images/FastApi.jpeg";

const PythonOptions = ({ goBack }) => {
  // Source links
  const sources = {
    django: "https://www.djangoproject.com/",
    flask: "https://flask.palletsprojects.com/",
    fastapi: "https://fastapi.tiangolo.com/",
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
        Back to Backend Options
      </button>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 mb-4">
          Python Backend Frameworks
        </h1>

        {/* Three Column Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Django Card */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl hover:border-green-400 transition-all duration-300 flex flex-col h-96 w-64 mx-auto">
            {/* Centered Square Image with Padding */}
            <div className="p-4 flex justify-center">
              <div className="w-40 h-40 rounded-lg overflow-hidden border-2 border-gray-600">
                <img
                  src={django}
                  alt="Django"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Bottom */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-green-400 mb-2 text-center">
                Django
              </h2>
              <p className="text-sm text-gray-300 mb-4 text-center">
                Full-featured framework with ORM, auth, and admin panel.
              </p>

              <a
                href={sources.django}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-sm text-green-400 hover:text-green-300 hover:underline transition-colors flex justify-center items-center"
              >
                Source →
              </a>
            </div>
          </div>

          {/* Flask Card */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl hover:border-blue-400 transition-all duration-300 flex flex-col h-96 w-64 mx-auto">
            {/* Centered Square Image with Padding */}
            <div className="p-4 flex justify-center">
              <div className="w-40 h-40 rounded-lg overflow-hidden border-2 border-gray-600">
                <img
                  src={flask}
                  alt="Flask"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Bottom */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-blue-400 mb-2 text-center">
                Flask
              </h2>
              <p className="text-sm text-gray-300 mb-4 text-center">
                Microframework perfect for APIs and small applications.
              </p>

              <a
                href={sources.flask}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors flex justify-center items-center"
              >
                Source →
              </a>
            </div>
          </div>

          {/* FastAPI Card */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl hover:border-purple-400 transition-all duration-300 flex flex-col h-96 w-64 mx-auto">
            {/* Centered Square Image with Padding */}
            <div className="p-4 flex justify-center">
              <div className="w-40 h-40 rounded-lg overflow-hidden border-2 border-gray-600">
                <img
                  src={FastApi}
                  alt="FastAPI"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content Bottom */}
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-purple-400 mb-2 text-center">
                FastAPI
              </h2>
              <p className="text-sm text-gray-300 mb-4 text-center">
                Modern framework for high-performance APIs with docs.
              </p>

              <a
                href={sources.fastapi}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-sm text-purple-400 hover:text-purple-300 hover:underline transition-colors flex justify-center items-center"
              >
                Source →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonOptions;
