import React from 'react';
import { ScaleLoader } from 'react-spinners';

const Loder = () => {
   return (
      <div className='h-screen flex items-center justify-center text-indigo-500 font-bold'>
         <ScaleLoader size ={100}/>
      </div>
   );
};

export default Loder;