import React from 'react'
import LeftPane from './LeftPane'
import MainCompo from './MainCompo'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    
    //   <div className="flex flex-row h-screen  ">
    //     <LeftPane/>
    //     <div className="flex flex-col w-full min-h-screen  ">
    //      <MainCompo/>
    //      <Outlet/>
    //     </div>
    // </div>
    
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
