import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Social = () => {
  return (
    <div className="flex flex-col  justify-center">
      <h2 className="text-primary-black font-semibold text-lg mb-6">Login With</h2>
      <div className="flex items-center gap-4 py-2 text-blue-400  justify-center rounded-md border border-blue-400 cursor-pointer hover:bg-blue-500 hover:text-white font-semibold hover:font-semibold duration-300 hover:duration-300">
        <span>
          <FcGoogle size={23}/>
        </span>
        <button className="cursor-pointer"> Login With Google</button>
      </div>
      <div className="flex items-center gap-4 py-2 text-blue-400 font-semibold justify-center rounded-md border border-blue-400 hover:border cursor-pointer hover:bg-blue-500 hover:text-white hover:font-semibold duration-300 hover:duration-300 mt-3">
        <span>
          <FaGithub size={23} />
        </span>
        <button className="cursor-pointer">Login With Github</button>
      </div>
    </div>
  );
};

export default Social;
