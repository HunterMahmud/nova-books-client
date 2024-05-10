import React from "react";
import Slider from "./../components/Slider";
import { Helmet } from "react-helmet-async";
import Category from "../components/Category";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Nova Travel</title>
      </Helmet>
      <Slider />
      <Category/>
    </div>
  );
};

export default Home;
