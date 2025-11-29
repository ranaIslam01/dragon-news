import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { showError, showSuccess } from "../Provider/ToastProvider";
import { AuthContext } from "../Provider/AuthContext";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export default function Register() {
  const { createUser, updateUser, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const password = form.password.value;
    const photo = form.photoURL.value;
    const email = form.email.value;
    //  create user
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        showSuccess("User create successfull");
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
            showError(error.message);
            setUser(user);
          });
        navigate("/");
      })
      .catch((error) => {
        showError(error.message);
      });
  };


  const handleEyeIcon = () => {
    setShowPassword(!showPassword);
  }
  

  return (
    <>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
          {/* Title */}
          <h2 className="text-3xl font-bold text-center text-primary-black mb-8">
            Create your account
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-primary-black focus:border-transparent outline-none transition"
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
              />
            </div>

            {/* Password */}

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                name="password"
                className="px-6 py-3 w-full border-gray-300 border rounded-md"
                required
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
              />

              <span
                onClick={handleEyeIcon}
                className="absolute top-10 right-4 text-2xl cursor-pointer "
              >
                {showPassword ? <IoIosEyeOff /> : <IoIosEye />}
              </span>
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Photo URL
              </label>
              <input
                type="url"
                name="photoURL"
                placeholder="https://example.com/your-photo.jpg"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 rounded-lg transition duration-200 shadow-md cursor-pointer "
            >
              Register
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              to="/auth/login"
              className="text-indigo-600 hover:text-indigo-700 font-medium"
            >
              Login
            </Link>{" "}
          </p>
        </div>
      </div>
    </>
  );
}
