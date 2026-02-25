import React from "react";
import { Link } from "react-router";
import { FaRobot } from "react-icons/fa";
import { RiHome4Line } from "react-icons/ri";

const ErrorPage = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center 
    bg-[#F3F2FF] dark:bg-[#1A1B2E] px-6 transition-colors duration-500"
    >
      <div className="text-center max-w-xl">
        <div className="flex justify-center mb-6">
          <div
            className="w-20 h-20 flex items-center justify-center 
          rounded-full bg-indigo-100 dark:bg-slate-800 shadow-lg"
          >
            <FaRobot className="text-4xl text-indigo-600 dark:text-indigo-400" />
          </div>
        </div>

        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-3">
          404
        </h1>

        <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-3">
          Oops! This AI model doesn’t exist.
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mb-8 text-base md:text-lg">
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg 
          bg-indigo-600 text-white font-semibold text-base
          border border-indigo-600
          hover:bg-white hover:text-indigo-600
          dark:hover:bg-slate-800
          transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <RiHome4Line />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
