import React from "react";
import CategoryCard from "./CategoryCard";
import { useEffect, useState } from "react";
import useAxiosSecure from "./../hooks/useAxiosSecure";

const Category = () => {
  const axiosSecure = useAxiosSecure();
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    axiosSecure.get("/categories").then((res) => {
      // console.log(res.data);
      setCategoryData(res.data);
    });
  }, []);
  return (
    <div className="mx-2">
      <h1 className="text-3xl lg:text-5xl font-bold font-bugrasimo text-center mt-7 my-3 text-gray-900 dark:text-gray-100">
        Category Section
      </h1>
      <p className="text-center text-black dark:text-gray-100">
        Find category wise book here.
      </p>
      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {categoryData.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Category;

/*
import axios from "axios";
import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const CountriesSection = () => {
  const [countryInfo, setCountryInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://nova-tourism-server.vercel.app/countries/data").then((res) => {
      // console.log(res.data);
      setCountryInfo(res.data);
      setLoading(false);
    });
  }, []);
  if(loading) {return <div className="w-full min-h-[calc(100vh-349px)] flex items-center justify-center"><span className="loading loading-spinner loading-lg"></span></div>;}
  return (
    <div className="mt-10">
      <div className="max-w-7xl mx-auto">
        <h1
          data-aos="fade-down"
          className="text-3xl lg:text-5xl font-bold font-bugrasimo text-center mt-7 my-3 text-gray-900 dark:text-gray-100"
        >
          Countries Section
        </h1>
        <p data-aos="fade-down" data-aos-delay={100} className="text-center text-black dark:text-gray-100">
          All the country wise favorite tourist spot here.
        </p>

        <div className="my-8 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3  gap-5 ">
          {countryInfo.map((country) => (
            <CountryCard key={country._id} country={country} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountriesSection;
*/
