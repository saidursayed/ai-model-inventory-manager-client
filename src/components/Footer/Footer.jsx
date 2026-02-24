import React from "react";
import { Link } from "react-router";
import { FaGithub, FaTwitter, FaLinkedin, FaRobot, FaFacebook } from "react-icons/fa";
import logo from "../../assets/logo.png"
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="relative z-50 bg-[#F8FAFC] dark:bg-[#0B102B] text-slate-700 dark:text-slate-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold text-slate-800 dark:text-white">
              <img className="h-12 md:h-14" src={logo} alt="" />
              {/* <span>AI Model Inventory</span> */}
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Manage, explore, and organize your AI models in one platform.
              Built for developers, researchers, and AI teams.
            </p>
            <div className="flex gap-4 mt-4">
              <a className="p-2 rounded-lg bg-white dark:bg-[#111633] shadow hover:shadow-xl hover:scale-105 transition transform duration-300">
                <FaGithub size={18} />
              </a>
              <a className="p-2 rounded-lg bg-white dark:bg-[#111633] shadow hover:shadow-xl hover:scale-105 transition transform duration-300">
                <FaTwitter size={18} />
              </a>
              <a className="p-2 rounded-lg bg-white dark:bg-[#111633] shadow hover:shadow-xl hover:scale-105 transition transform duration-300">
                <FaLinkedin size={18} />
              </a>
              
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h6 className="font-semibold text-slate-800 dark:text-white mb-4 text-base md:text-lg">
              Product
            </h6>
            <div className="flex flex-col gap-3 text-sm font-semibold">
              <Link
                to="/models"
                className="hover:text-[#8B3DFF] transition duration-200"
              >
                Explore Models
              </Link>
              <Link
                to="/add-model"
                className="hover:text-[#8B3DFF] transition duration-200"
              >
                Add Model
              </Link>
              <Link
                to="/my-models"
                className="hover:text-[#8B3DFF] transition duration-200"
              >
                My Models
              </Link>
              <Link
                to="/purchased-models"
                className="hover:text-[#8B3DFF] transition duration-200"
              >
                Purchased Models
              </Link>
            </div>
          </div>

          {/* Our Services Section */}
          <div className="mt-8 lg:mt-0">
            <h6 className="font-semibold text-slate-800 dark:text-white text-base md:text-lg mb-4">
              Our Services
            </h6>
            <div className="flex flex-col gap-3 text-sm font-semibold text-slate-600 dark:text-slate-400">
              <a className="hover:text-[#8B3DFF] transition cursor-pointer">
                AI Model Management
              </a>
              <a className="hover:text-[#8B3DFF] transition cursor-pointer">
                Model Deployment
              </a>
              <a className="hover:text-[#8B3DFF] transition cursor-pointer">Data Annotation</a>
              <a className="hover:text-[#8B3DFF] transition cursor-pointer">
                Analytics & Reporting
              </a>
            </div>
          </div>

          {/* Contact Us Section */}
          <div>
            <h6 className="font-semibold text-slate-800 dark:text-white text-base md:text-lg mb-4">
              Contact Us
            </h6>
            <div className="flex flex-col gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
              <p>
                Email:{" "}
                <a
                  href="mailto:support@aimodelinventory.com"
                  className="hover:text-[#8B3DFF] transition"
                >
                  support@aimodelinventory.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+1234567890"
                  className="hover:text-[#8B3DFF] transition"
                >
                  +1 234 567 890
                </a>
              </p>
              <p>Address: 123 AI Street, Tech City, USA</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} AI Model Inventory Manager. All rights
            reserved.
          </p>

          <div className="flex gap-3 text-sm font-semibold">
            <a className="hover:text-[#8B3DFF] transition duration-200 cursor-pointer">
              Privacy Policy
            </a>
            <a className="hover:text-[#8B3DFF] transition duration-200 cursor-pointer">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>

      {/* Glassy gradient effect */}
      <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-[#8B3DFF]/10 via-transparent to-transparent"></div>
    </footer>
  );
};

export default Footer;
