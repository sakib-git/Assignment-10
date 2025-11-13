import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';
import { serverApi } from '../Hook/useServerAPI';

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${serverApi}/bills`)
      .then((res) => res.json())
      .then((data) => {
        const allCategories = data.map((bill) => bill.category);
        const uniqueCategories = [];
        allCategories.forEach((c) => {
          if (!uniqueCategories.includes(c)) {
            uniqueCategories.push(c);
          }
        });

        setCategories(uniqueCategories);
        setLoading(false)
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const categoryBorder = {
    electricity: 'hover:border-yellow-500',
    gas: 'hover:border-red-500',
    water: 'hover:border-blue-500',
    internet: 'hover:border-green-500',
  };

 if (loading) {
  return (
    
    <div className="flex items-center justify-center h-screen">
      <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    </div>
  );
}
  return (
    <div>
      <h1 className="text-2xl md:text-4xl text-center py-10 font-bold text-[var(--category)]">
        Manage Your{' '}
        <span className="text-blue-600">
          <Typewriter words={['Electricity', 'Gas', 'Water', 'Internet']} loop={true} cursor cursorStyle="|" typeSpeed={80} deleteSpeed={50} delaySpeed={1000} />
        </span>{' '}
        Bills Effortlessly!
      </h1>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10 max-lg:px-4">
          {categories.map((category) => (
            <Link to={`/category/${category.toLowerCase()}`} key={category} className={`bg-[var(--navbar-bg)] rounded-2xl shadow-md p-6 text-center cursor-pointer border border-(--dark-border) transition-all duration-500 hover:scale-105 ${categoryBorder[category.toLowerCase()]}`}>
              <span className="text-2xl font-bold text-[var(--category)]">{category}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
