// import * as React from 'react';
// import { PieChart } from '@mui/x-charts/PieChart';
// import './chart.css';

// const data = [
//   { id: 0, value: 10, label: 'Group Discussion' },
//   { id: 1, value: 15, label: 'Teacheers interaction' },
//   { id: 2, value: 20, label: 'Students interaction' },
// ];

// export default function PieActiveArc() {
//   return (
//     <>
//     <h1 className="text-center p-4 font-serif text-lg">[Student Name]'s Engagement in Various Activities</h1>
//     <PieChart
//       series={[
//         {
//           data,
//           highlightScope: { faded: 'global', highlighted: 'item' },
//           faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
//         },
//       ]}
      
//     />
//     </>
//   );
// }


import React from 'react';
import { Pie } from 'react-chartjs-2';
import Footer from './Footer';

const PieChart = () => {
  // Sample data representing the percentages
  const data = {
    labels: ['Group Discussion', 'Teachers Interaction', 'Students Interaction'],
    datasets: [
      {
        data: [30, 40, 30], // percentages for each category
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // colors for each category
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <>
    <div className="max-w-xl mx-auto p-4   rounded-lg h-4/5 w-4/5">
      <h2 className="text-2xl font-bold mb-4 text-center">Activity Distribution</h2>
      <Pie data={data} />
    </div>
    <Footer/>
    </>
  );
};

export default PieChart;
