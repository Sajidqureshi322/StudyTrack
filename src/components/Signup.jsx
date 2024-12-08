import axios from 'axios';
import emailjs from 'emailjs-com'; // Import EmailJS
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../assets/Logo';
import base_url from '../server/api';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [universityName, setUniversityName] = useState('');
    const [otp, setOtp] = useState(''); // New state for OTP
    const [otpSent, setOtpSent] = useState(false); // To track if OTP has been sent
    const [otpValid, setOtpValid] = useState(false); // To track if OTP is validated
    const [generatedOtp, setGeneratedOtp] = useState(''); // Store generated OTP
    const navigate = useNavigate();

    // Function to generate a random OTP
    const generateOtp = () => {
        const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
        setGeneratedOtp(otp);
        return otp;
    };

    const validateForm = () => {
        let new_name = name.trim(); 
        let new_password = password.trim();
        let new_number = phoneNumber.trim();

        if (new_name !== name) {
            toast.warning("Name cannot have starting and ending spaces");
            return false;
        }
        if (new_password !== password) {
            toast.warning("Password cannot have spaces");
            return false;
        }
        if (phoneNumber.length !== 10) {
            toast.warning("Phone number must have 10 digits only");
            return false;
        }
        if (new_number !== phoneNumber) {
            toast.warning("Phone number cannot have spaces");
            return false;
        }
        if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            toast.warning("Please enter a valid email address");
            return false;
        }

        return true; // Return true if all validations passed
    };

    // Handle OTP Request
    const handleOtpRequest = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return; // Stop further execution if validation fails
        }
        const otp = generateOtp(); // Generate OTP
        
        // Send OTP via EmailJS
        const templateParams = {
            reply_to: email,
            message: otp, // Send OTP in the email
        };

        emailjs.send('service_od3506e', 'template_mi9qtir', templateParams, 'fz4aueRDLjvEvXrtU')
            .then((response) => {
                if (response.status === 200) {
                    setOtpSent(true);  // OTP sent successfully
                    toast.success("OTP sent to your email");
                } else {
                    toast.error("Error sending OTP");
                }
            })
            .catch((error) => {
                toast.error("Error sending OTP");
                console.log(error);
            });
    };

    // Handle OTP Validation
    const handleOtpValidation = (e) => {
        e.preventDefault();
        
        if (otp === generatedOtp.toString()) {
            setOtpValid(true);  // OTP is valid, now you can proceed with signup
            toast.success("OTP verified successfully");
        } else {
            toast.error ("Invalid OTP");
        }
    };

    // Handle form submission after OTP is validated
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!otpValid) {
            toast.warning("Please verify OTP before submitting the form.");
            return;
        }


let new_name = name.trim(); 
        let new_password = password.trim();
        let new_number = phoneNumber.trim();
        
        if (new_name === name && new_password === password && phoneNumber.length === 10 && new_number === phoneNumber) {
            axios.post(base_url + "/register", {
                name: name,
                email: email,
                password: password,
                phoneNumber: phoneNumber,
                universityName: universityName
            })
            .then(function (response) {
                console.log(response.data);
                if (response.data === "Email already registered") {
                    toast.warning("User already exists");
                } else {
                    toast.success("User Registered Successfully");
                    console.log(response);
                    navigate('/login'); 
                }
            })
            .catch(function (error) {
                toast.error("Server Error! Try Again");
                console.log("Error Occurred: " + error);
            });
        } else {
            if (new_name !== name) {
                toast.warning("Name cannot have starting and ending spaces");
            } else if (new_password !== password) {
                toast.warning("Password cannot have spaces");
            } else if (phoneNumber.length !== 10) {
                toast.warning("Please ensure that phone number has 10 digits only");
            } else {
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
                        disabled={otpValid}
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
                    
                    {/* OTP Section */}
                    {otpSent && !otpValid && (
                        <div>
                            <input
                                type="text"
                                placeholder="Enter OTP"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customRed"
                                required
                            />
                            <button 
                                onClick={handleOtpValidation} 
                                className="w-full py-2 mt-2 text-white rounded-lg bg-customRed hover:bg-customPinkHover"
                            >
                                Verify OTP
                            </button>
                        </div>
                    )}
                    {!otpSent && (
                        <button 
                            onClick={handleOtpRequest} 
                            className="w-full py-2 mt-4 text-white rounded-lg bg-customRed hover:bg-customPinkHover"
                        >
                            Send OTP
                        </button>
                    )}

                    {otpValid && (
                        <button type="submit" className="w-full py-2 mt-4 text-white rounded-lg bg-customRed hover:bg-customPinkHover">
                            Sign Up
                        </button>
                    )}
                </form>

                <div className="mt-4 text-center text-white">
                    Already have an account? <Link to="/login" className="text-customRed hover:underline">Login here</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;