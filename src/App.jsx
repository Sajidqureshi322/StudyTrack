import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Aptitude from './components/Aptitude';
import Coding from './components/Coding';
import Companies from './components/Companies';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/header';
import InterviewPage from './components/InterviewPage';
import Login from './components/login';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import Profile from './components/Profile';
import './index.css';

const App = () => {
  const [showButtons, setShowButtons] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks login state
  const [codingProgress, setCodingProgress] = useState(0);

  // Check login status from localStorage on app load
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    setShowButtons(!token);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true); // Update login state on successful login
    setShowButtons(false); // Hide login/signup buttons
  };

  return (
    <>
      <ToastContainer />
      <Router>
        {/* Pass login state and handlers to Header */}
        <Header
          showButtons={showButtons}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setShowButtons={setShowButtons}
        />
        <div className="container mx-auto mt-16">
          <Routes>
            <Route
              path="/login"
              element={<Login setShowButtons={setShowButtons} onLogin={handleLogin} />}
            />
            <Route path="/signup" element={<Signup />} />
            {/* Protected routes */}
            <Route path="/aptitude" element={<ProtectedRoute element={Aptitude} />} />
            <Route
              path="/coding"
              element={<ProtectedRoute element={Coding} onProgressUpdate={setCodingProgress} />}
            />
            <Route path="/interview" element={<ProtectedRoute element={InterviewPage} />} />
            <Route
              path="/profile"
              element={<ProtectedRoute element={Profile} codingProgress={codingProgress} />}
            />
            <Route path="/" element={<div><Companies /><FAQ /><Footer /></div>} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
