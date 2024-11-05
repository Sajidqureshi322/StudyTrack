// src/App.jsx
import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Aptitude from './components/Aptitude';
import Coding from './components/Coding'
import Companies from './components/Companies';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/header';
import Login from './components/login';
import Signup from './components/Signup'; 
import './index.css';
import InterviewPage from './components/InterviewPage';

const App = () => {
  // State to control visibility of Login and Signup buttons
  const [showButtons, setShowButtons] = useState(true);

  return (
    <>
      <Router>
        {/* Pass showButtons state and setShowButtons function to Header */}
        <Header showButtons={showButtons} />
        <div className="container mx-auto mt-16">
          <Routes>
            {/* Pass setShowButtons to Login component */}
            <Route path="/login" element={<Login setShowButtons={setShowButtons} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/aptitude" element={<div><Aptitude /> <Footer/></div>} />
            <Route path="/coding" element={<div><Coding /> <Footer/></div>} />
            <Route path="/interview" element={<InterviewPage />} />
            <Route path="/" element={
              <div>
                <Companies />
                <FAQ />
                <Footer />
              </div>
            } />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;

