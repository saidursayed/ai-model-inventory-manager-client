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
      fetch(
        `https://ai-model-inventory-manager-server-eight.vercel.app/my-models?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        },
      )
        .then((res) => res.json())
        .then((data) => {
          setModels(data);
          setLoading(false);
        });
    }
  }, [user]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-6 bg-[#E5E5FD] dark:bg-[#1A1B2E] min-h-screen transition-colors duration-500">
      <div className="text-center mb-10">
        <h2 className="font-bold text-5xl mb-2 text-gray-900 dark:text-white">
          My
          <span className="text-indigo-600"> Models</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Manage and view all AI models you have added to your inventory.
        </p>
      </div>

      <div className="space-y-6">
        {models.map((model) => (
          <div
            key={model._id}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 bg-white dark:bg-slate-800 rounded-xl p-3 md:p-4 border border-gray-200 dark:border-gray-700 shadow-2xl shadow-slate-300/40 dark:shadow-black/50 transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.01]hover:bg-gray-50 dark:hover:bg-slate-700"
          >
            {/* Left Section */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5">
              <img
                src={model.image}
                alt={model.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover bg-white dark:bg-slate-700 p-2 transition-transform duration-500 hover:scale-105"
              />

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white">
                  {model.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Framework: {model.framework}
                </p>

                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Use Case: {model.useCase}
                </p>

                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Created by: {model.createdBy}
                </p>
              </div>
            </div>

            {/* Button */}
            <Link
              to={`/models/${model._id}`}
              className="w-full md:w-auto text-center relative overflow-hidden rounded-lg border border-emerald-500 text-white bg-emerald-500 px-6 py-2 font-semibold transition-all duration-300 group"
            >
              <div className="relative flex justify-center items-center gap-2 z-10 group-hover:text-emerald-500 transition-colors duration-300">
                <span>View Details</span>
                <FaArrowRight />
              </div>

              <span className="absolute left-0 top-0 h-full w-0 bg-white dark:bg-gray-700 transition-all duration-500 group-hover:w-full"></span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyModels;
