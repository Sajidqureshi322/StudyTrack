
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import base_url from "../server/api";

const AdminPanel = () => {
  // Dummy data for users  
  const [users, setUsers] = useState(() => {
    let storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : []; // Fallback to an empty array
  });

  // setUsers(localStorage.getItem("users"));

  // Function to delete a user
  const deleteUser = async(id) => {
    const userToDelete = users.find((user) => user.id === id);
    console.log(userToDelete.email)
    try{
      const response = await axios.post(`${base_url}/deleteByEmail` , {email : userToDelete.email})
      console.log(response.data)
      if(response.data == "user deleted successfully"){
        const updatedUsers = users.filter((user) => user.id !== id);
        setUsers(updatedUsers);
        // Persist the updated list to localStorage
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        toast.success("User Deleted Successfully");
      }
      else toast.error("Something went wrong !! Try again");
    }
    catch(e){
      toast.error("Server down");
      console.log(e);
    }
    
  };

  // Optional: Sync localStorage with users state when it changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const userData = {
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    location: "Indore, India",
    college: localStorage.getItem("university"),
    socialLinks: {
      linkedin: "",
      github: "",
    }
  };

  return (
    <div className="flex h-screen bg-black">
      {/* Left Section: Admin Info */}
      <div className="flex flex-col items-center justify-start w-1/3 p-8 m-1 text-white rounded-lg bg-customBlack">
        {/* Admin Info */}
        <div className="w-24 h-24 mb-4 rounded-full bg-customOb">
          <img
            src="./images/avtar"
            alt="Profile"
            className="object-cover w-full h-full rounded-full"
          />
        </div>

        <h1 className="mb-2 text-2xl font-bold">{userData.name}</h1>
        {/* <p className="text-sm">Admin</p> */}
        <p className="mt-2">{userData.email}</p>
        <p>Location: Indore, India</p>
        <p>Post: Admin</p>
      </div>

{/* Right Section: User List */}
      <div className="w-2/3 p-8 m-4 rounded-lg bg-customBlack">
        {/* User Table */}
        <h2 className="mb-5 text-2xl font-bold text-white">User Information</h2>
        <table className="w-full border border-collapse border-customBlack">
          <thead>
            <tr className="bg-customOb">
              <th className="p-2 text-white border border-gray-600">#</th> {/* Serial Number Column */}
              <th className="p-2 text-white border border-gray-600">Name</th>
              <th className="p-2 text-white border border-gray-600">Email</th>
              <th className="p-2 text-white border border-gray-600">Phone</th>
              <th className="p-2 text-white border border-gray-600">College</th>
              <th className="p-2 text-white border border-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className="hover:bg-customOb">
                <td className="p-2 text-white border border-gray-600">{index + 1}</td> {/* Display serial number */}
                <td className="p-2 text-white border border-gray-600">{user.name}</td>
                <td className="p-2 text-white border border-gray-600">{user.email}</td>
                <td className="p-2 text-white border border-gray-600">{user.phoneNumber}</td>
                <td className="p-2 text-white border border-gray-600">{user.universityName}</td>
                <td className="p-2 text-center border border-gray-600">
                  <button
                    className="px-3 py-1 text-white rounded bg-customRed hover:bg-customPinkHover"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
