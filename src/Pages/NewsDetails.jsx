import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAside from '../Components/HomeLayout/RightAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router-dom';

const NewsDetails = () => {
   const data = useLoaderData();
   const {id} = useParams();
   const [ news , setNews] = useState({});

   useEffect(() => {
      const newsDetails = data.find(singleNews => singleNews.id == id)
      setNews(newsDetails);
   }, [data,id])

   return (
      <div className='w-10/12 mx-auto '>
         <header>
            <Header></Header>
         </header>
         <main className='grid gap-5 grid-cols-10 my-10 h-screen'>
            {/* left section  */}
            <section className='col-span-7'>
               <h1 className='text-primary-black font-bold text-lg ml-10'>Dragon News</h1>
               <NewsDetailsCard news = {news} ></NewsDetailsCard>
            </section>
            {/* Right section  */}
            <section className='col-span-3 h-auto overflow-y-auto pr-4'>
               <RightAside></RightAside>
            </section>
         </main>
      </div>
   );
};

export default NewsDetails;