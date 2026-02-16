import React from "react";
import ModelCard from "../ModelCard/ModelCard";

const LatestModels = ({ data }) => {
  return (
    <div className="py-20 px-10 bg-[#E5E5FD]">

        <div>
          <div className="text-center">
            <h1 className="font-bold text-6xl mb-4">Featured AI Models</h1>
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
