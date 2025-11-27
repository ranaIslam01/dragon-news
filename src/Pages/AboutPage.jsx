import React from "react";
import About from "../Components/About";
import Header from "../Components/Header";
import RightAside from "../Components/HomeLayout/RightAside";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function AboutPage() {
  return (
    <div className="w-10/12 mx-auto ">
      <Header></Header>
      <div>
         <Navbar></Navbar>
      </div>
      <div className="grid grid-cols-11 gap-6 h-screen justify-center">
        <div className="col-span-8">
         <About></About>
        </div>
        <div className="col-span-3 overflow-y-auto pr-4 ">
         <RightAside></RightAside>
        </div>
      </div>
      <div>
         <Footer></Footer>
      </div>
    </div>
  );
}
