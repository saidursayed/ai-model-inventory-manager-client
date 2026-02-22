import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-white dark:bg-[#020617]">
      <div className="w-20 h-20 border-6 border-t-4 border-gray-200 dark:border-gray-700 border-t-purple-600 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
