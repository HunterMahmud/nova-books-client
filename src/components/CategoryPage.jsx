import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import BookCard from "./BookCard";
import { useParams } from 'react-router-dom';


const CategoryPage = () => {
  const axiosSecure = useAxiosSecure();
  const [allBooks, setAllBooks] = useState([]);
  const {categoryName: cate} = useParams();
//   console.log(cate);
  useEffect(() => {
    axiosSecure.get(`/category/${cate}`).then((res) => {
      // console.log(res.data);
      setAllBooks(res.data);
    });
  }, [cate]);
//   console.log(allBooks);
  return (
    <div className="my-10">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allBooks.map((book) => (
          <BookCard key={book._id} status={1} book={book} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
