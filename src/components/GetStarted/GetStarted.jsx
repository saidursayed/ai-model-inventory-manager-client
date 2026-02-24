import React from "react";
import { Link } from "react-router";
import { FaRocket } from "react-icons/fa";

const GetStarted = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#E5E5FD] dark:bg-[#020617] overflow-hidden">
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#8B3DFF]/30 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-block bg-white/60 dark:bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm text-indigo-600 dark:text-indigo-200 mb-6 border border-white/40 dark:border-white/10">
          AI Model Inventory Platform
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
          Get Started with
          <span className="text-[#8B3DFF]"> AI Model Management</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-slate-300 text-lg md:text-xl mt-6 leading-relaxed">
          Register or log in to add, organize, and manage your AI models in one
          centralized inventory system. Track frameworks, datasets, and use
          cases efficiently while exploring community-driven AI solutions.
        </p>

        {/* Feature Highlights */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 text-gray-700 dark:text-slate-300 text-sm md:text-base">
          <span className="bg-white/70 dark:bg-white/10 px-4 py-2 rounded-lg border border-white/50 dark:border-white/10">
            Manage AI Models
          </span>
          <span className="bg-white/70 dark:bg-white/10 px-4 py-2 rounded-lg border border-white/50 dark:border-white/10">
            Track Datasets & Frameworks
          </span>
          <span className="bg-white/70 dark:bg-white/10 px-4 py-2 rounded-lg border border-white/50 dark:border-white/10">
            Community Driven Platform
          </span>
        </div>


        <div className="mt-12 flex justify-center">
          <Link
            to="/models"
            className="flex items-center justify-center gap-2
               px-6 py-4 rounded-xl bg-linear-to-r from-[#8B3DFF] to-[#5A00FF]
               text-white font-bold text-lg shadow-lg hover:shadow-2xl
               hover:scale-105 transition transform duration-300"
          >
            <FaRocket />
            Explore Models
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
