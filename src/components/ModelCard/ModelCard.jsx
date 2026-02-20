import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const ModelCard = ({ model }) => {
  const { _id, name, image, framework, useCase, description } = model;
  return (
    <div className="h-full">
      <div className="card bg-base-100 shadow-md rounded-none flex flex-col h-full   hover:scale-102 hover:shadow-2xl transition-all duration-300">
        <figure className="h-48 flex items-center justify-center bg-gray-50">
          <img src={image} alt={name} className="h-full w-full object-contain transition-transform duration-500 hover:scale-105 cursor-pointer" />
        </figure>

        <div className="card-body p-0 border-t border-t-gray-400 flex flex-col flex-grow">
          <div className="p-4 grow">
            <div className="card-actions justify-between mb-2">
              <div className="bg-[#F5F3FF] font-medium text-[#7C3AED] py-1 px-4 rounded-full text-md">
                {framework}
              </div>
              <div className="bg-[#F5F3FF] font-medium text-[#7C3AED] py-1 px-4 rounded-full text-md">
                {useCase}
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="card-title text-xl font-bold">{name}</h2>

              <p className="line-clamp-3 text-gray-600">{description}</p>
            </div>
          </div>

          <div className="card-actions border-t border-t-gray-400 mt-auto">
            <Link
              to={`/models/${_id}`}
              className="relative w-full overflow-hidden border border-[#8B3DFF] text-white bg-[#8B3DFF] px-6 py-2 font-semibold transition-all duration-300 group"
            >
              <div className="relative flex justify-center items-center gap-2 z-10 group-hover:text-[#8B3DFF] transition-colors duration-300">
                <span>View Details</span>
                <span>
                  <FaArrowRight />
                </span>
              </div>

              <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
