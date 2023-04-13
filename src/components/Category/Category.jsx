import React, { useEffect, useState } from 'react';
import CategoryData from './CategoryData';


const Category = () => {
 
  const [categories, setCategories] = useState([])
  
  useEffect(() => {
    fetch('categories.json')
      .then(res => res.json())
    .then(data=>setCategories(data))
  },[])

  
  return (
    <div className="mt-28">
      <h1 className="text-4xl text-center text-bold md:font-extrabold md:text-7xl">Job Category List</h1>
      <p className="mt-6 font-medium text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="items-center justify-around gap-1 mt-8 md:grid md:grid-cols-2 lg:flex">
        {categories.map((category) => (
          <CategoryData category={category} key={category.id}></CategoryData>
        ))}
      </div>
    </div>
  );
};



export default Category;