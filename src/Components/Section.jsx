import React from 'react';

import internet from '../assets/internet.webp'
import water from '../assets/water.webp'
import gas from '../assets/gas.webp'
import electricity from '../assets/Electricity.webp'

const Section = () => {
  return (
 <div className=" py-10">
  <h2 className="text-4xl font-bold text-center text-[var(--category)] mb-8">Payment System </h2>
  <div className=" mx-auto grid grid-cols-1 gap-8 place-items-center max-w-[1200px]">


 <div className='flex items-center max-md:flex-col'>
<div className='flex-1'>
       <img 
      src={electricity}
      alt="Image 1"
      className=" rounded-lg  transform transition-transform duration-300 hover:scale-105 p-4"
    />
</div>
    <div className=' flex-1 max-md:px-5'>
      <h4 className='text-4xl font-semibold mb-4'>Electricity Bill</h4>
      <p className='text-gray-600 text-lg md:text-xl leading-relaxed'>Pay bills effortlessly from home with UBMS! Skip queues, ditch documents. Get instant digital receipts. Enjoy two free electricity, gas, water, or telephone bill payments monthly via UBMS App or *541#. Secure & convenient. Embrace smarter bill management. Download UBMS App or dial *247# today!</p>
    </div>
 </div>

 <div className='flex items-center max-md:flex-col flex-row-reverse'>
<div className='flex-1'>
       <img 
      src={water}
      alt="Image 1"
      className=" rounded-lg  transform transition-transform duration-300 hover:scale-105 p-4"
    />
</div>
    <div className=' flex-1 max-md:px-5'>
      <h4 className='text-4xl font-semibold mb-4'>Water Bill</h4>
      <p className='text-gray-600 text-lg md:text-xl leading-relaxed'>Pay water bills anytime with the UBMS App effortlessly. No more standing in queues or worrying about documents. Additionally, if you pay the water bill from the UBMS App, you will get the bill receipt directly on your mobile. Also pay 2 electricity, gas, water, or telephone bills every month, free of charge from the UBMS App and by dialing *541#. Charges will apply for the next bill, depending on the biller.</p>
    </div>
 </div>

 <div className='flex items-center max-md:flex-col'>
<div className='flex-1'>
       <img 
      src={gas}
      alt="Image 1"
      className=" rounded-lg  transform transition-transform duration-300 hover:scale-105 p-4"
    />
</div>
    <div className=' flex-1 max-md:px-5'>
      <h4 className='text-4xl font-semibold mb-4'>Gas Bill</h4>
      <p className='text-gray-600 text-lg md:text-xl leading-relaxed '>Pay your gas bill with UBMS easily, whenever needed. No more standing in lines or worrying about documents. Additionally, if you pay the gas bill from the UBMS App, you will get the bill receipt directly on your mobile. Also pay 2 electricity, gas, water, or telephone bills every month, free of charge from the UBMS App and by dialing *541#. Charges will apply for the next bill, depending on the biller.</p>
    </div>
 </div>




 <div className='flex items-center max-md:flex-col flex-row-reverse'>
<div className='flex-1'>
       <img 
      src={internet}
      alt="Image 1"
      className=" rounded-lg  transform transition-transform duration-300 hover:scale-105 p-4"
    />
</div>
    <div className=' flex-1 max-md:px-5'>
      <h4 className='text-4xl font-semibold mb-4' >Pay Internet Bill</h4>
      <p className='text-gray-600 text-lg md:text-xl leading-relaxed'>You can easily pay your internet bill at any time of the day without any hassle of paperwork with UBMS. Additionally, if you pay the internet bill from the UBMS App, you will get the bill receipt directly on your mobile. Any UBMS customer can avail this service from the UBMS App or by dialing *541#</p>
    </div>
 </div>
    
 

   
  </div>
</div>

   
  );
};

export default Section;