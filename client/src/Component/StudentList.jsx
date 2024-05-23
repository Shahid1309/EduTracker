import React, { useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  ]);

  const handleUpdate = (id) => {
    // Update logic here
    console.log('Update student with id:', id);
  };

  const handleRemove = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <div className="  p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Student List</h2>
      <div className="grid grid-cols-1 gap-4">
        {students.map(student => (
          <div key={student.id} className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm">
            <div>
              <p className="text-lg font-medium">{student.name}</p>
              <p className="text-sm text-gray-600">{student.email}</p>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleUpdate(student.id)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Update
              </button>
              <button
                onClick={() => handleRemove(student.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentList;
