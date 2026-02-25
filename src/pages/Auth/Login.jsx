import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { googleSignIn, signInUser } = useAuth();
  const navigate = useNavigate();

  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        toast.success(`Welcome back, ${result.user.displayName || "User"}`);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        toast.success(`Welcome back, ${result.user.displayName || "User"}`);
        e.target.reset();
        navigate(location.state || "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <div className="flex justify-center items-center bg-[#EEF2F7] dark:bg-[#020617] min-h-screen px-6 py-8 md:py-12 md:px-0">
      <div className="card w-full max-w-sm shrink-0 shadow-2xl px-1 md:px-3 py-4 md:py-6 bg-white dark:bg-[#0F172B] rounded-xl transition-colors duration-300">
        <h2 className="font-semibold text-xl md:text-2xl text-center text-gray-900 dark:text-white">
          Login to AI Model <br /> Inventory Manager
        </h2>

        <form onSubmit={handleLogin} className="card-body py-0 mt-4">
          <fieldset className="space-y-2">
            {/* Email */}
            <label className="label text-base text-gray-600 dark:text-gray-400">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="input w-full rounded-lg border border-gray-300 dark:border-slate-600
                     dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              required
            />

            {/* Password */}
            <label className="label text-base text-gray-600 dark:text-gray-400">
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input w-full rounded-lg border border-gray-300 dark:border-slate-600
                       dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter Password"
                required
              />
              <button
                type="button"
                onClick={handleTogglePasswordShow}
                className="absolute top-1 right-1 border-none btn btn-sm bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Forgot Password */}
            <div>
              <Link
                to=""
                className="text-red-600 hover:text-red-500 dark:text-red-400 dark:hover:text-red-300 link link-hover text-sm"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn w-full mt-2 bg-linear-to-r from-[#8B3DFF] to-[#5A00FF] 
                     text-white font-bold hover:shadow-2xl hover:scale-105 transition transform duration-300"
            >
              Login
            </button>
          </fieldset>
        </form>

        <div className="card-body py-0 mt-4 space-y-3">
          {/* Google Sign-in */}
          <button
            onClick={handleGoogleSignIn}
            className="btn w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-slate-600
                   bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-600 transition"
          >
            <FcGoogle size={22} />
            Continue With Google
          </button>

          
          <p className="font-semibold text-gray-600 dark:text-gray-400 text-center text-xs pt-5">
            Don’t Have An Account?{" "}
            <Link
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
              to="/register"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
