import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ showButtons, handleLogout }) => {
  return (
    <header className="bg-black py-4 fixed top-0 left-0 w-full z-10 shadow p-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link className="text-customRed text-2xl font-bold" to="/">StudyTrack</Link>

        {/* Navigation links */}
        <nav className="flex space-x-4 items-center">
          <Link className="text-white hover:text-customRed" to="/">Home</Link>
          <Link className="text-white hover:text-customRed" to="/aptitude">Aptitude</Link>
          <Link className="text-white hover:text-customRed" to="/coding">Coding</Link>
          <Link className="text-white hover:text-customRed" to="/interview">Interview</Link>
        </nav>

        {/* Conditional rendering for Profile/Logout or Login/Signup */}
        <div className="flex space-x-4 items-center">
          {showButtons ? (
            <>
              <Link to="/login">
                <button className="text-white py-2 px-4 rounded hover:bg-customBlack transition-transform transform hover:scale-105 duration-400">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="bg-customRed text-white py-2 px-4 rounded transition-transform transform hover:scale-105 duration-400">
                  Signup
                </button>
              </Link>
            </>
          ) : (
            <>
              {/* Profile Link */}
              <Link to="/profile" className="text-white hover:text-customRed">
                Profile
              </Link>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="bg-customRed text-white py-2 px-4 rounded transition-transform transform hover:scale-105 duration-400"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
