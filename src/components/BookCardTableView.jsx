import React from "react";
import { Link } from 'react-router-dom';
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
const BookCardTableView = ({ book }) => {
//   console.log(book);
  const { _id, author, bookName, bookUrl, category, ratings } = book;
  return (
    <tr className="bg-white hover:bg-gray-50 dark:bg-neutral-900 dark:hover:bg-neutral-800 ">
      <td className="size-px whitespace-nowrap">
        <div className="block p-6">
          <div className="flex items-center gap-x-4">
            <img
              className="flex-shrink-0 size-[55px] rounded-lg"
              src={bookUrl}
              alt="Image Description"
            />
            <div>
              <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
                {bookName}
              </span>
            </div>
          </div>
        </div>
      </td>
      
      <td className="size-px whitespace-nowrap">
        <div className="block p-6">
          <div className="flex items-center gap-x-3">
            <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
            {category}
            </span>
          </div>
        </div>
      </td>
      <td className="size-px whitespace-nowrap">
        <div className="block p-6">
          <div className="flex items-center gap-x-3">
            <span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
              {author}
            </span>
          </div>
        </div>
      </td>

      <td className="size-px ">
        <div className="block p-6">
        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
              <Rating style={{ maxWidth: 120 }} readOnly value={ratings} />
            </div>
        </div>
      </td>

      <td className="size-px whitespace-nowrap">
        <Link to={`/update-book/${_id}`} className="block p-6">
          <span className="py-1 px-2.5 inline-flex items-center gap-x-1 text-base font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
           
            Update
          </span>
        </Link>
      </td>
    </tr>
  );
};

export default BookCardTableView;
