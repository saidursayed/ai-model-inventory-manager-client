import React from "react";
import ModelCard from "../ModelCard/ModelCard";

const LatestModels = ({ data }) => {
  return (
    <div className="py-8 md:py-12 px-6 md:px-10 bg-[#E5E5FD] dark:bg-[#020617]">
      <div>
        <div className="text-center mb-6 md:mb-8">
          <h2 className="font-bold text-4xl md:text-5xl mb-1 md:mb-2">
            Featured <span className="text-indigo-600"> AI Models</span>
          </h2>
          <p className="text-gray-500 text-base md:text-lg">
           Discover the latest and most popular AI models in our collection
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {data.map((model) => (
            <ModelCard key={model._id} model={model}></ModelCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestModels;
