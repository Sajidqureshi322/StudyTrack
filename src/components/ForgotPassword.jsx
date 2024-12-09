import axios from 'axios';
import emailjs from 'emailjs-com'; // Import EmailJS
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from '../assets/Logo';
import base_url from '../server/api';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
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

    // Validate form fields before sending OTP
    const validateForm = () => {
        if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA0-9.-]+\.[a-zA-Z]{2,4}$/)) {
            toast.warning("Please enter a valid email address");
            return false;
        }
        return true; // Return true if validation passes
    };

    // Handle OTP Request
    const handleOtpRequest = (e) => {
        e.preventDefault();

        // Validate email before sending OTP
        if (!validateForm()) {
            return; // Stop further execution if validation fails
        }

        const otp = generateOtp(); // Generate OTP
        
        // Send OTP via EmailJS using public key
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
            setOtpValid(true);  // OTP is valid, show the new password fields
            toast.success("OTP verified successfully");
        } else {
            toast.error("Invalid OTP");
        }
    };

    // Handle password reset submission
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!otpValid) {
            toast.warning("Please verify OTP before submitting the form.");
            return;
        }
    
        if (newPassword !== confirmPassword) {
            toast.warning("Passwords do not match");
            return;
        }
    
        // Make an axios request to the backend to update the password
        axios.post(`${base_url}/updatePassword`, { email, newPassword, confirmPassword })
            .then(response => {
                if (response.data === "Password updated successfully!") {
                    toast.success("Password updated successfully");
                    navigate('/login'); // Redirect to login page
                } else {
                    toast.error(response.data);
                }
            })
            .catch(error => {
                toast.error("Server error. Please try again.");
                console.error(error);
            });
        };


return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black">
            <div className="p-8 border-2 rounded-lg shadow-lg bg-customBlack w-96 border-customOb">
            <h1 className="flex justify-center"><Logo/></h1>
                <p className="mb-6 text-center text-white">Forgot your password? Reset it here</p>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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

                    {/* Show New Password and Confirm Password fields only after OTP is validated */}
                    {otpValid && (
                        <div>
                            <input
                                type="password"
                                placeholder="New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full px-4 py-2 mt-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customRed"
                                required
                            />
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-4 py-2 mt-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-customRed"
                                required
                            />
                            <button type="submit" className="w-full py-2 mt-4 text-white rounded-lg bg-customRed hover:bg-customPinkHover">
                                Reset Password
                            </button>
                        </div>
                    )}
                </form>

                <div className="mt-4 text-center text-white">
                    Remembered your password? <Link to="/login" className="text-customRed hover:underline">Login here</Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
