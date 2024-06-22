

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useStateValue } from './StateProvider';

import { 
  UserIcon, 
  ChartBarIcon, 
  AcademicCapIcon, 
  ClipboardListIcon, 
  UserAddIcon, 
  UsersIcon, 
  PencilAltIcon, 
  CheckIcon, 
  LightningBoltIcon, 
  InformationCircleIcon, 
  QuestionMarkCircleIcon 
} from '@heroicons/react/outline';





const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const {state, dispatch} = useStateValue();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`bg-blue-50 ${isOpen ? 'w-64' : 'w-18'} flex flex-col items-center justify-between transition-all duration-300 h-screen sticky top-0`}>
      <div className="py-4">
        {/* Logo or Branding */}
       
        
        {/* Navigation Links */}
        <nav>
          <ul className="space-y-2 font-serif">
           
            <NavItem to="profile" text="Profile" Icon={UserIcon} isOpen={isOpen} />
            {state.userType=='student'?<NavItem to="mycharts" text="Marks" Icon={ChartBarIcon} isOpen={isOpen} />:null}
            {state.userType=='student'?<NavItem to="myCharttwo" text="Engagement" Icon={AcademicCapIcon} isOpen={isOpen} />:null}
            {state.userType=='student'?<NavItem to="graph" text="Attendance" Icon={ClipboardListIcon} isOpen={isOpen} />:null}
            {state.userType=='teacher'?<NavItem to="register-student" text="Register Student" Icon={UserAddIcon} isOpen={isOpen} />:null}
            {state.userType=='teacher'?<NavItem to="student-list" text="Student List" Icon={UsersIcon} isOpen={isOpen} />:null}
            {state.userType=='teacher'?<NavItem to="update-marks" text="Marks Update" Icon={PencilAltIcon} isOpen={isOpen} />:null}
            {state.userType=='teacher'?<NavItem to="update-attendance" text="Attendance Update" Icon={CheckIcon} isOpen={isOpen} />:null}
            {state.userType=='teacher'?<NavItem to="update-engagement" text="Engagement Update" Icon={LightningBoltIcon} isOpen={isOpen} />:null}
            <NavItem to="about" text="About Us" Icon={InformationCircleIcon} isOpen={isOpen} />
            <NavItem to="help" text="Help" Icon={QuestionMarkCircleIcon} isOpen={isOpen} />

          </ul>
        </nav>
      </div>
      
      {/* Toggle Button */}
      <button onClick={toggleNavbar} className="py-2 px-4 bg-blue-200 text-white hover:bg-blue-300 focus:outline-none">
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        )}
      </button>
    </div>
  );
};

const NavItem = ({ to, text, Icon, isOpen }) => {
  return (
    <li>
      <Link to={to} className={`flex items-center space-x-2 px-4 py-2 hover:bg-gray-200 rounded-lg ${isOpen ? '' : 'text-center'}`}>
        <Icon className="h-6 w-6" />
        {isOpen && <span>{text}</span>}
      </Link>
    </li>
  );
};

export default SideNavbar;

