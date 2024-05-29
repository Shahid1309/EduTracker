import React, { useEffect } from 'react'
import LeftPane from './LeftPane'
import MainCompo from './MainCompo'
import { Outlet, useNavigate } from 'react-router-dom'
import { useStateValue } from './StateProvider'

const AdminLayout = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useStateValue();
//   useEffect(() => {
//     if(!state.userType){
//       console.log("Before Navigate")
//       navigate('/')
//   }
// },[]);

  return (
   
    <div className="flex flex-row h-auto w-auto">
    <LeftPane />
    <div className="flex flex-col w-full min-h-screen">
      <MainCompo />
      <Outlet />
    </div>
  </div>
  )
}

export default AdminLayout
