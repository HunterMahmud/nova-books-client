import React from 'react';
import { useEffect, useState } from 'react';
import useAxiosSecure from './../hooks/useAxiosSecure';
import useAuthProvider from './../hooks/useAuthProvider';
import BookCard from './../components/BookCard';

const BorrowedBooks = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuthProvider();
    const [borrowBook, setBorrowBook] = useState([]);
    console.log(user);
    useEffect(()=> {
        axiosSecure.get(`/borrow/${user.email}`)
        .then(res=> {
            // console.log(res.data);
            setBorrowBook(res.data);
        })
    },[])   
    console.log(borrowBook);
    return (
        <div>
            this is borrowed page
            {
                borrowBook.map(book => <BookCard key={book._id} book={book} status={3}/>)
            }
    </div>
    );
};

export default BorrowedBooks;