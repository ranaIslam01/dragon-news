import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "../Components/NewsCard";

const CatagoryNews = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [categoryNews, setCategoryNews] = useState([]);

  useEffect(() => {
    if (id == "0") {
      setCategoryNews(data);
      return;
    } else if (id == "1") {
      const filteredNews = data.filter(
        (news) => news.others.is_today_pick == true
      );
      setCategoryNews(filteredNews);
    } else {
      const filteredNews = data.filter((news) => news.category_id == id);
      setCategoryNews(filteredNews);
    }
  }, [id, data]);

  return (
    <div className="sticky top-0 bg-white z-50">
      <h1 className="text-primary-black font-semibold text-lg text-center">Total news ({categoryNews.length}) found</h1>
      <div>
        {categoryNews.map((news) => (
          <NewsCard key={news.id} news={news}></NewsCard>
        ))}
      </div>
    </div>
  );
};

export default CatagoryNews;
