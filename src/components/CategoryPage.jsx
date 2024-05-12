import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import BookCard from "./BookCard";
import { ScrollRestoration, useParams } from 'react-router-dom';
import { Helmet } from "react-helmet-async";


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
const againReload = ()=> {

}
  return (
    <div className="my-10 mx-2">
      <Helmet>
        <title>{cate} Book | BookShelf</title>
      </Helmet>
      <ScrollRestoration />
      <h1
        data-aos="fade-down"
        className="text-3xl mb-10 lg:text-5xl font-bold font-bugrasimo text-center mt-7 my-3 dark:text-gray-100 text-gray-900"
      >
        {cate} category books here
      </h1>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allBooks.map((book) => (
          <BookCard key={book._id} againReload={againReload} status={1} book={book} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
