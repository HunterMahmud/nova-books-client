import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { ScrollRestoration } from "react-router-dom";
import axios from "axios";
import useAuthProvider from "./../hooks/useAuthProvider";
import useAxiosSecure from './../hooks/useAxiosSecure';

const AddBooks = () => {
  const { user } = useAuthProvider();
  const axiosSecure = useAxiosSecure();
  const { displayName, email } = user;
  const defaultValues = {
    bookName: "",
    category: "",
    author: "",
    bookUrl: "",
    quantity: "",
    ratings: "",
    context: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    defaultValues: {
      ...defaultValues,
    },
  });

  const onSubmitBook = (data) => {
    const bookInfo = {
      ...data,
      quantity: parseInt(data.quantity),
      ratings: parseInt(data.ratings),
      publisherName: displayName || "",
      publisherEmail: email || "",
    };

    console.log(bookInfo);
    axiosSecure.post('/addBook', bookInfo)
    .then(res=> {
      console.log(res.data);
    })
    // axios
    //   .post("https://nova-tourism-server.vercel.app/addBook", bookInfo)
    //   .then((res) => {
    //     // console.log(res);
    //     if (res.data?.insertedId) {
    //       toast.success("Added Successfully");
    //       reset({
    //         ...defaultValues,
    //       });
    //     }
    //   });
  };

  // console.log(user);
  return (
    <div className="mx-2">
      <Helmet>
        <title>Add Book | BookShelf</title>
      </Helmet>
      <ScrollRestoration />
      <h1
        data-aos="fade-down"
        className="text-3xl lg:text-5xl font-bold font-bugrasimo text-center mt-7 my-3 dark:text-gray-100 text-gray-900"
      >
        Add Your Favorite Book Here
      </h1>
      <p
        data-aos="fade-down"
        data-aos-delay={100}
        className="text-center text-gray-800 dark:text-gray-200"
      >
        Fill the form to add your favorite book.
      </p>
      <div className="max-w-7xl mx-auto">
        <div>
          <section
            data-aos="fade-down"
            data-aos-delay={300}
            className="p-6 my-10 lg:col-span-3 rounded-md text-black dark:text-gray-200 dark:bg-gray-600 bg-card"
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
                  className="w-full dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
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
                  className="w-full dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                >
                  <option value="Novel">Novel</option>
                  <option value="Poetry">Poetry</option>
                  <option value="Thriller">Thriller</option>
                  <option value="History">History</option>
                  <option value="Drama">Drama</option>
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
                  className="w-full dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
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
                  className="w-full dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
                {errors?.bookUrl?.message && (
                  <span className="text-red-500">{errors.bookUrl.message}</span>
                )}
              </div>

              <div className="">
                <label htmlFor="quantity" className="text-sm">
                  Quantity of Book
                </label>
                <input
                  {...register("quantity", {
                    required: {
                      value: true,
                      message: "This field is required.",
                    },
                    min: {
                      value: 1,
                      message: "Not less than 1",
                    },
                  })}
                  id="quantity"
                  type="number"
                  required={true}
                  placeholder="Ex: 10"
                  className="w-full dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
                {errors?.quantity?.message && (
                  <span className="text-red-500">
                    {errors.quantity.message}
                  </span>
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
                        value: 1,
                        message: "Not less than 1",
                      },
                      max: {
                        value: 5,
                        message: "Not more than 5",
                      },
                      
                    }
                  )}
                  id="ratings"
                  type="number"
                  placeholder="Ex: 4"
                  className="w-full dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                />
                {errors?.ratings?.message && (
                  <span className="text-red-500">
                    {errors.ratings.message}
                  </span>
                )}
              </div>

              <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Book Context
                </label>
                <textarea
                  {...register("context", {
                    required: {
                      value: true,
                      message: "This field is required.",
                    },
                  })}
                  id="bio"
                  placeholder="Sample book context here..."
                  className="w-full dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 rounded-md p-2 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
                ></textarea>
                {errors?.context?.message && (
                  <span className="text-red-500">{errors.context.message}</span>
                )}
              </div>

              <div className="flex justify-end py-4">
                <button className="p-2 px-4 font-bugrasimo rounded-md text-gray-100 bg-violet-500 disabled:bg-violet-300 disabled:text-gray-400 disabled:cursor-not-allowed">
                  Add
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
