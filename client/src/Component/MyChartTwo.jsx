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
      
      <h2 className="text-2xl font-bold  text-center pt-6 font-serif">Activity Distribution</h2>
      <div className="max-w-xl mx-auto p-10 rounded-lg h-4/5 w-4/5">
        
        <Pie data={data} />
      </div>
      
      <Footer />
    </>
  );
};

export default PieChart;
