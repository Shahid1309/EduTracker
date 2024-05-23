// import * as React from 'react';
// import { LineChart } from '@mui/x-charts/LineChart';
// // import './chart.css'; // Import the CSS file

// const maths = [75, 80, 25, 42, 88, 60];
// const chemistry = [7, 32, 38, 75, 40, 85];
// const physics = [65, 68, 62, 70, 5, 78];
// const xLabels = [
//   'quiz 1',
//   'quiz 2',
//   'Midterm',
//   'quiz 3',
//   'quiz 4',
//   'final',
// ];

// export default function SimpleLineChart() {
//   return (
//     <div className="chart-container">
      
//       <div className=' flex flex-col justify-center items-center bg-red-300'>
//       <h1 className="text-center p-4 font-serif text-lg"> [Student Name]'s Marks in Various Subjects</h1>
//          <LineChart
          
//            series={[
//              { data: maths, label: 'Maths' },
//             { data: chemistry, label: 'Chemistry' },
//              { data: physics, label: 'Physics' },
//            ]}
//            xAxis={[{ scaleType: 'point', data: xLabels }]}
//           className="w-full h-full mb-20"
//          />
       
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import Footer from './Footer';


Chart.register(...registerables);

const Graph = () => {
  const data = {
    labels: ['Quiz 1', 'Quiz 2', 'Mid Exam', 'Quiz 3', 'Quiz 4', 'Final Exam'],
    datasets: [
      {
        label: 'Maths',
        data: [75, 80, 25, 42, 88, 60],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Chemistry',
        data: [7, 32, 38, 75, 40, 85],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
      {
        label: 'Physics',
        data: [65, 68, 62, 70, 5, 78],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true,
        },
      },
      x: {
        grid: {
          display: true,
        },
      },
    },
  };

  return (
    <>
    <div className="max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg h-3/5 w-4/5 mt-10 mb-20">
      <h2 className="text-2xl font-bold mb-4 text-center">Subject-wise Marks</h2>
      <Line data={data} options={options}  />
    </div>
    <Footer/>
    </>
  );
};

export default Graph;
