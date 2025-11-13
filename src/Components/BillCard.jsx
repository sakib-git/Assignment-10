import React from 'react';
import { NavLink } from 'react-router';

const BillCard = ({bill}) => {
 const  {image,title,category, location,amount,date, _id} = bill
  return (
<div className="bg-[var(--navbar-bg)] border text-[var(--border-card)] rounded-2xl shadow-md p-4 flex flex-col justify-between ">
  <img src={image} alt={title} className="rounded-lg h-48 w-full object-cover" />

  <div className="mt-3 space-y-1">
    <h2 className="text-xl font-bold text-[var(--category)]">{title}</h2>
    <p className="text-[var(--category)] text-sm font-medium">Category: {category}</p>
    <p className="text-[var(--category)] text-sm  font-medium">Location: {location}</p>
    <p className="text-[var(--category)] font-semibold">৳ {amount}</p>
    <p className="text-[var(--category)] font-semibold"> {date}</p>
  </div>


  <NavLink to={`/details/${_id}`} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all text-center">
 See Details
  </NavLink>
</div>

  );
};

export default BillCard;