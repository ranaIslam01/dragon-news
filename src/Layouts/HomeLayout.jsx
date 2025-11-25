import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import Navbar from '../Components/Navbar';
import LeftAside from '../Components/HomeLayout/LeftAside';
import RightAside from '../Components/HomeLayout/RightAside';
import Loder from '../Components/Loder';

const HomeLayout = () => {

   const {state} = useNavigation()
   
   return (
      <div className="w-10/12 mx-auto">

         {/* HEADER */}
         <header>
            <Header />
            <section>
               <LatestNews />
            </section>
            <nav>
               <Navbar />
            </nav>
         </header>

         {/* MAIN */}
         <main className="grid grid-cols-12 h-[90vh] my-10 gap-6">

            {/* LEFT SIDEBAR — scroll */}
            <aside className="col-span-3 h-[90vh] overflow-y-auto pr-3">
               <LeftAside />
            </aside>

            {/* MIDDLE — no scroll */}
            <section className="col-span-6 overflow-y-auto max-h-[calc(100vh-HEADER_HEIGHT)]">
              {state === "loading" ? <Loder /> : <Outlet />}
            </section>

            {/* RIGHT SIDEBAR — scroll */}
            <aside className="col-span-3 h-[90vh] overflow-y-auto pr-4">
               <RightAside />
            </aside>

         </main>
      </div>
   );
};

export default HomeLayout;
