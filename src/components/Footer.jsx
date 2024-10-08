import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Study Track</h2>
            <p className="text-sm text-gray-400">
              The best place to learn data structures, algorithms, most asked coding interview questions, and real interview experiences free of cost.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500">About Us</a></li>
              <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-red-500">Policy Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Quick Access Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">Quick Access</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500">Striver's DSA</a></li>
              <li><a href="#" className="hover:text-red-500">Sheet/Striver's DSA Playlist</a></li>
              <li><a href="#" className="hover:text-red-500">CS Subjects</a></li>
              <li><a href="#" className="hover:text-red-500">Striver's CP Sheet</a></li>
            </ul>
          </div>

          {/* DSA Playlist Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-3">DSA Playlist</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-500">Array Series</a></li>
              <li><a href="#" className="hover:text-red-500">Graph Series</a></li>
              <li><a href="#" className="hover:text-red-500">DP Series</a></li>
              <li><a href="#" className="hover:text-red-500">LinkedList Series</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            Copyright © 2024 Study Track | All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
