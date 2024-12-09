import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo';
import { toast } from 'react-toastify';

const Header = ({ showButtons, isLoggedIn, setIsLoggedIn, setShowButtons }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear token
    setIsLoggedIn(false); // Reset login state
    setShowButtons(true); // Show login/signup buttons
    toast.success("Logout Successfully!");
    navigate('/login'); // Redirect to login page
  };

  return (
    <header className="bg-black py-4 fixed top-0 left-0 w-full z-10 shadow p-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <Logo />
        </Link>

        {/* Navigation links */}
        <nav className="flex space-x-4 items-center">
          <Link className="text-white hover:text-customRed" to="/">
            Home
          </Link>
          <Link className="text-white hover:text-customRed" to="/aptitude">
            Aptitude
          </Link>
          <Link className="text-white hover:text-customRed" to="/coding">
            Coding
          </Link>
          <Link className="text-white hover:text-customRed" to="/interview">
            Interview
          </Link>
        </nav>

        {/* Conditional rendering for login/logout/profile buttons */}
        <div className="flex space-x-4 items-center">
          {isLoggedIn ? (
            <>
              <Link to="/profile" className="text-white hover:text-customRed">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="bg-customRed text-white py-2 px-4 rounded transition-transform transform hover:scale-105 duration-400"
              >
                Logout
              </button>
            </>
          ) : showButtons ? (
            <>
              <Link to="/login" className="text-white hover:text-customRed">
                Login
              </Link>
              <Link to="/signup">
                <button className="bg-customRed text-white py-2 px-4 rounded transition-transform transform hover:scale-105 duration-400">
                  Signup
                </button>
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
