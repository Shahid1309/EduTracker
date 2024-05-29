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


// import React from 'react';
// import { Pie } from 'react-chartjs-2';
// import Footer from './Footer';
// import axios from 'axios';
// import { useStateValue } from './StateProvider';
// import {useState, useEffect} from 'react';

// const PieChart = () => {
//   const {state} = useStateValue();
//   const [details, setDetails] = useState(null);

//   useEffect(() => {
//     const initial = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/getdetails/${state.email}`);
//         console.log(response.data.resp);
//         setDetails(response.data.resp);
//       } catch (error) {
//         console.error('Error fetching details:', error);
//       }
//     };
//     initial();
//   }, []);

//   // Sample data representing the percentages
//   const data = {
//     labels: ['Group Discussion', 'Teachers Interaction', 'Students Interaction'],
//     datasets: [
//       {
//         data: [details.engagement.gd, details.engagement.ti, details.engagement.si], // percentages for each category
//         backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // colors for each category
//         hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
//       },
//     ],
//   };

//   return (
//     <>
//     <div className="max-w-xl mx-auto p-4   rounded-lg h-4/5 w-4/5">
//       <h2 className="text-2xl font-bold mb-4 text-center">Activity Distribution</h2>
//       <Pie data={data} />
//     </div>
//     <Footer/>
//     </>
//   );
// };

// export default PieChart;




import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import Footer from './Footer';
import axios from 'axios';
import { useStateValue } from './StateProvider';

const PieChart = () => {
  const { state } = useStateValue();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const initial = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/getdetails/${state.email}`);
        console.log(response.data.resp);
        setDetails(response.data.resp);
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };
    initial();
  }, [state.email]);

  if (!details || !details.engagement) {
    return <div>Loading...</div>; // or any loading indicator you prefer
  }

  const data = {
    labels: ['Group Discussion', 'Teachers Interaction', 'Students Interaction'],
    datasets: [
      {
        data: [details.engagement.gd, details.engagement.ti, details.engagement.si], // percentages for each category
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], // colors for each category
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  return (
    <>
      <div className="max-w-xl mx-auto p-4 rounded-lg h-4/5 w-4/5">
        <h2 className="text-2xl font-bold mb-4 text-center">Activity Distribution</h2>
        <Pie data={data} />
      </div>
      <Footer />
    </>
  );
};

export default PieChart;
