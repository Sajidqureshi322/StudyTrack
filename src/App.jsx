// src/App.jsx
import React, { useState } from 'react';
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
// Import the Profile component
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './components/Signup';
import './index.css';

const App = () => {
  // State to control visibility of Login and Signup buttons
  const [showButtons, setShowButtons] = useState(true);

  return (
    <>
      <ToastContainer />
      <Router>
        {/* Pass showButtons state and setShowButtons function to Header */}
        <Header showButtons={showButtons} />
        <div className="container mx-auto mt-16">
          <Routes>
            <Route path="/login" element={<Login setShowButtons={setShowButtons} />} />
            <Route path="/signup" element={<Signup />} />
            {/* Add Profile route with ProtectedRoute */}
            <Route path="/aptitude" element={<ProtectedRoute element={Aptitude} />} />
            <Route path="/coding" element={<ProtectedRoute element={Coding} />} />
            <Route path="/interview" element={<ProtectedRoute element={InterviewPage} />} />
            <Route path="/" element={<div><Companies /><FAQ /><Footer /></div>} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
