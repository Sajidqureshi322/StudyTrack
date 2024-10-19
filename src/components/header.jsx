// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-black py-4  fixed top-0 left-0 w-full z-10 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-customRed text-2xl font-bold">StudyTrack</h1>
        <nav className="flex space-x-4">
          <Link  className="text-white hover:text-customRed" to="/">Home</Link>
          <Link  className="text-white hover:text-customRed" to="/aptitude">Aptitude</Link>
          <Link to="/coding" className="text-white hover:text-customRed">Coding</Link>
          <Link to="/company" className="text-white hover:text-customRed">Company</Link>
          <Link to="/discuss" className="text-white hover:text-customRed">Discuss</Link>
          <Link to="/interview" className="text-white hover:text-customRed">Interview</Link>
        </nav>
        <button className="bg-customRed text-white py-2 px-4 rounded hover:bg-customPinkHover">Login/Signup</button>
      </div>
    </header>
  );
};

export default Header;
