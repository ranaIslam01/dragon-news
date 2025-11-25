import React from 'react';
import kids from '../../assets/kids.png'
import { CiCalendar } from 'react-icons/ci';
import man from '../../assets/man.png'
import senari from '../../assets/senari.png'

const LeftSideCard = () => {
   return (
      <div className='my-10 w-full'>

         {/* card 1 */}
         <div className='space-y-3 w-full shadow-md pb-10 px-4'>
            <img className='w-full' src={kids} alt="" />
            <h1 className='text-primary-black font-medium text-lg'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
            <div className='flex gap-5'>
               <p className='text-primary-black font-medium '>Sports</p>
               <p className='flex gap-3 text-secondary-black items-center'>
                  <span><CiCalendar/></span>
                  <li>Jan 4, 2022</li>
               </p>
            </div>
         </div>

         {/* card 2 */}
         <div className='space-y-3 w-full shadow-md pb-10 px-4'>
            <img className='w-full' src={man} alt="" />
            <h1 className='text-primary-black font-medium text-lg'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
            <div className='flex gap-5'>
               <p className='text-primary-black font-medium '>Sports</p>
               <p className='flex gap-3 text-secondary-black items-center'>
                  <span><CiCalendar/></span>
                  <li>Jan 4, 2022</li>
               </p>
            </div>
         </div>

         {/* card 3 */}
         <div className='space-y-3 w-full shadow-md pb-10 px-4'>
            <img className='w-full' src={senari} alt="" />
            <h1 className='text-primary-black font-medium text-lg'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
            <div className='flex gap-5'>
               <p className='text-primary-black font-medium '>Sports</p>
               <p className='flex gap-3 text-secondary-black items-center'>
                  <span><CiCalendar/></span>
                  <li>Jan 4, 2022</li>
               </p>
            </div>
         </div>


      </div>
   );
};

export default LeftSideCard;