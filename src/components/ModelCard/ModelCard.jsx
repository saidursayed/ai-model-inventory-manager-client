import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ModelCard = ({ model }) => {
  const { name, image, framework, useCase, description } = model;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm rounded-none border border-gray-400">
        <figure className="">
          <img src={image} alt="Shoes" className=" w-1/2" />
        </figure>
        <div className="card-body p-0 border-t-gray-400 border-t">
          <div className="p-4">
            <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline badge-secondary">
              {framework}
            </div>
            <div className="badge badge-outline badge-secondary">{useCase}</div>
          </div>
          </div>
          <div className="card-actions border-t border-t-gray-400">
            <button className="relative w-full overflow-hidden border border-[#8B3DFF] text-white bg-[#8B3DFF] px-6 py-2 font-semibold transition-all duration-300 group">
              <div className="relative flex justify-center items-center gap-2 z-10 group-hover:text-[#8B3DFF] transition-colors duration-300">
                <span>View Details</span> <span><FaArrowRight /></span>
              </div>

              {/* Hover White Slide Effect */}
              <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
