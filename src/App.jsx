// src/App.jsx
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Aptitude from './components/Aptitude';
import Companies from './components/Companies';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/header';
import Login from './components/login';
import Signup from './components/Signup'; // Import the Signup component
import './index.css';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className="container mx-auto mt-16">
          <Routes>
            {/* Route for the Login Page */}
            <Route path="/login" element={<Login />} />
            {/* Route for the Signup Page */}
            <Route path="/signup" element={<Signup />} />
            {/* Other routes */}
            <Route path="/aptitude" element={<Aptitude />} />
            <Route path="/" element={
              <div>
                <Companies />
                <FAQ />
              </div>
            } />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
};

export default App;

