import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const BookDetails = () => {
  const bookInfo = useLoaderData();
  //   console.log(bookInfo);
  const {
    _id,
    bookName,
    author,
    bookUrl,
    context,
    category,
    quantity,
    ratings,
  } = bookInfo;
  return (
    <div className="max-w-[85rem] mx-auto my-10 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse md:flex-row gap-5">
        <div className="flow-root md:w-1/2 rounded-lg  py-3 shadow-sm">
          <dl className="-my-3 divide-y divide-gray-100 dark:divide-gray-200 text-sm">
            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 dark:text-gray-100">Book Name</dt>
              <dd className="text-gray-700 dark:text-gray-100 sm:col-span-2">{bookName}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 dark:text-gray-100">Author</dt>
              <dd className="text-gray-700 dark:text-gray-100 sm:col-span-2">{author}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 dark:text-gray-100">Category</dt>
              <dd className="text-gray-700 dark:text-gray-100 sm:col-span-2">{category}</dd>
            </div>
            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 dark:text-gray-100">Quantity</dt>
              <dd className="text-gray-700 dark:text-gray-100 sm:col-span-2">{quantity}</dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 dark:text-gray-100">Ratings</dt>
              <dd className="text-gray-700 dark:text-gray-100 sm:col-span-2">
                <div className="flex items-center text-gray-700 dark:text-gray-200">
                  <Rating style={{ maxWidth: 150 }} readOnly value={ratings} />
                </div>
              </dd>
            </div>

            <div className="grid grid-cols-1 gap-1 p-3  sm:grid-cols-3 sm:gap-4">
              <dt className="font-medium text-gray-900 dark:text-gray-100">Context Info</dt>
              <dd className="text-gray-700 dark:text-gray-100 sm:col-span-2">{context}</dd>
            </div>
          </dl>

          <Link to={`modal`} className="py-3 px-4 mt-7 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
            Borrow
          </Link>
        </div>

        <div className="relative ms-4 md:w-1/2 ">
          <img className="w-full rounded-md" src={bookUrl} alt={bookName} />
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
