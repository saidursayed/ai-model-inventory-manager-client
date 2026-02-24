import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { googleSignIn, createUser, updateUser, setUser, user } = useAuth();
  const navigate = useNavigate();

  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+])[A-Za-z\d@$!%*?&#^()\-_=+]{8,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
      );
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateUser({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            toast.success("Account created successfully");
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate("/");
          })
          .catch((error) => {
            toast.error(`${error.message}`);
            setUser(user);
          });
      })
      .catch(() => {
        toast.error("Registration failed! Please try again ❌");
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        toast.success(`Welcome back, ${result.user.displayName || "User"}`);
        navigate("/");
      })
      .caten((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center bg-[#EEF2F7] dark:bg-[#020617] min-h-screen px-6 py-8 md:py-12 md:px-0">
      <div className="card w-full max-w-sm shrink-0 shadow-2xl px-1 md:px-3 py-4 md:py-6 bg-white dark:bg-[#0F172B] rounded-xl transition-colors duration-300">
        <h2 className="font-semibold  text-xl md:text-3xl text-center text-gray-900 dark:text-white">
          Register for AI Model Inventory Manager
        </h2>
        <form onSubmit={handleRegister} className="card-body py-0 mt-4">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label text-sm md:text-base text-gray-600 dark:text-gray-400">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="input w-full rounded-lg border border-gray-300 dark:border-slate-600
                     dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your name"
              required
            />
            {/* Photo URL */}
            <label className="label text-sm md:text-base text-gray-600 dark:text-gray-400">
              Photo URL
            </label>
            <input
              name="photo"
              type="text"
              className="input w-full rounded-lg border border-gray-300 dark:border-slate-600
                     dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your photo URL"
              required
            />
            {/* email */}
            <label className="label text-sm md:text-base text-gray-600 dark:text-gray-400">
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
            {/* password */}
            <label className="label text-sm md:text-base text-gray-600 dark:text-gray-400">
              Password
            </label>
            <div className="relative">
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="input w-full rounded-lg border border-gray-300 dark:border-slate-600
                     dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Create a password"
                required
              />
              <button
                onClick={handleTogglePasswordShow}
                className="absolute top-1 right-1 border-none btn btn-sm bg-gray-200 dark:bg-slate-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-slate-500"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {error && (
              <p className="text-red-600 dark:text-red-400 text-xs font-medium mt-1">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="btn w-full mt-2 bg-linear-to-r from-[#8B3DFF] to-[#5A00FF] 
                     text-white font-bold hover:shadow-2xl hover:scale-105 transition transform duration-300"
            >
              Sign Up
            </button>
          </fieldset>
        </form>
        <div className="card-body py-0">
          <button
            onClick={handleGoogleSignIn}
            className="btn w-full flex items-center justify-center gap-2 border border-gray-300 dark:border-slate-600
                   bg-white dark:bg-slate-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-600 transition"
          >
            <FcGoogle size={22} />
            Continue With Google
          </button>

          <p className="font-semibold text-gray-600 dark:text-gray-400 text-center text-xs pt-5">
            Already have an account?{" "}
            <Link
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
              to="/login"
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
