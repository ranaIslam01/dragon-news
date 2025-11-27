import React from "react";
import Career from "../Components/Career";
import Header from "../Components/Header";
import RightAside from "../Components/HomeLayout/RightAside";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const CareerPage = () => {
  return (
    <div className="w-10/12 mx-auto">
      <div>
        <Header></Header>
      </div>
      <div>
        <Navbar></Navbar>
      </div>

      <div className="grid grid-cols-10 gap-6">
        <div className="col-span-7">
          <Career></Career>
        </div>
        <div className="col-span-3 h-[165vh] overflow-y-auto pr-4">
          <RightAside></RightAside>
        </div>
      </div>
      <div className="">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default CareerPage;
