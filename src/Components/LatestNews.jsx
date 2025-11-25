import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className=" flex items-center gap-4 py-6 w-12/12">
      <p className="text-white bg-red py-3 px-6">Latest</p>
      <div>
        <Marquee className="flex gap-6" pauseOnHover = {true}>
          <p className="text-primary-black font-bold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p className="text-primary-black font-bold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p className="text-primary-black font-bold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default LatestNews;
