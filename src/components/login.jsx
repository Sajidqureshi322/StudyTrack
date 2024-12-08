import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Logo from '../assets/Logo';
import base_url from '../server/api';

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
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("phone", response.data.phone);
        localStorage.setItem("university", response.data.university);
        localStorage.setItem("role" , response.data.role);
        console.log(localStorage.getItem("name"));        // Fetches the name
        console.log(localStorage.getItem("email"));       // Fetches the email
        console.log(localStorage.getItem("token"));       // Fetches the token
        console.log(localStorage.getItem("phone"));       // Fetches the phone
        console.log(localStorage.getItem("university")); 
        console.log(localStorage.getItem("role"));

        if(response.data.role === 'admin'){
          let usersList = JSON.parse(response.data.users);
          const emailToRemove = response.data.email;
          usersList = usersList.filter(user => user.email !== emailToRemove);

          localStorage.setItem("users", JSON.stringify(usersList));
          console.log(response.data.users);
        }
        onLogin();
        // Hide login/signup buttons after successful login
        setShowButtons(false);

        // Display success notification and navigate to home or protected page
        toast.success("Login Successfully");
        if(response.data.role === "admin")
          navigate("/admin");
        else
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