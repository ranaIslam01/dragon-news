import React, { use } from "react";
import { NavLink } from "react-router-dom";

const categoriPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoriPromise);
  
  return (
    <div className="">
      <h1 className="text-primary-black font-bold text-lg">
        All Categories ({categories.length})
      </h1>
      <div className="flex flex-col gap- mt-5">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.id}`}
            key={category.id}
            className="text-secondary-black py-3 text-center rounded-md"
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
