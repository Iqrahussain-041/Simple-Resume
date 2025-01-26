"use client";
import { useState } from "react";

export default function Profile() {
  const [showSkills, setShowSkills] = useState(true);

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex justify-center items-center py-10 px-5">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 md:p-16">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 border-b pb-6 mb-8">
          <img
            src="/profile.jpg" // Replace with your profile image in the public directory
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-2 border-blue-500"
          />
          <div className="text-center md:text-left">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Iqra Hussain</h1>
            <p className="text-gray-600">
              Email:{" "}
              <a
                href="mailto:iqrah0416@gmail.com"
                className="text-blue-500 hover:underline"
              >
                iqrah0416@gmail.com
              </a>
            </p>
            <p className="text-gray-600">
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/iqra-hussain-7b6b03323/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                linkedin.com/in/iqra-hussain-7b6b03323
              </a>
            </p>
            <p className="text-gray-600">
              GitHub:{" "}
              <a
                href="https://github.com/Iqrahussain-041"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                github.com/Iqrahussain-041
              </a>
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
            Education
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Matriculation - Government Science Girl School</li>
            <li>Intermediate - Computer Science, Karachi</li>
            <li>BS Art - Karachi University</li>
          </ul>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
            Skills
          </h2>
          {showSkills && (
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>CSS</li>
              <li>Tailwind</li>
              <li>HTML</li>
            </ul>
          )}
          <button
            onClick={toggleSkills}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition focus:ring focus:ring-blue-300"
          >
            {showSkills ? "Hide Skills" : "Show Skills"}
          </button>
        </div>
      </div>
    </div>
  );
}
