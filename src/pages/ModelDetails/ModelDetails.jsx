import React, { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaDatabase,
  FaMicrochip,
  FaRobot,
  FaShieldAlt,
  FaShoppingCart,
  FaUser,
} from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const ModelDetails = () => {
  const { id } = useParams();
  const [model, setModel] = useState({});
  const { user } = useAuth();
  const [refetch, setRefecth] = useState(false);
  const navigate = useNavigate();

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
  }, [id, refetch]);
console.log(model.email)
  const handlePurchasedModel = () => {
    const purchasedModel = {
      name: model.name,
      framework: model.framework,
      useCase: model.useCase,
      dataset: model.dataset,
      description: model.description,
      image: model.image,
      createdBy: model.createdBy,
      purchasedBy: user.email,
      purchasedAt: new Date(),
    };

    fetch(`http://localhost:3000/purchased-models/${model._id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(purchasedModel),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRefecth(!refetch);
      });
  };

  const handelDeleteModal = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/models/${model._id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate("/models");
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  return (
    <div className="bg-linear-to-b from-slate-100 to-slate-50 min-h-screen py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header Navigation */}
        <div className="mb-10 ">
          <button
            onClick={() => navigate(-1)}
            className="text-sm font-extrabold text-slate-500 hover:text-indigo-600 transition-colors tracking-wide"
          >
            ← BACK TO MODELS
          </button>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-[36px] border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/40">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* LEFT COLUMN - IMAGE SECTION */}
            <div className="p-8 lg:p-10 lg:border-r border-slate-100 bg-linear-to-br from-slate-50 to-indigo-50/40">
              {/* Image Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Framework Badge */}
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-md px-5 py-2 rounded-2xl border border-slate-200 shadow-md text-xs font-extrabold text-indigo-600 tracking-wide">
                  {model.framework}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN - DETAILS */}
            <div className="p-8 md:p-12 lg:p-14 flex flex-col">
              {/* Profile Label */}
              <div className="flex items-center gap-3 text-indigo-600 mb-5">
                <FaRobot size={26} />
                <span className="text-sm font-black uppercase">
                  Model Profile
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
                {model.name}
              </h1>

              {/* Description */}
              <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-xl">
                {model.description}
              </p>

              {/* Data Info Section */}
              <div className="space-y-6 mb-12">
                <div className="flex items-center justify-between py-4 border-b border-slate-100">
                  <div className="flex items-center gap-3 text-slate-600 font-semibold">
                    <FaUser className="text-slate-400" /> Created By
                  </div>
                  <span className="text-slate-900 font-bold">
                    {model.createdBy}
                  </span>
                </div>

                <div className="flex items-center justify-between py-4 border-b border-slate-100">
                  <div className="flex items-center gap-3 text-slate-600 font-semibold">
                    <FaDatabase className="text-slate-400" /> Dataset Scale
                  </div>
                  <span className="text-slate-900 font-bold">
                    {model.dataset}
                  </span>
                </div>

                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-3 text-slate-600 font-semibold">
                    <FaShoppingCart className="text-slate-400" /> Purchased
                  </div>
                  <span className="text-indigo-600 font-extrabold text-lg">
                    {model.purchased || 0}
                  </span>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="mt-auto space-y-5">
                <button
                  onClick={handlePurchasedModel}
                  className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.25em] transition-all duration-300 shadow-lg
                
                    bg-linear-to-r from-indigo-600 to-violet-600 text-white hover:shadow-indigo-300 hover:scale-[1.02] active:scale-[0.98]`}
                >
                  Purchase Model
                </button>

                {/* Owner Actions */}
                {model && (
                  <div className="grid grid-cols-2 gap-4 pt-5 border-t border-slate-100">
                    <Link
                      to={`/update-model/${model._id}`}
                      className="flex justify-center items-center py-4 rounded-xl border border-slate-200 font-extrabold text-[10px] uppercase tracking-[0.18em] text-slate-600 bg-white hover:bg-indigo-50 hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300"
                    >
                      Update Model
                    </Link>

                    <button
                      onClick={handelDeleteModal}
                      className="py-4 rounded-xl border border-red-100 bg-red-50 text-red-600 font-extrabold text-[10px] uppercase tracking-[0.18em] hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm"
                    >
                      Delete Model
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelDetails;
