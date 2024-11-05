import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import base_url from '../server/api';

const Login = ({ setShowButtons }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(base_url + '/login', {
        email,
        password
      });

      if (response.data === "Login successful!") {
        // Hide the Login and Signup buttons after successful login
        setShowButtons(false);

        // Redirect to the homepage or any other page after login
        navigate('/');
      } else {
        console.log("Invalid credentials");
      }
    } catch (error) {
      console.log("Error during login:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center">
      <div className="bg-customBlack rounded-lg p-8 w-96 shadow-lg border-2 border-customOb">
        <h1 className="text-center text-3xl font-bold text-customRed">StudyTrack</h1>
        <p className="text-center text-gray-300 mb-6">Sign in with your email</p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customRed"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customRed"
            required
          />
          
          <button type="submit" className="w-full bg-customRed text-white py-2 mt-4 rounded-lg hover:bg-customPinkHover">
            Login
          </button>
        </form>

        <div className="text-center mt-4 text-white">
          Don’t have an account? <Link to="/signup" className="text-customRed hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
