import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const { user, logOut } = useAuth();
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
                <ul
                  tabIndex="-1"
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <Link to="/my-models">My Models</Link>
                  </li>
                  <li>
                    <Link to="/my-purchased-models">My Model Purchase</Link>
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
    </div>
  );
};

export default Navbar;
