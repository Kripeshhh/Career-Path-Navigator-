import React, { useState } from "react";
import Front from "./../Components/Front";
import Back from "./../Components/Backend";

const FrontBack = () => {
  const [view, setView] = useState(null);

  if (view === "front") return <Front goBack={() => setView(null)} />;
  if (view === "back") return <Back goBack={() => setView(null)} />;

  return (
    <div className="min-h-screen bg-gradient-to-br flex items-center justify-center p-8">
      <div className="max-w-2xl w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-10">
          Choose Your Path
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Frontend Card */}
          <div
            onClick={() => setView("front")}
            className="group bg-gray-800 border-2 border-gray-700 rounded-xl p-8 cursor-pointer transition-all duration-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-2 flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform">
              <svg
                className="w-10 h-10 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors mb-3">
              FRONTEND
            </h2>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              Craft beautiful user interfaces
            </p>
          </div>

          {/* Backend Card */}
          <div
            onClick={() => setView("back")}
            className="group bg-gray-800 border-2 border-gray-700 rounded-xl p-8 cursor-pointer transition-all duration-300 hover:border-purple-400 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-2 flex flex-col items-center"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6 group-hover:-rotate-12 transition-transform">
              <svg
                className="w-10 h-10 text-gray-900"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-100 group-hover:text-purple-400 transition-colors mb-3">
              BACKEND
            </h2>
            <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
              Build powerful server logic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontBack;
