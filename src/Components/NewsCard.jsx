import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import { MdOutlineShare } from "react-icons/md";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  return (
    <>
      <div className="my-5 mx-14 px-4 pt-4">
        <div className="flex flex-row justify-between">
          <div className="flex gap-3 items-center">
            <img
              className="h-10 w-10 rounded-full cursor-pointer"
              src={news.author.img}
              alt=""
            />
            <div>
              <p className="text-primary-black font-medium cursor-pointer">
                {news.author.name}
              </p>
              <h5 className="text-secondary-black">{new Date(news.author.published_date).toLocaleString()}</h5>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <span className="text-2xl text-secondary-black cursor-pointer">
              <CiBookmark />
            </span>
            <span className="text-2xl text-secondary-black cursor-pointer">
              <MdOutlineShare />
            </span>
          </div>
        </div>
      </div>

      <div className="border-b border-r border-l  rounded-md border-gray-300 shadow-md mx-14 p-4">
        <h1 className="text-primary-black font-medium text-lg flex justify-center">
          {news.title}
        </h1>
        
         {/* img  */}
        <Link to = {`/news-details/${news.id}`} >
          <div className="flex justify-center">
            <img
            className="w-[518px] rounded-xl my-3"
            src={news.image_url}
            alt=""
          />
          </div>
          <p className="text-secondary-black text-lg">
            {news.details.length > 150
              ? news.details.slice(0, 150) + "..."
              : news.details}
          </p>
          <p className="text-komola mb-4 font-medium text-lg cursor-pointer">
            Read More
          </p>
        </Link>

        <hr className="text-gray-300" />

          <div className="flex justify-between">
            <div className="flex my-4 cursor-pointer text-komola gap-3 text-xl">
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
              <FaStar/>
            </div>
            <div className="flex gap-4 items-center text-lg text-secondary-black">
              <span>
                <FaEye />{" "}
              </span>
              <p>{news.total_view}</p>
            </div>
          </div>

      </div>
    </>
  );
};

export default NewsCard;
