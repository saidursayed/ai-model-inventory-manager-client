import React from "react";
import { FaBrain, FaRobot, FaChartLine, FaGlobe } from "react-icons/fa";

const AboutAIModels = () => {
  return (
    <div className="py-8 md:py-12 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">

        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white">
            What Are <span className="text-[#8B3DFF]">AI Models?</span>
          </h2>
          <p className="text-gray-500 mt-4 text-base md:text-lg">
            The building blocks of modern artificial intelligence systems
          </p>
        </div>


        <div className="grid md:grid-cols-2 gap-8">

          <div data-aos="fade-down" className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FaBrain className="text-[#8B3DFF]" />
              Understanding AI Models
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              AI models are mathematical systems trained on data to recognize
              patterns, make predictions, and solve complex problems. They are
              the core of machine learning and power intelligent applications
              across various industries.
            </p>
          </div>


          <div data-aos="fade-down" className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FaRobot className="text-[#8B3DFF]" />
              Neural Networks & Deep Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Modern AI models often use neural networks inspired by the human
              brain. These layered systems process large amounts of data to
              enable speech recognition, image detection, and natural language
              understanding.
            </p>
          </div>

          <div data-aos="fade-up" className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FaGlobe className="text-[#8B3DFF]" />
              Real-World Applications
            </h3>
            <ul className="text-gray-600 dark:text-gray-400 space-y-2">
              <li>• Chatbots & Virtual Assistants</li>
              <li>• Image & Face Recognition</li>
              <li>• Healthcare & Medical Diagnosis</li>
              <li>• Recommendation Systems</li>
            </ul>
          </div>


          <div data-aos="fade-up" className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <FaChartLine className="text-[#8B3DFF]" />
              Importance in Modern Technology
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              AI models automate complex tasks, analyze big data, and enhance
              decision-making. They are essential for innovation in industries
              like finance, healthcare, e-commerce, and autonomous systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAIModels;