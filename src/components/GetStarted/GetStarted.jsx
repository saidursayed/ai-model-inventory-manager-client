import React from "react";
import { Link } from "react-router";
import { FaRocket } from "react-icons/fa";

const GetStarted = () => {
  return (
    <section className="relative py-20 md:py-28 bg-[#0D0A1F] overflow-hidden">
      
      {/* Glow Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#8B3DFF]/30 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        
        {/* Badge */}
        <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm text-indigo-200 mb-6">
          AI Model Inventory Platform
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
          Get Started with
          <span className="text-[#8B3DFF]"> AI Model Management</span>
        </h2>

        {/* Description */}
        <p className="text-slate-300 text-lg md:text-xl mt-6 leading-relaxed">
          Register or log in to add, organize, and manage your AI models in one
          centralized inventory system. Track frameworks, datasets, and use
          cases efficiently while exploring community-driven AI solutions.
        </p>

        {/* Feature Highlights */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8 text-slate-300 text-sm md:text-base">
          <span className="bg-white/10 px-4 py-2 rounded-lg">
            Manage AI Models
          </span>
          <span className="bg-white/10 px-4 py-2 rounded-lg">
            Track Datasets & Frameworks
          </span>
          <span className="bg-white/10 px-4 py-2 rounded-lg">
            Community Driven Platform
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-12">
          <Link
            to="/register"
            className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#8B3DFF] text-white font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition duration-300 flex items-center justify-center gap-2"
          >
            <FaRocket />
            Get Started Now
          </Link>

          <Link
            to="/login"
            className="w-full sm:w-auto px-10 py-4 rounded-xl border border-white/30 text-white font-semibold text-lg hover:bg-white hover:text-slate-900 transition duration-300"
          >
            Login Account
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
