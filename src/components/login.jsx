import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import base_url from '../server/api';

const Login = ({ setShowButtons }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${base_url}/login`, {
        email: email,
        password: password
      });

      if (response.data.message === "Login successful") {
        // Save JWT token in localStorage for persistent session management
        localStorage.setItem("token", response.data.token);

        // Hide login/signup buttons after successful login
        setShowButtons(false);

        // Display success notification and navigate to home or protected page
        toast.success("Login Successfully");
        navigate("/"); // Redirect to home or another protected route

      } else {  
        toast.error("Invalid Username or Password");
      }
    } catch (error) {
      // Handle network or server errors
      toast.error("Login Failed. Please try again.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center">
      <div className="bg-customBlack rounded-lg p-8 w-96 shadow-lg border-2 border-customOb">
        <h1 className="text-center text-3xl font-bold text-customRed">StudyTrack</h1>
        <p className="text-center text-gray-300 mb-6">Sign in with your email</p>
        
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customRed"
            required
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customRed"
            required
          />
        </div>
        
        <div className="flex justify-end mt-2">
          <Link to="/forgot-password" className="text-sm text-customRed hover:underline">Forgot Password?</Link>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-customRed text-white py-2 mt-4 rounded-lg hover:bg-customPinkHover"
        >
          Login
        </button>

        <div className="text-center mt-4 text-white">
          Don’t have an account? <Link to="/signup" className="text-customRed hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;