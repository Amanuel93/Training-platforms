import React from 'react'
import Deletealert from './Deletealert'
import Editdrawer from './Editdrawer'

const Trainingcard = ({item}) => {
  return (
  <div key={item.id} className="bg-white shadow-2xl rounded-lg px-4 pt-6 py-2 max-w-sm transition-transform transform hover:scale-105 hover:shadow-2xl">
    <div className="text-lg font-bold mb-2 text-indigo-700">{item.title}</div>
      <p className="text-gray-600 text-justify">{item.description}</p>
    <div className="mt-3">
      <span className="block text-sm font-semibold text-gray-500">Department: <span className="text-gray-700"> {item.department}</span></span>
    </div>
    <div className="mt-3">
      <span className="block text-sm font-semibold text-gray-500">Position:  <span className="text-gray-700"> {item.position}</span></span>
    </div>
    <div className="mt-3">
      <span className="block text-sm font-semibold text-gray-500">Duration:  <span className="text-gray-700"> {item.duration}</span></span>
    </div>
    <div className="flex justify-between mt-2">
      <div className="flex space-x-4 px-2">
       <Editdrawer />
       <h1 className='text-red-600'>
       <Deletealert />
      </h1>
     </div>
     <button className='font-semibold'>Edit contents</button>
   </div>
  </div> 
  )
}

export default Trainingcard
