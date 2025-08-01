import React from "react";

const MoreFront = () => {
  // Source links for each technology
  const sources = {
    react: "https://reactjs.org/",
    tailwind: "https://tailwindcss.com/",
    bootstrap: "https://getbootstrap.com/",
    gsap: "https://greensock.com/gsap/",
    typescript: "https://www.typescriptlang.org/",
    git: "https://git-scm.com/",
    responsive:
      "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
    apis: "https://developer.mozilla.org/en-US/docs/Web/API",
    deployment:
      "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Publishing_your_website",
    testing: "https://jestjs.io/",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br p-8 text-gray-100  overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900 scroll-smooth">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-8">
          What's Next After HTML, CSS & JavaScript?
        </h1>
        <p className="text-xl text-gray-300 mb-12">
          Now that you've got the basics down, here are the top things to learn
          and build next in frontend development:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* React.js */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl p-6 hover:border-blue-400 transition-all duration-300 flex flex-col">
            <h2 className="text-2xl font-bold text-blue-400 mb-3 flex items-center">
              <span className="mr-2">✨</span> React.js
            </h2>
            <p className="text-gray-300 mb-4">
              A powerful JavaScript library for building modern, fast, and
              scalable web apps. Learn about components, hooks, props, and state
              management. It's widely used in companies and required for most
              frontend jobs.
            </p>
            <a
              href={sources.react}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm text-blue-400 hover:text-blue-300 hover:underline transition-colors flex items-center"
            >
              Source →
            </a>
          </div>

          {/* Tailwind CSS */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 flex flex-col">
            <h2 className="text-2xl font-bold text-cyan-400 mb-3 flex items-center">
              <span className="mr-2">🎨</span> Tailwind CSS
            </h2>
            <p className="text-gray-300 mb-4">
              A utility-first CSS framework that speeds up styling with
              predefined classes. Makes your UI clean and consistent without
              writing tons of CSS.
            </p>
            <a
              href={sources.tailwind}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm text-cyan-400 hover:text-cyan-300 hover:underline transition-colors flex items-center"
            >
              Source →
            </a>
          </div>

          {/* Bootstrap */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl p-6 hover:border-purple-400 transition-all duration-300 flex flex-col">
            <h2 className="text-2xl font-bold text-purple-400 mb-3 flex items-center">
              <span className="mr-2">📦</span> Bootstrap
            </h2>
            <p className="text-gray-300 mb-4">
              Another UI framework with ready-made components. Great for quick
              layouts and responsive design without custom styling.
            </p>
            <a
              href={sources.bootstrap}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm text-purple-400 hover:text-purple-300 hover:underline transition-colors flex items-center"
            >
              Source →
            </a>
          </div>

          {/* GSAP */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl p-6 hover:border-green-400 transition-all duration-300 flex flex-col">
            <h2 className="text-2xl font-bold text-green-400 mb-3 flex items-center">
              <span className="mr-2">💨</span> GSAP (GreenSock)
            </h2>
            <p className="text-gray-300 mb-4">
              A JavaScript animation library used for smooth, high-performance
              animations and scroll effects. Ideal for making your sites look
              dynamic and professional.
            </p>
            <a
              href={sources.gsap}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm text-green-400 hover:text-green-300 hover:underline transition-colors flex items-center"
            >
              Source →
            </a>
          </div>

          {/* TypeScript */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 flex flex-col">
            <h2 className="text-2xl font-bold text-blue-500 mb-3 flex items-center">
              <span className="mr-2">🧠</span> TypeScript
            </h2>
            <p className="text-gray-300 mb-4">
              A superset of JavaScript that adds types. Helps catch bugs early
              and improves code quality. Often used in large-scale React
              projects.
            </p>
            <a
              href={sources.typescript}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm text-blue-500 hover:text-blue-400 hover:underline transition-colors flex items-center"
            >
              Source →
            </a>
          </div>

          {/* Version Control */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl p-6 hover:border-gray-400 transition-all duration-300 flex flex-col">
            <h2 className="text-2xl font-bold text-gray-400 mb-3 flex items-center">
              <span className="mr-2">📁</span> Version Control (Git & GitHub)
            </h2>
            <p className="text-gray-300 mb-4">
              Essential for any developer. Helps you track your code changes and
              collaborate with others.
            </p>
            <a
              href={sources.git}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm text-gray-400 hover:text-gray-300 hover:underline transition-colors flex items-center"
            >
              Source →
            </a>
          </div>

          {/* Responsive Design */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl p-6 hover:border-pink-400 transition-all duration-300 flex flex-col">
            <h2 className="text-2xl font-bold text-pink-400 mb-3 flex items-center">
              <span className="mr-2">📱</span> Responsive & Mobile-First Design
            </h2>
            <p className="text-gray-300 mb-4">
              Learn to make your websites look great on phones, tablets, and
              desktops using media queries and flexible layouts.
            </p>
            <a
              href={sources.responsive}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm text-pink-400 hover:text-pink-300 hover:underline transition-colors flex items-center"
            >
              Source →
            </a>
          </div>

          {/* APIs */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl p-6 hover:border-yellow-400 transition-all duration-300 flex flex-col">
            <h2 className="text-2xl font-bold text-yellow-400 mb-3 flex items-center">
              <span className="mr-2">🌐</span> APIs & Fetch/Axios
            </h2>
            <p className="text-gray-300 mb-4">
              Learn how to connect your frontend to real-world data using REST
              APIs, and display dynamic content.
            </p>
            <a
              href={sources.apis}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm text-yellow-400 hover:text-yellow-300 hover:underline transition-colors flex items-center"
            >
              Source →
            </a>
          </div>

          {/* Deployment */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl p-6 hover:border-indigo-400 transition-all duration-300 flex flex-col">
            <h2 className="text-2xl font-bold text-indigo-400 mb-3 flex items-center">
              <span className="mr-2">🌍</span> Deployment
            </h2>
            <p className="text-gray-300 mb-4">
              Host your frontend projects on platforms like Netlify, Vercel, or
              GitHub Pages to make them public.
            </p>
            <a
              href={sources.deployment}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm text-indigo-400 hover:text-indigo-300 hover:underline transition-colors flex items-center"
            >
              Source →
            </a>
          </div>

          {/* Testing */}
          <div className="bg-gray-800 border-2 border-gray-700 rounded-xl p-6 hover:border-red-400 transition-all duration-300 flex flex-col">
            <h2 className="text-2xl font-bold text-red-400 mb-3 flex items-center">
              <span className="mr-2">🧪</span> Testing
            </h2>
            <p className="text-gray-300 mb-4">
              Learn testing tools like Jest and React Testing Library to ensure
              your frontend code works properly.
            </p>
            <a
              href={sources.testing}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm text-red-400 hover:text-red-300 hover:underline transition-colors flex items-center"
            >
              Source →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreFront;
