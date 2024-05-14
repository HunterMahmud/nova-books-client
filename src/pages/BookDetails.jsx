import React, { useEffect, useState } from "react";
import {
  Link,
  ScrollRestoration,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "@smastrom/react-rating/style.css";
import useAxiosSecure from "./../hooks/useAxiosSecure";
import useAuthProvider from "./../hooks/useAuthProvider";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const BookDetails = () => {
  // const loadedBookInfo = useLoaderData();
  const { id } = useParams();
  const [bookInfo, setBookInfo] = useState([]);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthProvider();
  const { email, displayName } = user;
  // console.log(user);
  //   console.log(bookInfo);
  const refetch = () => {
    axiosSecure.get(`books/${id}`).then((res) => {
      setBookInfo(res.data);
    });
  };
  useEffect(() => {
    refetch();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const [selectedDate, setSelectedDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow;
  });

  const minimumDate = new Date();
  minimumDate.setDate(minimumDate.getDate() + 1);

  const {
    _id,
    bookName,
    author,
    bookUrl,
    context,
    category,
    quantity,
    short_desc,
    ratings,
  } = bookInfo;
  const handleSubmit = () => {
    // console.log(selectedDate);
    if (selectedDate) {
      const info = {
        borrowerEmail: email,
        borrowerName: displayName,
        borrowedDate: new Date(),
        returnDate: selectedDate,
        ...bookInfo,
      };
      const {
        borrowerEmail,
        borrowerName,
        borrowedDate,
        returnDate,
        _id,
        author,
        bookName,
        bookUrl,
        category,
        short_desc,
        context,
        publisherEmail,
        quantity,
        ratings,
      } = info;
      const borrowInfo = {
        borrowerEmail,
        borrowerName,
        borrowedDate,
        returnDate,
        id: _id,
        author,
        bookName,
        bookUrl,
        category,
        short_desc,
        context,
        publisherEmail,
        quantity,
        ratings,
      };
      // console.log(borrowInfo);
      if (borrowInfo.quantity > 0) {
        axiosSecure.post(`/borrow/${_id}`, borrowInfo).then((res) => {
          // console.log(res.data);
          if (res.data?.exist) {
            toast.error("Already borrowed");
          }
          if (res?.data?.insertedId) {
            toast.success("Borrow Success");

            axiosSecure
              .patch(`/books/${_id}`, { operation: "-" })
              .then((res) => {
                // console.log(res.data);
                if (res?.data?._id) {
                  // console.log(_id, borrowInfo);
                  refetch();
                }
              });
          }
        });
      } else {
        toast.error("Not available");
      }
    }

    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
  };
  if (bookInfo.length == 0) {
    return (
      <div className="w-full bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 min-h-[calc(100vh-349px)] flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  return (
    <div className="max-w-[85rem] mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>{bookName} Details | BookShelf</title>
      </Helmet>
      <ScrollRestoration />
      <h1
        data-aos="fade-down"
        className="text-3xl lg:text-5xl font-bold font-bugrasimo text-center mt-7 my-3 dark:text-gray-100 text-gray-900"
      >
        {bookName}
      </h1>
      <p
        data-aos="fade-down"
        data-aos-delay={100}
        className="text-center mb-10 text-gray-800 dark:text-gray-200"
      >
        Details about book
      </p>
      <div className="flex flex-col-reverse md:flex-row gap-5">
        <div className="flow-root md:w-1/2 rounded-lg  py-3 shadow-sm">
          <dl className="-my-3 divide-y divide-gray-100 dark:divide-gray-200 text-sm">
            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 dark:text-gray-100">
                Book Name
              </dt>
              <dd className="text-gray-700 dark:text-gray-100 sm:col-span-2">
                {bookName}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 dark:text-gray-100">
                Author
              </dt>
              <dd className="text-gray-700 dark:text-gray-100 sm:col-span-2">
                {author}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 dark:text-gray-100">
                Category
              </dt>
              <dd className="text-gray-700 dark:text-gray-100 sm:col-span-2">
                {category}
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 dark:text-gray-100">
                Quantity
              </dt>
              <dd className="text-gray-700 dark:text-gray-100 sm:col-span-2">
                {quantity}
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 dark:text-gray-100">
                Ratings
              </dt>
              <dd className="text-gray-700 dark:text-gray-100 sm:col-span-2">
                <div className="flex items-center text-gray-700 dark:text-gray-200">
                  <Rating style={{ maxWidth: 150 }} readOnly value={ratings} />
                </div>
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 dark:text-gray-100">
                Short Description
              </dt>
              <dd className="text-gray-700 dark:text-gray-100 sm:col-span-2">
                {short_desc}
              </dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 dark:text-gray-100">
                Book Context
              </dt>
              <dd className="text-gray-700 dark:text-gray-100 sm:col-span-2">
                {context}
              </dd>
            </div>
          </dl>

          <div className="mt-5">
            <button
              disabled={quantity > 0 ? false : true}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:bg-violet-300 disabled:cursor-not-allowed"
              onClick={() => setIsOpen(true)}
            >
              Borrow
            </button>

            {isOpen && (
              <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-700 bg-opacity-50 z-10">
                <div className="bg-white rounded-lg shadow dark:bg-gray-700 p-8">
                  <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
                    Return Date
                  </h2>
                  <div className="mb-4">
                    <label
                      htmlFor="datePicker"
                      className="block mb-2 text-gray-800 dark:text-gray-200"
                    >
                      Select Date:
                    </label>
                    <DatePicker
                      id="datePicker"
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      minDate={minimumDate}
                      required
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
                      onClick={handleCancel}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="relative ms-4 md:w-1/2 ">
          <img className="w-full rounded-md" src={bookUrl} alt={bookName} />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
