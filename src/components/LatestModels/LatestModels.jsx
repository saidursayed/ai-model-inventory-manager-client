import React from "react";
import ModelCard from "../ModelCard/ModelCard";

const LatestModels = ({ data }) => {
  return (
    <div className="py-20 px-10 bg-[#E5E5FD]">
      <div>
        <div className="text-center mb-12">
          <h2 className="font-bold text-5xl mb-2">
            Featured <span className="text-indigo-600"> AI Models</span>
          </h2>
          <p className="text-gray-500 text-lg">
           Discover the latest and most popular AI models in our collection
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 ">
          {data.map((model) => (
            <ModelCard key={model._id} model={model}></ModelCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestModels;
