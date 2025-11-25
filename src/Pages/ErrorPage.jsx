import React from 'react';
import errorPhoto from '../assets/404.jpg'

const ErrorPage = () => {
   return (
      <div className='flex h-screen justify-self-center items-center w-full'> 

            <img className='w-full h-full' src={errorPhoto} alt="" />

      </div>
   );
};

export default ErrorPage;