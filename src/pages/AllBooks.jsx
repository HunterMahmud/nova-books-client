import React from "react";
import BookCard from "./../components/BookCard";
import { useEffect } from "react";
import useAxiosSecure from "./../hooks/useAxiosSecure";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ScrollRestoration } from "react-router-dom";

const AllBooks = () => {
  const axiosSecure = useAxiosSecure();
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    axiosSecure.get("/allBooks").then((res) => {
      // console.log(JSON.stringify(res.data));
      setAllBooks(res.data);
    });
  }, []);
  const againReload = () => {};
  return (
    <div className="my-10">
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
  );
};

export default AllBooks;
