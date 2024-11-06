import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa';

const Profile = ({ user, codingProgress }) => {
  // Sample user data
  const userData = user || {
    name: "Zaid Khan",
    email: "zaidkhan@example.com",
    location: "Indore, India",
    college: "svvv",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/zaidkhan",
      github: "https://github.com/zaidkhan",
    },
    preparation: {
      aptitude: 80, // percentage of preparation in aptitude
      coding: codingProgress,
      interview: 90,
    },
    topicsCovered: [
      { name: "Arrays", count: 5 },
      { name: "Binary Search", count: 10 },
      { name: "Binary Tree", count: 3 },
      { name: "Dynamic Programming", count: 7 },
    ]
  };

  return (
    <div className="flex bg-black text-white h-screen p-4">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-customBlack rounded-lg p-4 flex flex-col items-center">
        {/* Profile Picture */}
        <div className="w-24 h-24 bg-customOb rounded-full mb-4">
          {/* Placeholder image, replace with actual user image */}
          <img
            src="./images/avtar"
            alt="User Avatar"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h2 className="text-xl font-bold mb-2">{userData.name}</h2>

        {/* Social Media Links */}
        <div className="flex space-x-3 mb-6 text-2xl ">
          <a href={userData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            <FaLinkedin />
          </a>
          <a href={userData.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-gray-400">
            <FaGithub />
          </a>
        </div>
        <div className="border-b border-gray-700 w-full pt-1"></div>

        {/* Personal Information */}
        <div className="text-center space-y-2 mt-2 ">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-gray-400" />
            <p>{userData.email}</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-gray-400" />
            <p>{userData.location}</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaUniversity className="text-gray-400" />
            <p>{userData.college}</p>
          </div>
        </div>
      </div>

      {/* Right Side Content */}
      <div className="w-3/4 ml-6 flex flex-col">
        {/* Preparation Progress Section */}
        <div className="w-full bg-customBlack rounded-lg p-5 items-center">
        <h1 className="items-center font-semibold mb-4 text-xl border-b border-gray-700 pb-4 ">Progress</h1>
        <div className="flex justify-around mb-5 ">
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-5">Aptitude</h3>
            <div className="bg-customOb p-3 rounded-full size-44">
              <CircularProgressbar
                value={userData.preparation.aptitude}
                text={`${userData.preparation.aptitude}%`}
                styles={buildStyles({
                  textColor: "white",
                  pathColor: "#BE123C",
                  trailColor: "#333",
                })}
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-5">Coding</h3>
            <div className="bg-customOb p-3 rounded-full size-44">
              <CircularProgressbar
                value={userData.preparation.coding}
                text={`${userData.preparation.coding}%`}
                styles={buildStyles({
                  textColor: "white",
                  pathColor: "#BE123C",
                  trailColor: "#333",
                })}
              />
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-5">Interview</h3>
            <div className="bg-customOb p-3 rounded-full size-44">
              <CircularProgressbar
                value={userData.preparation.interview}
                text={`${userData.preparation.interview}%`}
                styles={buildStyles({
                  textColor: "white",
                  pathColor: "#BE123C",
                  trailColor: "#333",
                })}
              />
            </div>
          </div>
        </div>
        </div>

        {/* Topics Covered Section */}
        <div className="bg-customBlack rounded-lg p-6 mt-2">
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-4">Topics Covered</h3>
          <div className="flex flex-wrap">
            {userData.topicsCovered.map((topic, index) => (
              <div
                key={index}
                className="bg-customOb rounded-full px-4 py-2 text-sm m-2"
              >
                {topic.name} <span className="font-bold">x{topic.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
