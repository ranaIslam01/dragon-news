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
      .then((result) => {
        showSuccess("Log Out Successfull");
        console.log(result);
      })
      .catch((error) => {
        showError(error.massage);
        console.log(error);
      });
  };

  return (
    <div className="flex items-center py-2 justify-between">
      <div> {user && user.name} </div>
      <nav className="text-secondary-black space-x-4 font-medium">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/career">Career</Link>
      </nav>
      <div className="flex gap-4 items-center">
        <img className="h-10 w-10 rounded-full" src={`${user ? user.photoURL: userPhoto }`} />
        {user ? (
          <Link
            onClick={handleLogout}
            className="px-10 py-2 bg-primary-black rounded-md cursor-pointer hover:bg-gray-800 duration-500 text-white font-bold"
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
