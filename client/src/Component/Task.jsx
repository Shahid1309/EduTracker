import React from 'react';

const StudentTask = ({ title, description, dueDate, course, teacher }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Due: {dueDate}</span>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">Complete</button>
      </div>
      <div className="flex mt-4">
        <div className="flex items-center mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-500">{course}</span>
        </div>
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          <span className="text-gray-500">{teacher}</span>
        </div>
      </div>
    </div>
  );
};

const TaskList = () => {
  const tasks = [
    {
      id: 1,
      title: 'Complete Math Homework',
      description: 'Complete exercises 1 to 5 from chapter 3.',
      dueDate: '2024-05-15',
      course: 'Mathematics',
      teacher: 'Mr. Smith',
    },
    {
      id: 2,
      title: 'Read Chapter 4',
      description: 'Read and summarize chapter 4 of the textbook.',
      dueDate: '2024-05-20',
      course: 'Literature',
      teacher: 'Ms. Johnson',
    },
    // Add more tasks here...
  ];

  return (
    <div>
      {tasks.map(task => (
        <StudentTask
          key={task.id}
          title={task.title}
          description={task.description}
          dueDate={task.dueDate}
          course={task.course}
          teacher={task.teacher}
        />
      ))}
    </div>
  );
};

export default TaskList;
