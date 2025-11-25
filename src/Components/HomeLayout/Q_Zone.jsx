import React from 'react';
import swiming from '../../assets/swimming.png'
import classes from '../../assets/class.png';
import palyground from '../../assets/playground.png'
import programingHero from '../../assets/bg.png'


const Q_Zone = () => {
   return (
      <div>
         <h2 className="text-primary-black font-semibold text-lg mt-10 mb-4">Q Zone</h2>
         <div className='grid grid-cols-1 gap-8 w-full'>
            <div className='border border-gray-200 rounded-lg flex justify-center '>
               <img className='w-full' src={swiming} alt="" />
            </div>
            <div className='border border-gray-200 rounded-lg flex justify-center'>
               <img className='w-full' src={classes} alt="" />
            </div>
            <div className='border border-gray-200 rounded-lg flex justify-center'>
               <img className='w-full' src={palyground} alt="" />
            </div>
            <div className='w-full'>
               <img className='w-full rounded-lg' src= {programingHero} alt="" />
            </div>
         </div>

      </div>
   );
};

export default Q_Zone;