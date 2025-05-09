import React from "react";

const Modal = ({ message, onClose }) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-gray-400 opacity-30"></div>
      <div
        className="relative bg-white px-8 py-6 rounded-xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-lg font-medium">{message}</p>
      </div>
    </div>
  );
};

export default Modal;
