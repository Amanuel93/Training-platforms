import React from 'react'
import { SlPower } from "react-icons/sl";
import { BsPersonCircle } from "react-icons/bs";

const DashboardHeader = ({header,role,logo}) => {
  return (
    // <div className='md:flex justify-between px-4 pt-6 pb-2 hidden shadow-gray-400 shadow-2xl'>
    <div className='flex justify-between px-4 pt-6 pb-2 shadow-gray-400 shadow-2xl'>
      {
       !logo 
        ?
      <h1 className='font-medium text-lg'>{header}</h1>
         :
      <img src={logo} alt="Ethiopost logo"  className="h-14 w-14 rounded-full"/>
      }
      <div className="flex  space-x-4 pr-3">
        <div className="flex items-center space-x-2">
            <BsPersonCircle/>
            <h1>{role}</h1>
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
            <SlPower className='text-red-600'/>
            <h1>Logout</h1>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
