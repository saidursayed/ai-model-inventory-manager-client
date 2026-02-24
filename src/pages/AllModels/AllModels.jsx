import React, { useRef, useState } from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../../components/ModelCard/ModelCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const AllModels = () => {
  const data = useLoaderData();
  const [models, setModels] = useState(data);
  const [loading, setLoading] = useState(false);
  const frameworks = [...new Set(data.map((model) => model.framework))];
  const filterRef = useRef();

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;

    setLoading(true);
    fetch(`http://localhost:3000/search?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setModels(data);
      });
  };
  const filterModels = () => {
    const framework = filterRef.current.value;
    if (!framework) {
      setModels(data);
      return;
    }
    setLoading(true);
    fetch(`http://localhost:3000/filter-models?framework=${framework}`)
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="py-8 md:py-12 px-6 md:px-10 bg-[#E5E5FD] dark:bg-[#1A1B2E]">
      <div className="text-center mb-12">
        <h2 className="font-bold text-3xl md:text-5xl mb-1 md:mb-2">
          Explore <span className="text-indigo-600">AI Models</span>
        </h2>
        <p className="text-gray-500 text-base md:text-lg">
          Browse our complete collection of AI models
        </p>
      </div>
      <div className="mb-6 md:mb-8 flex flex-col-reverse md:flex-row gap-2 md:gap-0 justify-between">
        <div>
          <select
            defaultValue=""
            name="framework"
            ref={filterRef}
            onChange={() => filterModels()}
            className="select outline-indigo-600 border-0 dark:bg-[#0F172B] w-full"
          >
            <option value="">All Frameworks</option>
            {frameworks.map((framework, index) => (
              <option key={index}>{framework}</option>
            ))}
          </select>
        </div>
        <div>
          <form onSubmit={handleSearch}>
            <div className="flex gap-2 w-full">
              <label className="input w-2/3 dark:bg-[#0F172B] border-0 outline-indigo-600">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </g>
                </svg>
                <input
                  name="search"
                  type="search"
                  required
                  placeholder="Search"
                />
              </label>
              <button className="btn w-1/3 bg-indigo-600 text-white">Search</button>
            </div>
          </form>
        </div>
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="w-20 h-20 border-6 border-t-4 border-gray-200 border-t-purple-800 rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {models.map((model) => (
            <ModelCard key={model._id} model={model}></ModelCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllModels;
