import React, { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router';
import useAuth from '../../hooks/useAuth';

const MyPurchasedModels = () => {
  const { user, loading } = useAuth();
  const [purchasedModels, setPurchasedModels] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/my-purchased-models?email=${user.email}`)
      .then(res => res.json())
      .then(data => setPurchasedModels(data))
      .catch(err => console.error(err));
  }, [user]);

  // Private Route Protection
  if (!loading && !user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen">
      {/* Title & Subtitle */}
      <div className="text-center mb-10">
        <h2 className="font-bold text-5xl mb-2">
          My Purchased<span className="text-indigo-600"> Models</span>
        </h2>
        <p className="text-gray-500 text-lg">
          View and manage all AI models you have purchased in one place.
        </p>
      </div>

      {/* Empty State */}
      {purchasedModels.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">No purchased models found.</p>
          <p className="text-sm mt-1">
            Explore models and purchase to see them listed here.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {purchasedModels.map((model) => (
            <div
              key={model._id}
              className="flex items-center justify-between 
              bg-base-100 rounded-xl p-4 
              border border-gray-200 
              shadow-sm transition-all duration-300 ease-in-out 
              hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01]"
            >
              {/* Left: Image + Info */}
              <div className="flex items-center gap-5">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-24 h-24 rounded-lg object-cover bg-gray-100 p-2"
                />

                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {model.name}
                  </h3>

                  <p className="text-sm text-gray-600">
                    Framework: {model.framework}
                  </p>

                  <p className="text-sm text-gray-600">
                    Use Case: {model.useCase}
                  </p>

                  <p className="text-sm text-gray-500">
                    Created by: {model.createdBy}
                  </p>

                  <p className="text-sm text-indigo-500 font-medium">
                    Purchased by: {model.purchasedBy}
                  </p>
                </div>
              </div>

              {/* Right: View Details Button */}
              <Link to={`/models/${model._id}`}>
                <button className="bg-indigo-600 hover:bg-indigo-700 
                text-white px-5 py-2 cursor-pointer rounded-lg font-medium 
                transition duration-200">
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPurchasedModels;
