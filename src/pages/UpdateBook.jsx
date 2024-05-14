import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import {
  ScrollRestoration,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import axios from "axios";
import useAuthProvider from "../hooks/useAuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";

const UpdateBook = () => {
  const axiosSecure = useAxiosSecure();
  const bookData = useLoaderData();
  const navigate = useNavigate();
// console.log(bookData);
  const {
    _id,
    bookName,
    category,
    author,
    bookUrl,
    ratings,
  } = bookData;

  let defaultValues = {
    bookName,
    category,
    author,
    bookUrl,
    ratings,
  };
  // console.log(defaultValues);
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors, isDirty },
  } = useForm({
    defaultValues: {
      ...defaultValues,
    },
  });

  const onSubmitBook = (data) => {
    const bookInfo = {
      ...data,
      ratings: parseFloat(data.ratings),
    };

    // console.log(bookInfo);
    axiosSecure.patch(`/updatebook/${_id}`, bookInfo).then((res) => {
      //   console.log(res.data);
      if (res?.data?.modifiedCount > 0) {
        toast.success("Modified Successfuly");
        navigate("/all-books");
      } else {
        toast.error("Can't update.");
      }
    });
   
  };

  // console.log(user);
  return (
    <div className="mx-2">
      <Helmet>
        <title>Update Book | BookShelf</title>
      </Helmet>
      <ScrollRestoration />
      <h1
        data-aos="fade-down"
        className="text-3xl lg:text-5xl font-bold font-bugrasimo text-center mt-7 my-3 dark:text-gray-100 text-gray-900"
      >
        Update Your Favorite Book Here
      </h1>
      <p
        data-aos="fade-down"
        data-aos-delay={100}
        className="text-center text-gray-800 dark:text-gray-100"
      >
        Fill the form to update your favorite book.
      </p>
      <div className="max-w-7xl mx-auto">
        <div>
          <section
            data-aos="fade-down"
            data-aos-delay={300}
            className="p-6 my-10 lg:col-span-3 rounded-md text-black dark:text-gray-100 dark:bg-gray-900 bg-white border border-gray-200 dark:border-gray-800"
          >
            <form
              onSubmit={handleSubmit(onSubmitBook)}
              className="grid lg:grid-cols-2 lg:gap-3 mx-auto"
            >
              <div className="">
                <label htmlFor="bookName" className="text-sm">
                  Book Name
                </label>
                <input
                  {...register("bookName", {
                    required: {
                      value: true,
                      message: "This field is required.",
                    },
                  })}
                  id="bookName"
                  type="text"
                  required={true}
                  placeholder="Ex: The Designer's Cookbook"
                  className="w-full dark:bg-gray-900 dark:placeholder:text-gray-100 dark:text-gray-100 placeholder:text-gray-900 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />{" "}
                {errors?.bookName?.message && (
                  <span className="text-red-500">
                    {errors.bookName.message}
                  </span>
                )}
              </div>

              <div className="">
                <label htmlFor="category" className="text-sm">
                  Book Category
                </label>

                <select
                  {...register("category", {
                    required: {
                      value: true,
                      message: "This field is required.",
                    },
                  })}
                  id="category"
                  required={true}
                  type="text"
                  className="w-full dark:bg-gray-900 dark:placeholder:text-gray-100 dark:text-gray-100 placeholder:text-gray-900 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                >
                  <option value="Kids">Kids</option>
                  <option value="Comics">Comics</option>
                  <option value="History">History</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                </select>
              </div>
              <div className="">
                <label htmlFor="author" className="text-sm">
                  Author Name
                </label>
                <input
                  {...register("author", {
                    required: {
                      value: true,
                      message: "This field is required.",
                    },
                  })}
                  id="author"
                  type="text"
                  required={true}
                  placeholder="Ex: Jim Richardson"
                  className="w-full dark:bg-gray-900 dark:placeholder:text-gray-100 dark:text-gray-100 placeholder:text-gray-900 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
                {errors?.author?.message && (
                  <span className="text-red-500">{errors.author.message}</span>
                )}
              </div>

              <div className="">
                <label htmlFor="bookUrl" className="text-sm">
                  Book Photo URL
                </label>
                <input
                  {...register("bookUrl", {
                    required: {
                      value: true,
                      message: "This field is required.",
                    },
                  })}
                  id="bookUrl"
                  type="url"
                  required={true}
                  placeholder="Ex: https://www.image.com/img.jpg"
                  className="w-full dark:bg-gray-900 dark:placeholder:text-gray-100 dark:text-gray-100 placeholder:text-gray-900 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
                {errors?.bookUrl?.message && (
                  <span className="text-red-500">{errors.bookUrl.message}</span>
                )}
              </div>

              <div className="">
                <label htmlFor="ratings" className="text-sm">
                  Ratings
                </label>
                <input
                  {...register(
                    "ratings",

                    {
                      required: {
                        value: true,
                        message: "This field is required.",
                      },
                      min: {
                        value: 0.1,
                        message: "Not less than 0.1",
                      },
                      max: {
                        value: 5,
                        message: "Not more than 5",
                      },
                    }
                  )}
                  id="ratings"
                  min="0.1"
                  max="5"
                  step="0.1"
                  type="number"
                  placeholder="Ex: 4"
                  className="w-full dark:bg-gray-900 dark:placeholder:text-gray-100 dark:text-gray-100 placeholder:text-gray-900 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
                {errors?.ratings?.message && (
                  <span className="text-red-500">{errors.ratings.message}</span>
                )}
              </div>

           

              <div className="flex justify-end py-4">
                <button className="p-2 px-4 font-bugrasimo rounded-md text-gray-100 bg-violet-500 disabled:bg-violet-300 disabled:text-gray-400 disabled:cursor-not-allowed">
                  Update
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UpdateBook;
