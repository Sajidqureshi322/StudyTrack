import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black py-4 fixed top-0 left-0 w-full z-10 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-customRed text-2xl font-bold">Study Track</h1>
        <nav className="flex space-x-4">
          <Link className="text-white hover:text-customRed" to="/">Home</Link>
          <Link className="text-white hover:text-customRed" to="/aptitude">Aptitude</Link>
          <Link className="text-white hover:text-customRed" to="/coding">Coding</Link>
          <Link className="text-white hover:text-customRed" to="/company">Company</Link>
          <Link className="text-white hover:text-customRed" to="/discuss">Discuss</Link>
          <Link className="text-white hover:text-customRed" to="/interview">Interview</Link>
        </nav>
        {/* Added Login/Signup link */}
        <Link to="/login">
          <button className="bg-customRed text-white py-2 px-4 rounded hover:bg-customPinkHover">Login/Signup</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
