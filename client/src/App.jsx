
import Dashboard from './Component/Dashboard';
import Profile from './Component/Profile';
import About from './Component/About';
import axios from 'axios';
import Help from './Component/Help';
import LoginPage from './Component/LoginPage'
import AdminLayout from './Component/AdminLayout'
import MyChart from './Component/MyChart'
import MyChartTwo from './Component/MyChartTwo'
import Graph from './Component/Graph'
import RegisterStudent from './Component/RegisterStudent'
import StudentList from './Component/StudentList'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useStateValue } from './Component/StateProvider';
import { useEffect } from 'react';
import AttendanceUpdate from './Component/UpdateForms/AttendanceUpdate';
import MarksUpdate from './Component/UpdateForms/Marksupdate';
import EngagementUpdate from './Component/UpdateForms/EngagementUpdate';
import RegisterTeacher from './Component/RegisterTeacher';

const App = () => {
  const {state,dispatch} = useStateValue();
  // const navigate = useNavigate();

  useEffect(() => {
    const initial = async () => {
      const getData = await axios
        .get("http://localhost:8080", {
          withCredentials: true,
          credentials: 'include',
        })
        .then((res) => res?.data);
      if (getData)
      {
        dispatch({
          type: "INITIAL",
          state: getData,
        });
      // console.log(getData);
      // if(state.userType==="student")
      //   navigate('/adminlayout');
      //   else if(state.userType==="teacher") 
      //     navigate('adminlayout/profile');
    }
        else return;
    };
    initial();
  }, []);

  return (
  
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/adminlayout" element={<AdminLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
        <Route path="about" element={<About />} />
        <Route path="help" element={<Help />} />
        <Route path="register-student" element={<RegisterStudent />} />
        <Route path='student-list' element={<StudentList/>}/>
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
  // <RegisterTeacher/>
  );
};

export default App;





