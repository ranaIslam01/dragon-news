import React from 'react';
import Login from '../Pages/Login';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
   return (
      <div className='bg-gray-100'>
         <div className='w-10/12 mx-auto py-4 h-screen '>
         <Navbar></Navbar>
         <main>
           <Outlet></Outlet>
         </main>
      </div>
      </div>
   );
};

export default AuthLayout;