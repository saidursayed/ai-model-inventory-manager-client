import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link, useParams } from "react-router";

const ModelDetails = () => {
  const { id } = useParams();
  const [model, setModel] = useState({});
  console.log("model data here", model);
  useEffect(() => {
    fetch(`http://localhost:3000/models/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setModel(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);
  return (
    <div className="px-10 py-20">
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Model Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={model.image}
            alt={model.name}
            className="rounded-lg shadow-md "
          />
        </div>

        {/* Model Details */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{model.name}</h1>
          
          <div className="flex flex-wrap gap-4">
            <span className="badge badge-outline">Framework: {model.framework}</span>
            <span className="badge badge-outline">Use Case: {model.useCase}</span>
            <span className="badge badge-outline">Dataset: {model.dataset}</span>
          </div>

          <p className="text-gray-700 mt-4">{model.description}</p>

          <p className="mt-4 font-semibold">
            Purchased Count: <span className="text-primary">{model.purchased}</span>
          </p>

          <button className="mt-6 bg-primary text-white py-2 px-6 rounded hover:bg-primary/90">
            Purchase
          </button>
        </div>

      </div>
    </div>
  );
};

export default ModelDetails;
