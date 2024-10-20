import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center">
      <div className="bg-customBlack rounded-lg p-8 w-96 shadow-lg border-2 border-customOb">
        <h1 className="text-center text-3xl font-bold text-customRed">StudyTrack</h1>
        <p className="text-center text-gray-300 mb-6">Sign in with your email</p>
        
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customRed"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customRed"
          />
        </div>
        
        <div className="flex justify-end mt-2">
          <Link to="/forgot-password" className="text-sm text-customRed hover:underline">Forgot Password?</Link>
        </div>

        <button className="w-full bg-customRed text-white py-2 mt-4 rounded-lg hover:bg-customPinkHover">Login</button>

        <div className="text-center mt-4 text-white">
          Don’t have an account? <Link to="/signup" className="text-customRed hover:underline">Sign up</Link>
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <a href="#" className="text-black"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-black"><i className="fab fa-github"></i></a>
          <a href="#" className="text-black"><i className="fab fa-google"></i></a>
        </div>
      </div>
      
      
    </div>
  );
};

export default Login;
