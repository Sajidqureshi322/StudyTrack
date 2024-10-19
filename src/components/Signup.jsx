// src/components/Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [universityName, setUniversityName] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic (e.g., API call)
        console.log({ name, email, password, phoneNumber, universityName });

        // Redirect to login page after signup
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-black flex flex-col justify-center items-center">
            <div className="bg-gray-200 rounded-lg p-8 w-96 shadow-lg border-2 border-blue-500">
                <h1 className="text-center text-3xl font-bold text-red-600">Study Track</h1>
                <p className="text-center text-gray-500 mb-6">Create an account</p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                    />
                    <input
                        type="text"
                        placeholder="University Name"
                        value={universityName}
                        onChange={(e) => setUniversityName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
                        required
                    />
                    <button type="submit" className="w-full bg-red-600 text-white py-2 mt-4 rounded-lg hover:bg-red-700">
                        Sign Up
                    </button>
                </form>

                <div className="text-center mt-4 text-sm">
                    Already have an account? <Link to="/login" className="text-red-600 hover:underline">Login here</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
