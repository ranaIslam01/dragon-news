import Social from "./Social";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
   return (
      <div>
         <h2 className="text-primary-black font-semibold text-lg mt-10 mb-4">Find On</h2>
      <div className="cursor-pointer">
        <div className="flex flex-row gap-3 items-center border border-gray-300  py-4 px-10 rounded-t-md">
          <span>
            <FaFacebookF color="blue" size={18} />
          </span>
          <h2 className="text-secondary-black font-medium">Facebook</h2>
        </div>
        <div className="flex flex-row gap-3 items-center border-r border-l border-gray-300  py-4 px-10">
          <span>
            <FaTwitter color="indigo" size={18} />
          </span>
          <h2 className="text-secondary-black font-medium">Twitter</h2>
        </div>
        <div className="flex flex-row gap-3 items-center border border-gray-300  py-4 px-10 rounded-b-md">
          <span>
            <FaInstagram color="green" size={18} />
          </span>
          <h2 className="text-secondary-black font-medium">Facebook</h2>
        </div>
      </div>
      </div>
   );
};

export default FindUs;