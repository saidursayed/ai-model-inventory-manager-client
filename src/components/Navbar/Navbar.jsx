import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link, NavLink } from "react-router";
import { RiHome4Line, RiRobot2Line, RiRobot3Fill } from "react-icons/ri";

const Navbar = () => {
  const { user, logOut } = useAuth();
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
    <div className="navbar bg-[#FCFCFC] shadow-sm py-4 fixed top-0 left-0 right-0 z-50">
      <div className=" max-w-7xl mx-auto px-4 w-full flex items-center justify-between">
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">AI Model Inventory Manager</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
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
