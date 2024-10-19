// src/components/Companies.jsx

import React from 'react';

const Companies = () => {
  const companies = [
    { name: 'TCS', url: '/images/TCS.png'},
    { name: 'Accenture', url: '/images/Accenture.png'},
    { name: 'Infosys', url: '/images/infosys.png'},
    { name: 'Cognizant', url: '/images/co.png'},
    { name: 'Capgemini', url: '/images/capegimeni.png'},
    { name: 'Tech Mahindra', url: '/images/tech mahindra.png'},
  ];

  return (
    <div className="bg-black text-white py-10">
      <h2 className="text-center text-4xl font-bold mb-9">
        Gear Up for <span className="text-customRed">Success:</span> Your Ultimate Preparation Track!
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex justify-center items-center transition-transform transform hover:scale-110 duration-300"
          >
            <a href="#">
              <img src={company.url} alt={company.name} className="h-50 w-50 object-contain" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
