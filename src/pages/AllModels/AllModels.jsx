import React, { useRef, useState } from "react";
import { useLoaderData } from "react-router";
import ModelCard from "../../components/ModelCard/ModelCard";

const AllModels = () => {
  const data = useLoaderData();
  const [models, setModels] = useState(data);
  const [loading, setLoading] = useState(false);
  const frameworks = [...new Set(data.map((model) => model.framework))];
  const filterRef = useRef();
  // console.log(data);
  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    // console.log(search);
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

    fetch(`http://localhost:3000/filter-models?framework=${framework}`)
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="py-20 px-10 bg-[#E5E5FD]">
      <div className="text-center mb-12">
        <h2 className="font-bold text-5xl mb-2">
          Explore <span className="text-indigo-600">AI Models</span>
        </h2>
        <p className="text-gray-500 text-lg">
          Browse our complete collection of AI models
        </p>
      </div>
      <div className="mb-10 flex justify-between">
        <div>
          <select
            defaultValue=""
            name="framework"
            ref={filterRef}
            onChange={() => filterModels()}
            className="select"
          >
            <option value="">All Frameworks</option>
            {frameworks.map((framework, index) => (
              <option key={index}>{framework}</option>
            ))}
          </select>
        </div>
        <div>
          <form onSubmit={handleSearch}>
            <div className="flex">
              <label className="input">
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
              <button className="btn bg-indigo-600 text-white">
                {loading ? "Searching...." : "Search"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {models.map((model) => (
          <ModelCard key={model._id} model={model}></ModelCard>
        ))}
      </div>
    </div>
  );
};

export default AllModels;
