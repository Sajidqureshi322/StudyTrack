import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminPanel from "./components/AdminPanel";
import Aptitude from './components/Aptitude';
import Coding from './components/Coding';
import Companies from './components/Companies';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ForgotPassword from './components/ForgotPassword';
import Header from './components/header';
import InterviewPage from './components/InterviewPage';
import Login from './components/login';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './components/Signup';
import './index.css';
import InterviewPage from './components/InterviewPage';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [showButtons, setShowButtons] = useState(true);

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