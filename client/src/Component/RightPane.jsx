// RightPane.jsx
import React from 'react';

const RightPane = ({ children }) => {
  return (
    <div className="bg-gray-100 w-3/4 h-screen p-4">
      {children}
    </div>
  );
};

export default RightPane;
