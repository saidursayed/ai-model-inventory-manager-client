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

    fetch(`http://localhost:3000/my-purchased-models?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
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
          My Purchased<span className="text-indigo-600 dark:text-indigo-400"> Models</span>
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
              className="flex items-center justify-between 
              bg-white dark:bg-slate-800 rounded-xl p-4 
              border border-gray-200 dark:border-gray-700
              shadow-2xl shadow-slate-300/40 dark:shadow-black/50
              transition-all duration-300 ease-in-out
              hover:shadow-2xl hover:scale-[1.01] hover:bg-gray-50 dark:hover:bg-slate-700"
            >

              <div className="flex items-center gap-5">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-24 h-24 rounded-lg object-cover bg-gray-100 dark:bg-slate-700 p-2 transition-transform duration-500 hover:scale-110"
                />

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {model.name}
                  </h3>

                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Framework: {model.framework}
                  </p>

                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Use Case: {model.useCase}
                  </p>

                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Created by: {model.createdBy}
                  </p>

                  <p className="text-sm text-indigo-500 font-medium dark:text-indigo-400">
                    Purchased by: {model.purchasedBy}
                  </p>
                </div>
              </div>

              {/* View Details Button */}
              <Link
                to={`/models/${model.modelId}`}
                className="relative overflow-hidden rounded-lg border border-indigo-600 text-white bg-indigo-600 px-5 py-2 font-semibold transition-all duration-300 group dark:text-white"
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