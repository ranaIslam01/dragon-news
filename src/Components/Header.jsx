import React from 'react';
import logo from "../assets/logo.png";
import { format } from 'date-fns';

const Header = () => {
   return (
      <div className=''>
        <header className='flex justify-center items-center gap-4 flex-col mt-10'>
            <img className='w-[400px]' src={logo} alt="network error" />
            <p className='text-b-100'>Journalism Without Fear or Favour</p>
            <p className='font-medium text-secondary-black'>{format(new Date(), "EEEE , MMMM MM , yyyy")}</p>
        </header>
      </div>
   );
};

export default Header;