import React, { useEffect, useState } from 'react';
import BillCard from '../Components/BillCard';

const LatestBills = () => {
    const [bills, setBills] = useState([]);
   
  useEffect(() => {
     fetch('http://localhost:3000/latest-bills')
     .then(res => res.json())
     .then(data => {

       setBills(data)
       
     })
  }, [])
  return (
    <div>
      <h1 className='text-center text-4xl font-bold text-[var(--category)]'>Latest Bills</h1>
      <div className='grid gird-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-6 py-10 max-lg:px-4'>
        {
         bills.map(bill => <BillCard key={bill._id} bill={bill}></BillCard>)
        }
      </div>
    </div>
  );
};

export default LatestBills;