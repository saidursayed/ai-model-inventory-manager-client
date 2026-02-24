import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import useAuth from "../../hooks/useAuth";
import { FaArrowRight } from "react-icons/fa";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const MyPurchasedModels = () => {
  const { user } = useAuth();
  const [purchasedModels, setPurchasedModels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(
      `https://ai-model-inventory-manager-server-eight.vercel.app/my-purchased-models?email=${user.email}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setPurchasedModels(data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [user]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="p-6 min-h-screen bg-[#E5E5FD] dark:bg-[#1A1B2E] transition-colors duration-500">
      <div className="text-center mb-10">
        <h2 className="font-bold text-5xl mb-2 text-gray-900 dark:text-white">
          My Purchased
          <span className="text-indigo-600 dark:text-indigo-400"> Models</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          View and manage all AI models you have purchased in one place.
        </p>
      </div>

      {purchasedModels.length === 0 ? (
        <div className="text-center py-20 text-gray-400 dark:text-gray-500">
          <p className="text-lg">No purchased models found.</p>
          <p className="text-sm mt-1">
            Explore models and purchase to see them listed here.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {purchasedModels.map((model) => (
            <div
              key={model._id}
              className="flex flex-col md:flex-row md:items-center md:justify-between 
  gap-4 md:gap-0 
  bg-white dark:bg-slate-800 rounded-xl p-3 md:p-4 
  border border-gray-200 dark:border-gray-700
  shadow-2xl shadow-slate-300/40 dark:shadow-black/50
  transition-all duration-300 ease-in-out
  hover:shadow-2xl hover:scale-[1.01] hover:bg-gray-50 dark:hover:bg-slate-700"
            >
              {/* Left Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 min-w-0">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover 
      bg-gray-100 dark:bg-slate-700 p-2 
      transition-transform duration-500 hover:scale-105 shrink-0"
                />

                <div className="min-w-0">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white wrap-break-word">
                    {model.name}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-300 wrap-break-word">
                    Framework: {model.framework}
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-300 wrap-break-word">
                    Use Case: {model.useCase}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400 wrap-break-word">
                    Created by: {model.createdBy}
                  </p>

                  <p className="text-sm text-indigo-500 font-medium dark:text-indigo-400 wrap-break-word">
                    Purchased by: {model.purchasedBy}
                  </p>
                </div>
              </div>

              {/* Button */}
              <Link
                to={`/models/${model.modelId}`}
                className="w-full md:w-auto text-center relative overflow-hidden 
    rounded-lg border border-indigo-600 text-white bg-indigo-600 
    px-5 py-2 font-semibold transition-all duration-300 group 
    flex justify-center items-center"
              >
                <div className="relative flex justify-center items-center gap-2 z-10 group-hover:text-indigo-600 transition-colors duration-300">
                  <span>View Details</span>
                  <FaArrowRight />
                </div>

                <span className="absolute left-0 top-0 h-full w-0 bg-white dark:bg-[#E5E5FD] transition-all duration-500 group-hover:w-full"></span>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPurchasedModels;
