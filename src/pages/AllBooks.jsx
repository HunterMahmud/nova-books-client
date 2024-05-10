import React from "react";
import BookCard from "./../components/BookCard";
import { useEffect } from "react";
import useAxiosSecure from "./../hooks/useAxiosSecure";
import { useState } from "react";
import axios from "axios";

const AllBooks = () => {
  const axiosSecure = useAxiosSecure();
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    axiosSecure.get("/allBooks").then((res) => {
      // console.log(res.data);
      setAllBooks(res.data);
    });
  }, []);
//   console.log(allBooks);
  return (
    <div className="my-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allBooks.map((book) => (
          <BookCard key={book._id} details={false} book={book} />
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
