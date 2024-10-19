import React from 'react';
import { FaFolder } from 'react-icons/fa';

const FolderList = ({ folders, handleFolderClick }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-5   ">
    
      {Object.keys(folders).map((folderName) => (
        <div
          key={folderName}
          onClick={() => handleFolderClick(folderName, folders[folderName])}
          className="flex items-center bg-customBlack p-4 rounded-lg cursor-pointer hover:bg-customHover"
        >
          <FaFolder className="text-yellow-400 mr-3" size={24} />
          <span className="text-lg">{folderName}</span>
        </div>
      ))}
    </div>
  );
};

export default FolderList;
