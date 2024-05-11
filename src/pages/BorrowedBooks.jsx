import React from "react";
import { useEffect, useState } from "react";
import useAxiosSecure from "./../hooks/useAxiosSecure";
import useAuthProvider from "./../hooks/useAuthProvider";
import BookCard from "./../components/BookCard";

const BorrowedBooks = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuthProvider();
  const [borrowBook, setBorrowBook] = useState([]);
  // console.log(user);
  const againReload = () => {
    axiosSecure.get(`/borrow/${user.email}`).then((res) => {
      // console.log(res.data);
      setBorrowBook(res.data);
    });
  };
  useEffect(() => {
    againReload();
  }, []);
    // console.log(borrowBook);
  if (borrowBook.length==0) return <div className="flex justify-center items-center  h-[calc(100vh-248.4px)]">
    <h2 className="text-xl font-bugrasimo">No data available</h2>
  </div>;
  return (
    <div className="my-10">
      <h1>borrowed page</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {borrowBook.map((book) => (
          <BookCard
            key={book._id}
            againReload={againReload}
            book={book}
            status={3}
          />
        ))}
      </div>
    </div>
  );
};

export default BorrowedBooks;
