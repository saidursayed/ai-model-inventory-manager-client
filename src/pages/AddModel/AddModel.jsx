import React from "react";
import useAuth from "../../hooks/useAuth";

const AddModel = () => {
  const { user } = useAuth();
  const handleAddModel = (e) => {
    e.preventDefault();
    const form = e.target;
    const addModelData = {
      name: form.name.value,
      framework: form.framework.value,
      useCase: form.useCase.value,
      dataset: form.dataset.value,
      description: form.description.value,
      image: form.image.value,
      createdBy: user.email,
      createdAt: new Date(),
      purchased: 0,
    };
    console.log(addModelData);
    fetch("http://localhost:3000/add-model", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addModelData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-100 to-slate-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="font-bold text-5xl mb-2">
            Add New<span className="text-indigo-600"> AI Model</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Share your AI Model with the community
          </p>
        </div>


        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-4 md:p-8">
          <form onSubmit={handleAddModel} className="space-y-3">

            <div>
              <label className="text-sm font-bold text-slate-700">
                Model Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter AI model name"
                className="w-full mt-1 px-4 py-3 rounded-md border border-slate-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-slate-50"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-bold text-slate-700">
                  Framework
                </label>
                <input
                  type="text"
                  name="framework"
                  placeholder="Enter model framework"
                  className="w-full mt-1 px-4 py-3 rounded-md border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-bold text-slate-700">
                  Use Case
                </label>
                <input
                  type="text"
                  name="useCase"
                  placeholder="Enter model use case"
                  className="w-full mt-1 px-4 py-3 rounded-md border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                  required
                />
              </div>
            </div>


            <div>
              <label className="text-sm font-bold text-slate-700">
                Dataset
              </label>
              <input
                type="text"
                name="dataset"
                placeholder="Enter Dataset"
                className="w-full mt-1 px-4 py-3 rounded-md border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                required
              />
            </div>


            <div>
              <label className="text-sm font-bold text-slate-700">
                Description
              </label>
              <textarea
                name="description"
                rows="5"
                placeholder="Enter model description"
                className="w-full mt-1 px-4 py-3 rounded-md border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all resize-none"
                required
              ></textarea>
            </div>


            <div>
              <label className="text-sm font-bold text-slate-700">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                placeholder="Enter image URL"
                className="w-full mt-1 px-4 py-3 rounded-md border border-slate-200 bg-slate-50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                required
              />
            </div>


            <div className="pt-4">
              <button
                type="submit"
                className="w-full py-4 rounded-md font-black text-sm uppercase bg-[#8B3DFF] text-white shadow-lg hover:bg-slate-50 hover:text-[#8B3DFF] border-[1.5px] border-[#8B3DFF] hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                Add Model
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddModel;
