import React, { useEffect, useState } from 'react';
import BillCard from '../Components/BillCard';
import { serverApi } from '../Hook/useServerAPI';


const LatestBills = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${serverApi}/latest-bills`)
      .then((res) => res.json())
      .then((data) => {
        setBills(data);
        setLoading(false)
      });
  }, []);
  
 if (loading) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    </div>
  );
}

  return (
    <div>
      <h1 className="text-center text-4xl font-bold text-[var(--category)]">Latest Bills</h1>
      <div className="grid gird-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-6 py-10 max-lg:px-4">
        {bills.map((bill) => (
          <BillCard key={bill._id} bill={bill}></BillCard>
        ))}
      </div>
    </div>
  );
};

export default LatestBills;
