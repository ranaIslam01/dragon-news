import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Provider/AuthContext";

const Login = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const {signIn} = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = e.target; 
    const email = form.email.value;
    const password = form.password.value;
    // logIN 
    signIn(email, password)
    .then((result) => {
      toast.success("Log In Successfull");
      console.log(result);
      setTimeout(() => {
        navigate(`${location.state? location.state: "/ "}`);
      }, 200);
    })
    .catch((error) => {
      toast.error(error.message);
      console.error(error);
    })

  }
  return (
    <div className="flex justify-center items-center">
      <Toaster/>
      <div className="px-10 w-[400px] py-10 my-20 rounded-2xl flex justify-center flex-col bg-white shadow-md border border-gray-200">
        <h1 className="text-primary-black font-bold text-2xl text-center mb-8">
          Login your account
        </h1>

        <div>
         <form onSubmit={handleLogIn} className="flex flex-col gap-4"> 
            <h2 className="text-primary-black font-semibold text-lg">Email address</h2>
            <input name ="email" className="px-6 py-3  border-gray-300 border rounded-md placeholder-secondary-black " required type="email" placeholder="Enter your email address" />
            <h2 className="text-primary-black font-semibold text-lg">Password</h2>
            <input name ="password" className="px-6 py-3  border-gray-300 border rounded-md placeholder-secondary-black " required type="password" placeholder="Enter your password" />
            <button className="bg-primary-black cursor-pointer hover:bg-black duration-300 hover:duration-300 font-semibold py-2 rounded-md text-white " type="submit">Login</button>
         </form>
         <p className="text-secondary-black font-semibold text-center py-5 text-base">Dont’t Have An Account ? <Link to="/auth/register" className="text-indigo-500 font-semibold ">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
