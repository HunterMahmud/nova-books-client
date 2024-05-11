import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category: cate }) => {
  // console.log(cate);
  const { category, img } = cate;
  return (
    <div className="mx-2">
      <div className="flex flex-col max-w-lg mx-auto space-y-6 overflow-hidden rounded-md border border-gray-100/25 hover:shadow-[20px,20px,20px,5px,rgba(255,250,255,0.01)] shadow-xl bg-main text-black">
        <div
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url('${img}')`,
          }}
          className={`flex flex-col gap-3 items-center justify-center text-white bg-center bg-no-repeat bg-cover object-cover transition-transform  duration-1000 transform hover:scale-105 bg-white overflow-hidden h-[300px]`}
        >
          <h1 className="text-2xl font-bugrasimo">{category}</h1>
          <Link to={`/category/${category}`} className="rounded-lg text-gray-100 px-2.5 py-0.5 text-lg bg-green-600">
            See More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;

/*
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const CountryCard = ({ country }) => {
  // console.log(country.photo);
  const photo = `bg-[linear-gradient(45deg,rgba(0,0,0,0.6),rgba(0,0,0,0.2)),url('${country.photo}')]`;
  // console.log(photo);
  // console.log(spot);

  //   const {
  //     _id,
  //     averageCost,
  //     countryName,
  //     location,
  //     photoURL,
  //     seasonality,
  //     spotName,
  //     totalVisitor,
  //     travelTime,
  //   } = spot;
  // if(!_id) console.log(spotName);
  return (
    <div  data-aos="fade-up" className="mx-2">
      <div className="flex flex-col max-w-lg mx-auto space-y-6 overflow-hidden rounded-md border border-gray-100/25 hover:shadow-[20px,20px,20px,5px,rgba(255,250,255,0.01)] shadow-xl bg-main text-black">
        // { start  }

        <Link
          to={`/${country._id}`}
          style={{
            backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)), url('${country.photo}')`,
          }}
          className={`flex flex-col gap-3 items-center justify-center text-white bg-center bg-no-repeat bg-cover object-cover transition-transform  duration-1000 transform hover:scale-105 bg-white overflow-hidden h-[300px]`}
        >
          <h1 className="text-2xl font-bugrasimo">{country._id}</h1>
          <p className="text-sm font-poppins w-[90%] text-center">
            {country.desc}
          </p>
        </Link>
        //  ends here 
      </div>
    </div>
  );
};

*/

/*
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

*/
