import React from "react";

const ModelCard = ({model}) => {
    const {name, image, framework, useCase, description} = model;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm rounded-none">
        <figure className=" border-2 border-red-400">
          <img
            src={image}
            alt="Shoes"
            className="border-2 border-green-500"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>
            {description}
          </p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline badge-secondary">{framework}</div>
            <div className="badge badge-outline badge-secondary">{useCase}</div>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary w-full">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;
