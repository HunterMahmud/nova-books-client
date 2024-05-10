import React from 'react';
import CategoryCard from './CategoryCard';
import { useEffect, useState } from 'react';
import useAxiosSecure from './../hooks/useAxiosSecure';

const Category = () => {
    const axiosSecure = useAxiosSecure();
    const [categoryData, setCategoryData] = useState([]);
    useEffect(()=>{
        axiosSecure.get('/categories')
        .then(res=>{
            console.log(res.data);
            setCategoryData(res.data);
        })
    },[])
    return (
        <div className='my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
            {
                categoryData.map(category=> <CategoryCard key={category._id} category={category}/>)
            }
            
            
        </div>
    );
};

export default Category;