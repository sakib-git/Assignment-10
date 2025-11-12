import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bills')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const allCategories = data.map((bill) => bill.category);
        const uniqueCategories = [];
        allCategories.forEach((c) => {
          if (!uniqueCategories.includes(c)) {
            uniqueCategories.push(c);
          }
        });

        setCategories(uniqueCategories);
      });
  }, []);
  const categoryBorder = {
    electricity: 'hover:border-yellow-500',
    gas: 'hover:border-red-500',
    water: 'hover:border-blue-500',
    internet: 'hover:border-green-500',
  };

  return (
    <div>
        
   <h1 className="text-2xl md:text-4xl text-center py-10 font-bold text-[var(--category)]">
  Manage Your{" "}
  <span className="text-blue-600">
    <Typewriter
      words={["Electricity", "Gas", "Water", "Internet"]}
      loop={true}
      cursor
      cursorStyle="|"
      typeSpeed={80}
      deleteSpeed={50}
      delaySpeed={1000}
    />
  </span>{" "}
  Bills Effortlessly!
</h1>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 max-lg:px-4">
          {categories.map((category) => (
            <Link to={`/category/${category.toLowerCase()}`} key={category} className={`bg-[var(--navbar-bg)] rounded-2xl shadow-md p-6 text-center cursor-pointer border border-gray-200 transition-all duration-500 hover:scale-105 ${categoryBorder[category.toLowerCase()]}`}>
              <span className="text-2xl font-bold text-[var(--category)]">{category}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
