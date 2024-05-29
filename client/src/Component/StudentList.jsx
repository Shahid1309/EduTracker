import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const StudentList = () => {

  const [students, setStudents] = useState([]);
    // let res=[];
  
    
    useEffect(() => {
      const wrapper = async () => {
      var response = await axios.get('http://localhost:8080/getstudents')
      setStudents(response.data.resp);
      console.log(response.data);
    }
      wrapper();
    },[])
  

  const handleUpdate = (id) => {
    // Update logic here
    console.log('Update student with id:', id);
  };

  const handleRemove = async (email) => {
    const del = await axios.delete(`http://localhost:8080/deletestudent/${email}`);
    setStudents(students.filter(student => student.email !== email));
  };

  return (
    <div className="  p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Student List</h2>
      <div className="grid grid-cols-1 gap-4">
        {students.map(student => (
          <div className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm">
            <div>
              <p className="text-lg font-medium">{student.firstName + " " + student.lastName}</p>
              <p className="text-sm text-gray-600">{student.email}</p>
            </div>
            <div className="flex space-x-2">
              
              <button
                onClick={() => handleRemove(student.email)}
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
