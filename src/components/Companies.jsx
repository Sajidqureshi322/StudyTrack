// src/components/Companies.jsx

import React from 'react';

const Companies = () => {
  return (
    <div className="bg-black text-white py-10">
      <h2 className="text-center text-3xl font-bold mb-5">
        Gear Up for <span className="text-red-600">Success:</span> Your Ultimate Preparation Track!
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <div className="flex justify-center items-center">
         <a href=""> <img src="https://logo.clearbit.com/tcs.com" alt="TCS" className="h-50 w-50" /> </a>
        </div>
        <div className="flex justify-center items-center">
         <a href=""><img src="https://logo.clearbit.com/accenture.com" alt="Accenture" className="h-50 w-50" /> </a> 
        </div>
        <div className="flex justify-center items-center">
         <a href=""> <img src="https://logo.clearbit.com/infosys.com" alt="Infosys" className="h-50 w-50" /> </a>
        </div>
        <div className="flex justify-center items-center">
         <a href=""> <img src="https://logo.clearbit.com/cognizant.com" alt="Cognizant" className="h-50 w-50" /> </a>
        </div>
        <div className="flex justify-center items-center">
          <a href=""><img src="https://logo.clearbit.com/capgemini.com" alt="Capgemini" className="h-50 w-50" /> </a>
        </div>
        <div className="flex justify-center items-center">
         <a href=""> <img src="https://logo.clearbit.com/techmahindra.com" alt="Tech Mahindra" className="h-50 w-50" /> </a>
        </div>
      </div>
    </div>
  );
};

export default Companies;
