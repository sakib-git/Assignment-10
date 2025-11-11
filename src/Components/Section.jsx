import React from 'react';
import img from '../assets/undraw_mobile-payments_uate.svg'
import img1 from '../assets/undraw_online-payments_p97e.png'
import img2 from '../assets/undraw_receipt_tzi0.svg'
import img3 from '../assets/undraw_send-money_4qc7.svg'
import img4 from '../assets/undraw_stripe-payments_jxnn.svg'

const Section = () => {
  return (
 <div className=" py-10">
  <h2 className="text-4xl font-bold text-center text-[var(--category)] mb-8">Payment System </h2>
  <div className=" mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 place-items-center">
    <img
      src={img}
      alt="Image 1"
      className="  bg-[var(--navbar-bg)] w-100 h-100  rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 p-4"
    />
    <img
      src={img1}
      alt="Image 1"
      className="  bg-[var(--navbar-bg)] w-100 h-100  rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 p-4"
    />
    <img
      src={img2}
      alt="Image 2"
      className="  bg-[var(--navbar-bg)] w-100 h-100  rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 p-4"
    />
    <img
      src={img3}
      alt="Image 3"
      className="  bg-[var(--navbar-bg)]  w-100 h-100 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 p-4"
    />
    <img
      src={img4}
      alt="Image 4"
      className="  bg-[var(--navbar-bg)] w-100 h-100 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 p-4"
    />
  </div>
</div>

   
  );
};

export default Section;