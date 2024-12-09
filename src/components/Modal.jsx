import React, { useEffect } from 'react';

const Modal = ({ isOpen, message = "Are you sure you solved this question?", onConfirm, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Enter') {
        onConfirm();
        setTimeout(onClose, 50); // Ensures modal closes after confirming
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onConfirm, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-black p-6 rounded-lg shadow-lg max-w-md w-full transform transition-transform duration-300 ease-in-out scale-105">
        <h2 className="text-xl font-semibold mb-4 text-center">Confirmation</h2>
        <p className="text-center mb-6">{message}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => { onConfirm(); onClose(); }}
            className="bg-customRed hover:bg-customPinkHover text-white py-2 px-4 rounded-md"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            className="bg-customRed hover:bg-customPinkHover text-white py-2 px-4 rounded-md"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
