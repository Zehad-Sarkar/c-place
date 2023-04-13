import React from 'react';

const CategoryData = ({ category }) => {
  const { name, picture, id, jobs_available } = category;
  return (
    <div className='m-2 shadow-sm h-52 card'>
      <img className='rounded-md w-52' src={category.picture} alt="" />
      <h4 className='text-2xl font-medium'>{name}</h4>
      <p>{jobs_available}</p>
    </div>
  );
};

export default CategoryData;