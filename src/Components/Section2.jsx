import React from 'react';

const Section2 = () => {
  return (
    <div className=" py-10 mb-10">
      <div className="flex items-center gap-4 w-full max-w-[1000px] mx-auto">
        <p className="flex-1 border-t border-gray-300"></p>
        <p className=" text-4xl max-md:text-2xl font-medium">Learn More about UBMS Services</p>
        <p className="flex-1 border-t border-gray-300"></p>
      </div>


      <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-6 justify-center mt-6 gap-4">
  <div className="flex flex-col items-center gap-2 px-4 py-2 cursor-pointer hover:text-indigo-600 transition">
    <span className="text-3xl">💸</span>
    <span className="font-semibold">CasOut</span>
  </div>

  <div className="flex flex-col items-center gap-2 px-4 py-2 cursor-pointer hover:text-green-600 transition">
    <span className="text-3xl">🧾</span>
    <span className="font-semibold">Payment</span>
  </div>

  <div className="flex flex-col items-center gap-2 px-4 py-2 cursor-pointer hover:text-yellow-600 transition">
    <span className="text-3xl">📤</span>
    <span className="font-semibold">SendMoney</span>
  </div>

  <div className="flex flex-col items-center gap-2 px-4 py-2 cursor-pointer hover:text-blue-600 transition">
    <span className="text-3xl">💳</span>
    <span className="font-semibold">Pay</span>
  </div>

  <div className="flex flex-col items-center gap-2 px-4 py-2 cursor-pointer hover:text-green-600 transition">
    <span className="text-3xl">🧾</span>
    <span className="font-semibold">Bill</span>
  </div>

  <div className="flex flex-col items-center gap-2 px-4 py-2 cursor-pointer hover:text-yellow-600 transition">
    <span className="text-3xl">💰</span>
    <span className="font-semibold">Saving</span>
  </div>
</div>

    </div>
  );
};

export default Section2;
