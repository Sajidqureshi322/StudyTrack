import React from "react";
import Wlogo from "../assets/Wlogo";

const Footer = () => {
  return (
    <footer className="py-10 text-gray-300 bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div>
          <h1 className="flex justify-left "><Wlogo/></h1>
            <p className="text-sm text-gray-400 ">
              The best place to learn data structures, algorithms, most asked coding interview questions, and real interview experiences free of cost.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-3 text-xl font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500">About Us</a></li>
              <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-red-500">Policy Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Quick Access Links */}
          <div>
            <h3 className="mb-3 text-xl font-semibold text-white">Quick Access</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500">Striver's DSA</a></li>
              <li><a href="#" className="hover:text-red-500">Sheet/Striver's DSA Playlist</a></li>
              <li><a href="#" className="hover:text-red-500">CS Subjects</a></li>
              <li><a href="#" className="hover:text-red-500">Striver's CP Sheet</a></li>
            </ul>
          </div>

          {/* DSA Playlist Links */}
          <div>
            <h3 className="mb-3 text-xl font-semibold text-white">DSA Playlist</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500">Array Series</a></li>
              <li><a href="#" className="hover:text-red-500">Graph Series</a></li>
              <li><a href="#" className="hover:text-red-500">DP Series</a></li>
              <li><a href="#" className="hover:text-red-500">LinkedList Series</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 mt-10 text-center border-t border-gray-700">
          <p className="text-sm text-gray-400">
            Copyright © 2024 Study Track | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
