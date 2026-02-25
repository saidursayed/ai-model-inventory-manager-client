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
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import toast from "react-hot-toast";

const ModelDetails = () => {
  const { id } = useParams();
  const [model, setModel] = useState({});
  const { user } = useAuth();
  const [refetch, setRefecth] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://ai-model-inventory-manager-server-eight.vercel.app/models/${id}`,
      {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      },
    )
      .then((res) => res.json())
      .then((data) => {
        setModel(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, refetch, user]);

  const handlePurchasedModel = () => {
    const purchasedModel = {
      modelId: model._id,
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

    fetch(
      `https://ai-model-inventory-manager-server-eight.vercel.app/purchased-models/${model._id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.accessToken}`,
        },
        body: JSON.stringify(purchasedModel),
      },
    )
      .then((res) => res.json())
      .then((data) => {
        toast.success("Model purchased successfully!");
        console.log(data);
        setRefecth(!refetch);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to purchase model. Try again.");
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
        fetch(
          `https://ai-model-inventory-manager-server-eight.vercel.app/models/${model._id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${user.accessToken}`,
            },
          },
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your Model has been deleted.",
              icon: "success",
            });
            navigate("/models");
          })
          .catch((error) => {
            console.log(error);
            toast.error("Something went wrong. Try again.");
          });
      }
    });
  };

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="bg-[#F3F2FF] dark:bg-[#1A263A] min-h-screen px-4 py-8 md:py-12 md:px-0">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 ">
          <button
            onClick={() => navigate(-1)}
            className="text-xs md:text-sm font-extrabold text-slate-500 dark:text-slate-300 hover:text-indigo-600 transition-colors tracking-wide"
          >
            ← BACK TO MODELS
          </button>
        </div>

        <div className="bg-white dark:bg-[#0F172B] rounded-xl md:rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-xl shadow-slate-200/40 dark:shadow-xl dark:shadow-black/20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-6 md:p-8 lg:p-12 lg:border-r border-slate-100 dark:border-slate-700 bg-[#F3F2FF] dark:bg-[#1A263A]">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl dark:shadow-2xl dark:shadow-black/50 group">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-5 right-5 bg-white/90 dark:bg-[#1A263A] backdrop-blur-md px-5 py-2 rounded-2xl border border-slate-200 shadow-md text-xs font-extrabold text-indigo-600 dark:text-white">
                  {model.framework}
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 lg:p-12 flex flex-col">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-slate-100 mb-6 leading-tight">
                {model.name}
              </h1>

              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-10 max-w-xl ">
                {model.description}
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex flex-col md:flex-row gap-1 md:gap-0 md:items-center justify-between py-4 border-b-[1.5px] border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-500 font-semibold text-sm md:text-base">
                    <FaUser className="text-slate-400" /> Created By
                  </div>
                  <span className="text-slate-900 dark:text-slate-300 dark:font-semibold font-bold text-sm md:text-base">
                    {model.createdBy}
                  </span>
                </div>

                <div className="flex items-center justify-between py-4 border-b-[1.5px] border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-500 font-semibold text-sm md:text-base">
                    <FaDatabase className="text-slate-400" /> Dataset
                  </div>
                  <span className="text-slate-900 dark:text-slate-300 dark:font-semibold font-bold text-sm md:text-base">
                    {model.dataset}
                  </span>
                </div>

                <div className="flex items-center justify-between py-4 border-b-[1.5px] border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-500 font-semibold text-sm md:text-base">
                    <FaMicrochip className="text-slate-400" /> Use Case
                  </div>
                  <span className="text-slate-900 dark:text-slate-300 dark:font-semibold font-bold text-sm md:text-base">
                    {model.useCase}
                  </span>
                </div>

                <div className="flex items-center justify-between py-4 border-b-[1.5px] border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-3 text-slate-600 dark:text-slate-500 font-semibold text-sm md:text-base">
                    <FaShoppingCart className="text-slate-400" /> Purchased
                  </div>
                  <span className="text-indigo-600 font-extrabold text-base md:text-lg">
                    {model.purchased || 0}
                  </span>
                </div>
              </div>

              <div className="mt-auto space-y-5">
                <button
                  onClick={handlePurchasedModel}
                  className="w-full py-4 md:py-5 rounded-xl md:rounded-2xl font-black text-xs md:text-sm uppercase cursor-pointer transition-all duration-300 shadow-lg bg-linear-to-r from-indigo-600 to-violet-600 text-white hover:shadow-indigo-300 dark:hover:shadow-indigo-900 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Purchase Model
                </button>

                {user.email === model.createdBy && (
                  <div className="grid grid-cols-2 gap-4 pt-5 border-t border-slate-100 dark:border-slate-700">
                    <Link
                      to={`/update-model/${model._id}`}
                      className="flex justify-center items-center py-4 rounded-xl border border-slate-200 font-extrabold text-[10px] uppercase text-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 transition-all duration-300"
                    >
                      Update Model
                    </Link>
                    <button
                      onClick={handelDeleteModal}
                      className="py-4 rounded-xl border border-red-100 hover:border-red-600 bg-red-50 cursor-pointer text-red-600 font-extrabold text-[10px] uppercase hover:bg-red-600 hover:text-white transition-all duration-300 shadow-sm"
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
