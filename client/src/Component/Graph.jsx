import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import './chart.css';
import Footer from './Footer';

export default function BasicBars() {
  return (
    <>
    <h1 className="text-center p-4 font-serif text-lg">Weekly Attendance Report</h1>
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['1st Week', '2nd Week', '3rd Week', ] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      
    />
    <Footer/>
    </>
  );
}
