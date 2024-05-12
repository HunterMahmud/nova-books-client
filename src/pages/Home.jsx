import React from "react";
import Slider from "./../components/Slider";
import { Helmet } from "react-helmet-async";
import Category from "../components/Category";
import FAQ from "../components/FAQ";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Nova Travel</title>
      </Helmet>
      <Slider />
      <Category/>
      <FAQ/>
      <ContactUs/>
    </div>
  );
};

export default Home;
