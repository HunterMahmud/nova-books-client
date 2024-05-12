import React from "react";
import BookCard from "./../components/BookCard";
import { useEffect } from "react";
import useAxiosSecure from "./../hooks/useAxiosSecure";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ScrollRestoration } from "react-router-dom";
import { toast } from "react-toastify";
import BookCardTableView from "../components/BookCardTableView";

const AllBooks = () => {
  const axiosSecure = useAxiosSecure();
  const [allBooks, setAllBooks] = useState([]);
  const [viewControl, setViewControl] = useState("card");
  useEffect(() => {
    axiosSecure.get(`/allBooks`).then((res) => {
      // console.log(JSON.stringify(res.data));
      setAllBooks(res.data);
    });
  }, []);
  const againReload = () => {};
  const handleShowAvailableBook = () => {
    // console.log('clicked');
    axiosSecure.get(`/allBooks?quantity=0`).then((res) => {
      // console.log(res.data);
      setAllBooks(res.data);
      toast.info("Showing available books only");
    });
  };
  return (
    <div className="my-10 mx-2">
      <Helmet>
        <title>All Book | BookShelf</title>
      </Helmet>
      <ScrollRestoration />
      <h1
        data-aos="fade-down"
        className="text-3xl mb-10 lg:text-5xl font-bold font-bugrasimo text-center mt-7 my-3 dark:text-gray-100 text-gray-900"
      >
        Find your favorite books here
      </h1>
      <div className="">
        <div className="mb-5 flex justify-between">
          <button
            onClick={handleShowAvailableBook}
            className="btn hover:bg-violet-700 bg-violet-600 text-white rounded-lg"
          >
            Show Available Books
          </button>
          <div className="">
            <select
              id="dropdown"
              required={true}
              onChange={(event) => setViewControl(event.target.value)}
              value={viewControl}
              type="text"
              className="w-full dark:bg-gray-700 dark:placeholder:text-gray-300 dark:text-gray-200 placeholder:text-gray-700 rounded-md p-2.5 focus:ring focus:ring-opacity-75 text-black bg-gray-200 border-2 border-gray-400"
            >
              <option value="card">Card View</option>
              <option value="table">Table View</option>
            </select>
          </div>
        </div>

        {viewControl == "card" ? (
          <div className="mx-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 col-auto">
            {allBooks.map((book) => (
              <BookCard
                key={book._id}
                againReload={againReload}
                status={2}
                book={book}
              />
            ))}
          </div>
          </div>
        ) : (
          <div className=" py-10 mx-auto">
            <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                  <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                      <thead className="bg-gray-50 dark:bg-neutral-800">
                        <tr>
                          <th scope="col" className="px-6 py-3 text-start">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                Image {"&"} Book Name
                              </span>
                            </div>
                          </th>

                          <th scope="col" className="px-6 py-3 text-start">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                Category
                              </span>
                            </div>
                          </th>

                          <th scope="col" className="px-6 py-3 text-start">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                Author
                              </span>
                            </div>
                          </th>

                          <th scope="col" className="px-6 py-3 text-start">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                Ratings
                              </span>
                            </div>
                          </th>

                          <th scope="col" className="px-6 py-3 text-start">
                            <div className="flex items-center gap-x-2">
                              <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                                Action
                              </span>
                            </div>
                          </th>
                        </tr>
                      </thead>

                      <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                        {allBooks.map((book) => (
                          <BookCardTableView key={book._id} book={book} />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
