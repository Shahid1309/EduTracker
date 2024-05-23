import React, { useState } from 'react';
import axios from 'axios';

const AttendanceUpdate = ({ studentId }) => {
  const [attendance, setAttendance] = useState({
    week1: { maths: '', physics: '', chemistry: '' },
    week2: { maths: '', physics: '', chemistry: '' },
    week3: { maths: '', physics: '', chemistry: '' },
    week4: { maths: '', physics: '', chemistry: '' },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [week, subject] = name.split('_');
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [week]: { ...prevAttendance[week], [subject]: value },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/students/${studentId}/attendance`, attendance);
      console.log('Updated Attendance:', response.data);
      // Handle success response (e.g., display a success message or redirect)
    } catch (error) {
      console.error('Error updating attendance:', error);
      // Handle error response (e.g., display an error message)
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6  bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Attendance</h2>
      <form onSubmit={handleSubmit}>
        {['week1', 'week2', 'week3', 'week4'].map((week) => (
          <div key={week} className="mb-4">
            <h3 className="text-lg font-semibold mb-2 capitalize">{week}</h3>
            {['maths', 'physics', 'chemistry'].map((subject) => (
              <div key={subject} className="mb-2">
                <label
                  htmlFor={`${week}_${subject}`}
                  className="block text-sm font-medium text-gray-700 capitalize"
                >
                  {subject}
                </label>
                <input
                  type="text"
                  name={`${week}_${subject}`}
                  id={`${week}_${subject}`}
                  value={attendance[week][subject]}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            ))}
          </div>
        ))}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Update Attendance
          </button>
        </div>
      </form>
    </div>
  );
};

export default AttendanceUpdate;
