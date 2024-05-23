import React from "react";
import MyChart from "./MyChart";
import MyChartTwo from "./MyChartTwo";
import Graph from "./Graph";
import Task from "./Task";
import Footer from "./Footer";



const Dashboard = () => { 
  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="bg-gray-100 flex-grow rounded-md">
          <MyChart />
        </div>
        <div className="bg-gray-100  rounded-md">
          <h1 className="text-center p-4 font-serif text-lg">
          [Student Name]'s Engagement in Various Activities
          </h1>
          <MyChartTwo />
        </div>
        <div className="bg-gray-100 rounded-md">
          <h1 className="text-center p-4 font-serif text-lg">
          [Student Name]'s Weekly Attendance Report 
          </h1>
          <Graph />
        </div>
        <div className="bg-gray-100">
          <Task/>
        </div>
        {/* <Notification/> */}
      </div>
      <div className=" "> 
      
        <Footer/>
      </div>
    </div>
  );
};

export default Dashboard;
