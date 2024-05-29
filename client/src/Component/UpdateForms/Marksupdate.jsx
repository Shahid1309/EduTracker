// import React, { useState, useEffect } from 'react';

// const MarksUpdate = () => {
//   const student = {
//     marks: {
//       q1: { physics: '85', chemistry: '78', maths: '90' },
//       q2: { physics: '88', chemistry: '82', maths: '92' },
//       mid: { physics: '75', chemistry: '70', maths: '85' },
//       q3: { physics: '80', chemistry: '85', maths: '88' },
//       q4: { physics: '82', chemistry: '87', maths: '91' },
//       final: { physics: '90', chemistry: '89', maths: '94' },
//     },
//   };
//   const [marks, setMarks] = useState(student?.marks || {});

//   useEffect(() => {
//     setMarks(student?.marks || {});
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     const [exam, subject] = name.split('.');
//     setMarks({
//       ...marks,
//       [exam]: {
//         ...marks[exam],
//         [subject]: value,
//       },
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Updated Marks:', marks);
//     // You can add your update logic here
//   };

//   if (!student) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-bold mb-6 text-center">Update Marks</h2>
//       <form onSubmit={handleSubmit}>
//         {Object.keys(marks).map((exam) => (
//           <div key={exam} className="mb-4">
//             <h3 className="text-xl font-semibold mb-2 capitalize">{exam.replace('q', 'Quiz ').replace('mid', 'Mid Exam ').replace('final', 'Final Exam ')}</h3>
//             <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
//               {Object.keys(marks[exam]).map((subject) => (
//                 <div key={subject}>
//                   <label htmlFor={`${exam}.${subject}`} className="block text-sm font-medium text-gray-700 capitalize">
//                     {subject}
//                   </label>
//                   <input
//                     type="number"
//                     name={`${exam}.${subject}`}
//                     id={`${exam}.${subject}`}
//                     value={marks[exam][subject]}
//                     onChange={handleChange}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//         <div className="mt-6 text-center">
//           <button
//             type="submit"
//             className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//           >
//             Update Marks
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default MarksUpdate;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MarksUpdate = () => {
  const [email, setEmail] = useState('');
  const [marks, setMarks] = useState({
    q1: { physics: '', chemistry: '', maths: '' },
    q2: { physics: '', chemistry: '', maths: '' },
    mid: { physics: '', chemistry: '', maths: '' },
    q3: { physics: '', chemistry: '', maths: '' },
    q4: { physics: '', chemistry: '', maths: '' },
    final: { physics: '', chemistry: '', maths: '' },
  });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const fetchMarks = async () => {
    try {
      const response= await axios.get(`http://localhost:8080/getdetails/${email}`,)
    console.log(response.data);
      setMarks(response.data.resp.marks);
    } catch (error) {
      console.error('Error fetching marks:', error);
    }
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response= await axios.patch('http://localhost:8080/update',{
      updateData:{
        email,
        marks
      }
    } )
      // Handle success response (e.g., display a success message or redirect)
    } catch (error) {
      console.error('Error updating marks:', error);
      // Handle error response (e.g., display an error message)
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Marks</h2>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Student Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <div className="text-center mt-2">
          <button
            type="button"
            onClick={fetchMarks}
            className="px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Fetch Marks
          </button>
        </div>
      </div>
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




