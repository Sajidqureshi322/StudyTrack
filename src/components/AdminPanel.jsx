import React, { useState } from "react";

const AdminPanel = () => {
  // Dummy data for users
  const [users, setUsers] = useState([
    { id: 1, name: "Yogesh Patel", email: "john@example.com", phone: "123-456-7890", college: "SVV" },
    { id: 2, name: "Sajid Qureshi", email: "jane@example.com", phone: "987-654-3210", college: "SVV" },
    { id: 3, name: "Shubham Khan", email: "alice@example.com", phone: "555-555-5555", college: "SVV" },
  ]);

  // Function to delete a user
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
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

        <h1 className="mb-2 text-2xl font-bold">Zaid Khan</h1>
        <p className="text-sm">Admin</p>
        <p className="mt-2">Email: zaid@example.com</p>
        <p>Location: Indore, India</p>
        <p>Post: Super Admin</p>
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
                <td className="p-2 text-white border border-gray-600">{user.phone}</td>
                <td className="p-2 text-white border border-gray-600">{user.college}</td>
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
