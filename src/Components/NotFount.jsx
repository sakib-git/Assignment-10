import React from 'react';
import { Link } from 'react-router';

const NotFount = () => {
  return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Page Not Found</p>
      <Link to="/" className="text-blue-600 underline">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFount;