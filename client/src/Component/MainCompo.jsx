import React from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from './StateProvider';


const MainCompo = () => {

  const {state, dispatch} = useStateValue();

  const navigate = useNavigate();

  const handleLogout = async () => {
    // Handle logout logic here
    try {
      await axios.post('http://localhost:8080/auth/logout',null, {
        withCredentials: true, 
        credentials: 'include',
      });
      
      
      dispatch({
        type: 'LOGOUT'
      })
      navigate("/");


    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className=' flex items-center justify-between  p-4 bg-blue-100 rounded-md '>
          <h1 className='text-3xl text-extrabold font-serif'>EduTracker</h1>
           <button className="bg-blue-300 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600 font-serif" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default MainCompo;