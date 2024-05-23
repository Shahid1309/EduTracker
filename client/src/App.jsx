
import Dashboard from './Component/Dashboard';
import Profile from './Component/Profile';
import About from './Component/About';
import Help from './Component/Help';
import AddStudent from './Component/AddStudent';
import DeleteStudent from './Component/DeleteStudent';
import SetNotifications from './Component/SetNotifications';
import Logout from './Component/Logout';  
import LoginPage from './Component/LoginPage'
import AdminLayout from './Component/AdminLayout'
import MyChart from './Component/MyChart'
import MyChartTwo from './Component/MyChartTwo'
import Graph from './Component/Graph'
import RegisterStudent from './Component/RegisterStudent'
import StudentList from './Component/StudentList'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useStateValue } from './Component/StateProvider';

import AttendanceUpdate from './Component/UpdateForms/AttendanceUpdate';
import MarksUpdate from './Component/UpdateForms/Marksupdate';
import EngagementUpdate from './Component/UpdateForms/EngagementUpdate';

const App = () => {
  const {state,dispatch} = useStateValue();
  return (
  
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/adminlayout" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} />
        <Route path="add-student" element={<AddStudent />} />
        <Route path="delete-student" element={<DeleteStudent />} />
        <Route path="register-student" element={<RegisterStudent />} />
        <Route path='student-list' element={<StudentList/>}/>
        <Route path="set-notifications" element={<SetNotifications />} />
        <Route path="logout" element={<Logout />} />
        <Route path='mycharts' element={<MyChart/>} />
        <Route path='mycharttwo' element={<MyChartTwo/>}/>
        <Route path='graph' element={<Graph/>}/>

        <Route path='update-attendance' element={<AttendanceUpdate/>}/>
        <Route path='update-marks' element={<MarksUpdate/>}/>
        <Route path='update-engagement' element={<EngagementUpdate/>}/>


        <Route path="/adminlayout" element={<Navigate to="/adminlayout/profile" />} />
      </Route>
    </Routes>
  </Router>
  );
};

export default App;





