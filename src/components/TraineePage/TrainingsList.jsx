import React from 'react'
import { AiOutlineNotification } from "react-icons/ai";
import AvailableTrainingsList from './AvailableTrainingsList';

const TrainingsList = () => {
  return (
    <div className='flex flex-col items-center justify-center px-2'>
      <div className="flex space-x-4 justify-start p-4 border-2 border-gray-800 mt-2 rounded-md">
        <AiOutlineNotification className='font-bold'/>
        <h1>Please complete your profile To Enroll</h1>
      </div>
       <AvailableTrainingsList/>
    </div>
  )
}

export default TrainingsList
