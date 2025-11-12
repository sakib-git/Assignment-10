import React from 'react';
import BillCard from '../Components/BillCard';
import UseBills from '../Hook/UseBills';

const Bills = () => {
 const {bills, loading} = UseBills()

  if (loading) return <p>Loading...</p>;

  return (
    <div className='  max-w-[1440px] mx-auto mt-20'>
      <title>Bill</title>
      <h1 className='text-center text-4xl font-bold text-[var(--category)] py-4'>Bills</h1>
      <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-6 py-10 max-lg:px-4'>
        {
          bills.map(bill => <BillCard key={bill._id} bill={bill}></BillCard>)
        }
      </div>
    </div>
  );
};

export default Bills;