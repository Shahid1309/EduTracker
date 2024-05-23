import React, { useState } from 'react';

const StudentActivities = () => {
  const [activities, setActivities] = useState({
    groupDiscussion: '',
    teacherInteraction: '',
    studentInteraction: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivities({ ...activities, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Activities:', activities);
    // You can add your update logic here
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Student Activities</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4">
          <div>
            <label htmlFor="groupDiscussion" className="block text-sm font-medium text-gray-700">
              Group Discussion
            </label>
            <input
              type="number"
              name="groupDiscussion"
              id="groupDiscussion"
              value={activities.groupDiscussion}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="teacherInteraction" className="block text-sm font-medium text-gray-700">
              Teacher Interaction
            </label>
            <input
              type="number"
              name="teacherInteraction"
              id="teacherInteraction"
              value={activities.teacherInteraction}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="studentInteraction" className="block text-sm font-medium text-gray-700">
              Student Interaction
            </label>
            <input
              type="number"
              name="studentInteraction"
              id="studentInteraction"
              value={activities.studentInteraction}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Update Activities
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentActivities;

