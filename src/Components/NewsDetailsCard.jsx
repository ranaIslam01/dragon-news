import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsDetailsCard = ({news}) => {

   return (
      <div>
         <div className='flex flex-col items-start gap-6 p-8 mb-30'>
            <div className='w-full'>
               <img className='w-full rounded-2xl' src={news.image_url} alt="" />
            </div>
            <div className='flex gap-3 flex-col'>
               <h2 className='text-primary-black font-semibold text-xl'>{news.title}</h2>
               <p className='text-lg text-secondary-black'>{news.details}</p>
            </div>
            <button className='flex gap-4 px-6 py-2 items-center bg-red text-white font-bold text-base rounded-lg cursor-pointer'>
               <span><FaArrowLeft/></span>
               <Link to = {`/category/${news.category_id}`}>All news in this category</Link>
            </button>
         </div>
         
      </div>
   );
};

export default NewsDetailsCard;