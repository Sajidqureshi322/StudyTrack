// src/components/Signup.js
import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import base_url from '../server/api';
import Logo from '../assets/Logo';

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
        let new_name = name.trim(); 
        let new_password = password.trim();
        let new_number =  phoneNumber.trim();
        if(new_name === name && new_password ===password && phoneNumber.length === 10 && new_number === phoneNumber){
            axios.post(base_url + "/register", {
                name : name,
                email : email,
                password : password,
                phoneNumber : phoneNumber ,
                universityName : universityName
            })
            .then(function (response) {
                console.log(response.data);
                if(response.data === "Email already registered"){
                    toast.warning("User already exists");
                }
                else{
                    toast.success("User Registered Successfully");
                    console.log(response);
                    navigate('/login'); 
                }
                // Redirect to login page after signup
            })
            .catch(function (error) {
                toast.error("Server Error ! Try Again");
                console.log("Error Occured" + error);
            });     
        }
        else{
            if(new_name !== name){
                toast.warning("Name can not have starting and ending spaces");
            }
            else if(new_password !== password){
                toast.warning("Password can not have spaces");
            }
            else if(phoneNumber.length !== 10){
                toast.warning("Please ensure that phone number has 10 digits only")
            }
            else{
                toast.warning("Phone number cannot have spaces");
            }
        }
        
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <div className="p-8 border-2 rounded-lg shadow-lg bg-customBlack w-96 border-customOb">
            <h1 className="flex justify-center"><Logo/></h1>
                <p className="mb-6 text-center text-white">Create an account</p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customRed"
                        required
                    />
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
                    <input
                        type="text"
                        placeholder="Phone Number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customRed"
                        required
                    />
                    <input
                        type="text"
                        placeholder="University Name"
                        value={universityName}
                        onChange={(e) => setUniversityName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customRed"
                        required
                    />
                    <button type="submit" className="w-full py-2 mt-4 text-white rounded-lg bg-customRed hover:bg-customPinkHover">
                        Sign Up
                    </button>
                </form>

                <div className="mt-4 text-center text-white">
                    Already have an account? <Link to="/login" className="text-customRed hover:underline">Login here</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
