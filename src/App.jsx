import React from 'react';
import Companies from './components/Companies';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Header from './components/header';
import './index.css';
import Aptitude from './components/Aptitude';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <Router>
      <Header/>
      <div className="container mx-auto mt-16"></div>
       
      
        {/* <Companies /> */}
        {/* <FAQ /> */}
        {/* <Footer /> */}
        <Routes>
          <Route
            path="/aptitude"
            element={<Aptitude/>}
          />
          <Route
          path="/"
          element={<div>
            <Companies/>
            <FAQ/>
            
          </div>}
         
          />
         
        </Routes>
        <Footer/>
      
      </Router>
    </>
  );
};

export default App;
