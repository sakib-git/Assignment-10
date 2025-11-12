import React from 'react';
import { useLoaderData } from 'react-router';
import BillCard from './BillCard';

const CategoryPage = () => {
  const data = useLoaderData()

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1440px] mx-auto gap-14 py-10 max-md:px-4'>
      
        
      
      {

        data.map(bill => <BillCard bill={bill} ></BillCard>)
      }
    </div>
  );
};

export default CategoryPage;