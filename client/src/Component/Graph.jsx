import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import './chart.css';
import Footer from './Footer';

import { useEffect, useState } from 'react';
import axios from 'axios';
import {useStateValue} from './StateProvider';


export default function BasicBars() {

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


  return (
    <>
    <h1 className="text-center p-4 font-serif text-xl  font-bold">Weekly Attendance Report</h1>
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['1st Week', '2nd Week', '3rd Week', ] }]}
      series={[{ data: [details.attendance.week1.physics,details.attendance.week2.physics, details.attendance.week3.physics] }, { data: [details.attendance.week1.maths, details.attendance.week2.maths, details.attendance.week3.maths] }, { data: [details.attendance.week1.chemistry, details.attendance.week2.chemistry, details.attendance.week3.chemistry] }]}
      
    />
    <Footer/>
    </>
  );
}
