import React, { useState, useEffect } from 'react';

const MarksUpdate = () => {
  const student = {
    marks: {
      q1: { physics: '85', chemistry: '78', maths: '90' },
      q2: { physics: '88', chemistry: '82', maths: '92' },
      mid: { physics: '75', chemistry: '70', maths: '85' },
      q3: { physics: '80', chemistry: '85', maths: '88' },
      q4: { physics: '82', chemistry: '87', maths: '91' },
      final: { physics: '90', chemistry: '89', maths: '94' },
    },
  };
  const [marks, setMarks] = useState(student?.marks || {});

  useEffect(() => {
    setMarks(student?.marks || {});
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const [exam, subject] = name.split('.');
    setMarks({
      ...marks,
      [exam]: {
        ...marks[exam],
        [subject]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated Marks:', marks);
    // You can add your update logic here
  };

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Marks</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(marks).map((exam) => (
          <div key={exam} className="mb-4">
            <h3 className="text-xl font-semibold mb-2 capitalize">{exam.replace('q', 'Quiz ').replace('mid', 'Mid Exam ').replace('final', 'Final Exam ')}</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {Object.keys(marks[exam]).map((subject) => (
                <div key={subject}>
                  <label htmlFor={`${exam}.${subject}`} className="block text-sm font-medium text-gray-700 capitalize">
                    {subject}
                  </label>
                  <input
                    type="number"
                    name={`${exam}.${subject}`}
                    id={`${exam}.${subject}`}
                    value={marks[exam][subject]}
                    onChange={handleChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Update Marks
          </button>
        </div>
      </form>
    </div>
  );
};

export default MarksUpdate;
