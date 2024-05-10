import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

// "Full shelves, restless mind.",
// "Sunbeams dance on well-worn spines.",
// "Each book, a friend waiting to be held.",
// "A silent symphony of stories.",

const Slider = () => {
  return (
    <div className="relative">
      <div
        data-aos="fade-right"
        className="absolute top-[40%] left-12 md:left-20 w-[70%]  z-10"
      >
        <div className=" h-[40%] max-w-[900px] text-white p-5">
          <h1 className="text-2xl dark:text-gray-200 md:text-5xl uppercase font-bugrasimo ">
            {" "}
            <Typewriter
              words={[
                "Full shelves, restless mind.",
                "Sunbeams dance on well-worn spines.",
                "Each book, a friend waiting to be held.",
                "A silent symphony of stories.",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h1>
          <div className="flex gap-3">
           
            <Link
              to="/allspot"
              className=" mt-3 p-2 border font-bugrasimo border-blue-500 bg-violet-500 font-bold rounded-md text-lg"
            >
               Get Now
            </Link>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://source.unsplash.com/books-on-brown-wooden-shelf-2JIvboGLeho")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://source.unsplash.com/assorted-title-book-lot-eeSdJfLfx1A")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://source.unsplash.com/person-holding-pile-of-books-o0Qqw21-0NI")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://source.unsplash.com/assorted-title-book-lot-placed-on-white-wooden-shelf-f2Bi-VBs71M")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://source.unsplash.com/assorted-title-book-lot-beside-window-1J8k0qqUfYY")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://source.unsplash.com/shallow-focus-photography-of-books-lUaaKCUANVI")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://source.unsplash.com/shallow-focus-photography-of-stack-of-books-zvKx6ixUhWQ")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className={`relative flex items-center justify-left h-[80vh] object-cover bg-cover bg-[linear-gradient(45deg,rgba(3,7,18,0.5),rgba(3,7,18,0)),url("https://source.unsplash.com/book-lot-Bj7Pt0ZMBOk")] bg-center bg-no-repeat`}
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
