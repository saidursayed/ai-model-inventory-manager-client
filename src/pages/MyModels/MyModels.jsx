import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const MyModels = () => {
  const { user } = useAuth();
  const [models, setModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-models?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setModels(data);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-10">
        <h2 className="font-bold text-5xl mb-2">
          My<span className="text-indigo-600"> Models</span>
        </h2>
        <p className="text-gray-500 text-lg">
          Manage and view all AI models you have added to your inventory.
        </p>
      </div>

      <div className="space-y-4">
        {models.map((model) => (
          <div
            key={model._id}
            className="flex items-center justify-between bg-gray-100 rounded-xl p-4 border border-gray-200 shadow-sm transition-all duration-300 ease-in-out hover:shadow-lg hover:bg-gray-50 hover:-translate-y-0.5"
          >
            {/* Left: Image + Info */}
            <div className="flex items-center gap-5">
              <img
                src={model.image}
                alt={model.name}
                className="w-24 h-24 rounded-lg object-cover bg-white p-2 transition-transform duration-500 hover:scale-105"
              />

              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {model.name}
                </h3>

                <p className="text-gray-600 text-sm">
                  Framework: {model.framework}
                </p>

                <p className="text-gray-600 text-sm">
                  Use Case: {model.useCase}
                </p>

                <p className="text-gray-500 text-sm">
                  Created by: {model.createdBy}
                </p>
              </div>
            </div>

            <Link
              to={`/models/${model._id}`}
              className="relative overflow-hidden rounded-lg border border-emerald-500 text-white bg-emerald-500 px-6 py-2 font-semibold transition-all duration-300 group"
            >
              <div className="relative flex justify-center items-center gap-2 z-10 group-hover:text-emerald-500 transition-colors duration-300">
                <span>View Details</span>
                <span>
                  <FaArrowRight />
                </span>
              </div>

              <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyModels;
