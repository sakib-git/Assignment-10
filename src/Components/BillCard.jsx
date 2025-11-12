import React from 'react';
import { NavLink } from 'react-router';

const BillCard = ({bill}) => {
 const  {image,title,category, location,amount,date, _id} = bill
  return (
<div className="border rounded-2xl shadow-md p-4 flex flex-col justify-between ">
  <img src={image} alt={title} className="rounded-lg h-48 w-full object-cover" />

  <div className="mt-3 space-y-1">
    <h2 className="text-xl font-semibold">{title}</h2>
    <p className="text-gray-500 text-sm">Category: {category}</p>
    <p className="text-gray-500 text-sm">Location: {location}</p>
    <p className="text-gray-700 font-bold">৳ {amount}</p>
    <p className="text-gray-700 font-bold"> {date}</p>
  </div>


  <NavLink to={`/details/${_id}`} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all text-center">
 See Details
  </NavLink>
</div>

  );
};

export default BillCard;