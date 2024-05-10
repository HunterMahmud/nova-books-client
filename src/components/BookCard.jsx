import React from "react";
import { FaBook } from "react-icons/fa6";
import { TbCategory } from "react-icons/tb";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from 'react-router-dom';

const BookCard = ({ book, details }) => {
  // console.log(book);
  const { _id, author, bookName, bookUrl, category,ratings } = book;
  // console.log(ratings);
  return (
    <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg border border-violet-400/30 dark:bg-gray-800">
      <div className="w-full h-72 flex items-center justify-center">
        <img
          className="object-cover object-center w-48 h-72"
          src={bookUrl}
          alt={bookName}
        />
      </div>

      <div className="flex items-center px-6 py-3 bg-gray-100 text-gray-800 dark:text-white dark:bg-gray-600">
        <TbCategory />

        <h1 className="mx-3 text-lg text-gray-800 font-semibold dark:text-white">
          {category}
        </h1>
      </div>

      <div className="px-6 py-4">
        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
          {bookName}
        </h1>
        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <FaBook />

          <h1 className="px-2 text-sm">{author}</h1>
        </div>
        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
          <Rating
           style={{ maxWidth: 150 }}
            readOnly value={ratings} />
        </div>
        <div className="flex items-center justify-center my-3">
          {
            details ? <Link
            to={`/view-details/${_id}`}
            className="btn w-full btn-primary text-black dark:text-white"
            >View Details</Link>:
            <Link
           to={`/update-book/${_id}`}
           className="btn w-full btn-primary text-black dark:text-white"
           >Update</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default BookCard;
