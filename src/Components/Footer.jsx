import React from 'react';
import { Facebook, Instagram, X } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className=" max-w-[1440px] mx-auto px-6 md:flex md:justify-between md:items-start">
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold mb-2">Utility Bill Management</h1>
          <p className="text-gray-400 max-w-sm">Manage your utility bills efficiently and stay on top of payments with our easy-to-use platform.</p>
        </div>

        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Profile
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Bill
              </a>
            </li>

            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Contact</h2>
          <p className="text-gray-400 mb-2">© 2025 Utility Bill Management System</p>
          <p className="text-gray-400">All rights reserved.</p>
        </div>
      </div>
      <div className="flex gap-4 justify-end max-w-[1440px] mx-auto">
        <Facebook className="w-6 h-6" />
        <Instagram className="w-6 h-6" />
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
