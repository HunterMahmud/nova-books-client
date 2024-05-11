import React from "react";
import { FaBook } from "react-icons/fa6";
import { TbCategory } from "react-icons/tb";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Link } from "react-router-dom";
import useAxiosSecure from './../hooks/useAxiosSecure';
import { toast } from "react-toastify";

const BookCard = ({ book, status ,againReload }) => {
  // console.log(book);
  const axiosSecure = useAxiosSecure();
  const { _id, author, bookName, bookUrl, category, ratings } = book;
  // console.log(ratings);
  const handleReturn = (id) => {
    // console.log(id);
    axiosSecure.delete(`/borrow/${id}`)
    .then(res=> {
      console.log(res.data);
      if(res.data?.deletedCount>0){
        axiosSecure.patch(`/books/${book.id}`,{operation:'+'})
        .then(res=> {
          // console.log(res.data);
          againReload();
          toast.success("Return success")
        })
      }
    })
  }

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

      <div className="px-6 flex flex-col justify-between">
        <h1 className="text-xl my-2 font-semibold text-gray-800 dark:text-white">
          {bookName}
        </h1>
        {status == 3 ? (
          <>
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              <span className="font-semibold">Borrow Date:</span>
              <h1 className="px-2 text-sm">
                 {new Date(book.borrowedDate).toLocaleDateString()}
              </h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              <span className="font-semibold">Return Date:</span>
              <h1 className="px-2 text-sm">
                {new Date(book.returnDate).toLocaleDateString()}
              </h1>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              <FaBook />

              <h1 className="px-2 text-sm">{author}</h1>
            </div>
            <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              <Rating style={{ maxWidth: 150 }} readOnly value={ratings} />
            </div>
          </>
        )}

        <div className="flex items-center justify-center my-3">
          {status == 1 && (
            <Link
              to={`/view-details/${_id}`}
              className="btn w-full btn-primary text-black dark:text-white"
            >
              View Details
            </Link>
          )}
          {status == 2 && (
            <Link
              to={`/update-book/${_id}`}
              className="btn w-full btn-primary text-black dark:text-white"
            >
              Update
            </Link>
          )}
          {status == 3 && (
            <button
            onClick={() => handleReturn(_id)}
            className="btn w-full btn-primary text-black dark:text-white">
              Return
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookCard;
