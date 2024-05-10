import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category: cate }) => {
//   console.log(cate);
  const { category, topics } = cate;
  return (
    <Link
      to={`/category/${category}`}
      className="hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] dark:shadow-gray-700/25"
    >
      <div className="rounded-[10px] bg-white p-4  sm:p-6 dark:bg-gray-600">
        
          <h3 className="mt-0.5 text-xl font-medium text-gray-900 dark:text-white">
            {category}
          </h3>
        

        <div className="mt-4 flex flex-col gap-1">
         {
            topics.map((topic, i)=>  <span key={i} className=" rounded-full bg-purple-200 px-2.5 py-0.5 text-xs text-purple-600 dark:bg-purple-600 dark:text-purple-100">
            {topic}
          </span>)
         }

      
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
