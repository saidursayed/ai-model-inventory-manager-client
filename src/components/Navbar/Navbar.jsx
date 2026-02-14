import React from "react";
import useAuth from "../../hooks/useAuth";
import { NavLink } from "react-router";

const Navbar = () => {
  const { user } = useAuth();
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/models">All Models</NavLink>
      </li>
      <li>
        <NavLink to="/add-model">Add Model</NavLink>
      </li>
    </>
  );

  const handleLogout = () =>{
    
  }
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
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
  );
};

export default Navbar;
