import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userPhoto from "../assets/user.png";
import { showError, showSuccess } from "../Provider/ToastProvider";
import { AuthContext } from "../Provider/AuthContext";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    // Sign out
    logOut()
      .then(() => {
        showSuccess("Log Out Successfull");
      })
      .catch((error) => {
        showError(error.massage);
      });
  };

  return (
    <div className="flex items-center py-10 justify-between">
      <div> {user && user.name} </div>
      <nav className="text-secondary-black space-x-4 font-medium">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </nav>
      <div className="flex gap-4 items-center">
        <img className="h-10 w-10 rounded-full" src={`${user ? user.photoURL: userPhoto }`} />
        {user ? (
          <Link
            onClick={handleLogout}
            className="px-10 py-2 bg-red rounded-md cursor-pointer hover:bg-red-500 duration-500 text-white font-bold"
          >
            Log Out
          </Link>
        ) : (
          <Link
            to="/auth/login"
            className="px-10 py-2 bg-primary-black rounded-md cursor-pointer hover:bg-gray-800 duration-500 text-white font-bold"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
