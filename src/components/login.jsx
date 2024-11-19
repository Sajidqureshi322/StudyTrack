import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import base_url from '../server/api';
import Logo from '../assets/Logo';

const Login = ({ setShowButtons,onLogin }) => {
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
        onLogin();
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="p-8 border-2 rounded-lg shadow-lg bg-customBlack w-96 border-customOb">
        <h1 className="flex justify-center"><Logo/></h1>
        <p className="mb-6 text-center text-gray-300">Sign in with your email</p>
        
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
          className="w-full py-2 mt-4 text-white rounded-lg bg-customRed hover:bg-customPinkHover"
        >
          Login
        </button>

        <div className="mt-4 text-center text-white">
          Don’t have an account? <Link to="/signup" className="text-customRed hover:underline">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;