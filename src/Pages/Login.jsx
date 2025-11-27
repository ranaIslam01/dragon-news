import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthContext";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { showError, showSuccess } from "../Provider/ToastProvider";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(() => {
        showSuccess("Log In Successful");
        setTimeout(() => {
          navigate(`${location.state ? location.state : "/"}`);
        }, 200);
      })
      .catch((error) => {
        showError(error.message);
      });
  };

  const handleEyeIcon = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="px-10 w-[400px] py-10 my-20 rounded-2xl flex justify-center flex-col bg-white shadow-md border border-gray-200">
        <h1 className="text-primary-black font-bold text-2xl text-center mb-8">
          Login your account
        </h1>

        <form onSubmit={handleLogIn} className="flex flex-col gap-4">
          <h2 className="text-primary-black font-semibold text-lg">
            Email address
          </h2>
          <input
            name="email"
            className="px-6 py-3 border-gray-300 border rounded-md"
            required
            type="email"
            placeholder="Enter your email address"
          />

          <h2 className="text-primary-black font-semibold text-lg">Password</h2>
          <div className="relative">
            <input
              name="password"
              className="px-6 py-3 w-full border-gray-300 border rounded-md"
              required
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
            />

            <span
              onClick={handleEyeIcon}
              className="absolute top-3 right-4 text-2xl cursor-pointer"
            >
              {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
            </span>
          </div>

          <button
            className="bg-primary-black cursor-pointer hover:bg-black duration-300 font-semibold py-2 rounded-md text-white"
            type="submit"
          >
            Login
          </button>
        </form>

        <p className="text-secondary-black font-semibold text-center py-5 text-base">
          Don’t Have An Account?{" "}
          <Link to="/auth/register" className="text-indigo-500 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
