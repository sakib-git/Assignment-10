import React, { useEffect, useState } from 'react';
import BillCard from '../Components/BillCard';
import UseBills from '../Hook/UseBills';
import { serverApi } from '../Hook/useServerAPI';

const Bills = () => {
  const { bills, loading } = UseBills();
  const [search, setSearch] = useState([]);
  useEffect(() => {
    setSearch(bills);
  }, [bills]);
  

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search.value;

    fetch(`${serverApi}/search?search=${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setSearch(data);
      });
  };
if (loading) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    </div>
  );
}

  return (
    <div className="  max-w-[1440px] mx-auto mt-20">
      <title>Bill</title>
      <h1 className="text-center text-4xl font-bold text-[var(--category)] py-4">Bills</h1>
      <form onSubmit={handleSearch} className="text-center flex items-center justify-center gap-2 max-sm:px-4">
        <label className="input outline-none focus:none border-(--dark-border) rounded-full">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" name="search" placeholder="Search" />
        </label>
        <button type="submit" className="bg-[var(--active)] px-8 py-[10px] rounded-full font-semibold">
          Search
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  gap-6 py-10 max-lg:px-4">
        {search.map((bill) => (
          <BillCard key={bill._id} bill={bill}></BillCard>
        ))}
      </div>
    </div>
  );
};

export default Bills;
