import React from "react";
import Slider from "./../components/Slider";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Nova Travel</title>
      </Helmet>
      <Slider />
    </div>
  );
};

export default Home;
