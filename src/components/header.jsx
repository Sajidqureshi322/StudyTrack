// src/components/Header.jsx

import React from 'react';

const Header = () => {
  return (
    <header className="bg-black py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-red-600 text-2xl font-bold">Study Track</h1>
        <nav className="flex space-x-4">
          <a href="#" className="text-white hover:text-red-600">Aptitude</a>
          <a href="#" className="text-white hover:text-red-600">Coding</a>
          <a href="#" className="text-white hover:text-red-600">Company</a>
          <a href="#" className="text-white hover:text-red-600">Discuss</a>
          <a href="#" className="text-white hover:text-red-600">Interview</a>
        </nav>
        <button className="bg-white text-black py-2 px-4 rounded hover:bg-gray-200">Login/Signup</button>
      </div>
    </header>
  );
};

export default Header;
