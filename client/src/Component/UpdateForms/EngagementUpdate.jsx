import React, { useState } from 'react';
import axios from 'axios';

const StudentActivities = () => {
  const [activities, setActivities] = useState({
    groupDiscussion: '',
    teacherInteraction: '',
    studentInteraction: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivities({ ...activities, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can add your update logic here
    const response = await axios.patch('http://localhost:8080/update', {
      updateData: {
        email: `${activities.email}`,
        engagement: {
          si: activities.studentInteraction,
          gd: activities.groupDiscussion,
          ti: activities.teacherInteraction,
        },
      },
    });
  };

  const handleFetch = async () => {
    // Fetch logic goes here, for example:
    console.log('Fetching');
    const response = await axios.get(`http://localhost:8080/getdetails/${activities.email}`);
    console.log(response.data);
    setActivities({
      teacherInteraction: response.data.resp.engagement.ti,
      groupDiscussion: response.data.resp.engagement.gd,
      studentInteraction: response.data.resp.engagement.si,
      email: activities.email,
    });
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
          <div className="flex items-center">
            <div className="flex-grow">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={activities.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="button"
              onClick={handleFetch}
              className="ml-4 px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Fetch
            </button>
          </div>
        </div>
        <div className="mt-6 text-center">
          <button
            type="submit"
            onClick={handleSubmit}
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
