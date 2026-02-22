import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link, NavLink } from "react-router";
import { RiHome4Line, RiRobot2Line, RiRobot3Fill } from "react-icons/ri";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const links = (
    <>
      <li className="text-base font-medium">
        <NavLink to="/">
          {" "}
          <RiHome4Line size={18} /> Home
        </NavLink>
      </li>
      <li className="text-base font-medium">
        <NavLink to="/models">
          <RiRobot2Line size={18} /> All Models
        </NavLink>
      </li>
      <li className="text-base font-medium">
        <NavLink to="/add-model">
          <RiRobot3Fill size={18} />
          Add Model
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        // toast.success("You Logged Out successfully");
      })
      .catch((error) => {
        // toast.error(error.message);
        console.log(error);
      });
  };
  return (
    <div className="navbar bg-[#FCFCFC] dark:bg-[#020617] shadow-sm py-3 fixed top-0 left-0 right-0 z-50">
      <div className=" max-w-7xl mx-auto px-4 w-full flex items-center justify-between">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-60 p-2 shadow bg-white rounded-box w-52"
            >
              {links}
            </ul>
          </div>

          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="AI Model Inventory Manager Logo"
              className="h-12 md:h-14"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          <label className="toggle text-base-content">
            <input
              type="checkbox"
              value="synthwave"
              onChange={(e) => handleTheme(e.target.checked)}
              defaultChecked={localStorage.getItem("theme") === "dark"}
              className="theme-controller "
            />

            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {user && <img alt="" src={user.photoURL} />}
                </div>
              </div>

              <div
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-white rounded-xl z-50 mt-5.5 p-0 shadow-xl border border-gray-100"
              >
                <div className="px-4 py-3 border-b border-gray-100">
                  <h2 className="text-lg font-medium text-gray-900">
                    {user.displayName}
                  </h2>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>

                <ul className="p-2">
                  <li>
                    <Link
                      to="/my-models"
                      className="text-sm rounded-lg px-3 py-2 hover:bg-gray-100 transition-all duration-200"
                    >
                      My Models
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/my-purchased-models"
                      className="text-sm rounded-lg px-3 py-2 hover:bg-gray-100 transition-all duration-200"
                    >
                      My Purchased Models
                    </Link>
                  </li>

                  <div className="my-1 border-t border-gray-100"></div>

                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-sm text-red-500 rounded-lg px-3 py-2 hover:bg-red-50 transition-all duration-200 w-full text-left"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex gap-1 md:gap-2">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `btn btn-sm md:btn-md border-[1.5px] border-primary md:px-5 ${
                    isActive
                      ? "bg-primary text-white"
                      : "bg-white text-primary hover:bg-primary hover:text-white"
                  }`
                }
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `btn btn-sm md:btn-md border-[1.5px] border-primary md:px-5 ${
                    isActive
                      ? "bg-primary text-white"
                      : "bg-white text-primary hover:bg-primary hover:text-white"
                  }`
                }
              >
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
