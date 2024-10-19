// Breadcrumb.js
import React from 'react';

const Breadcrumb = ({ path }) => {
  return (
    <nav className="bg-customBlack text-white px-4 py-2 rounded mb-4">
     <ol className="list-reset flex text-sm">
      {path.map((item, index) => (
        <span key={index} className="flex items-center">
          {item.onClick ? (
            <button 
              onClick={item.onClick} 
              className="hover: transition-colors duration-200 text-lg font-semibold"
            >
              {item.name}
            </button>
          ) : (
            <span className="text-customRed text-lg font-semibold">{item.name}</span>
          )}
          {index < path.length - 1 && (
            <span className="mx-2 text-gray-500"> &gt; </span>
          )}
        </span>
      ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
