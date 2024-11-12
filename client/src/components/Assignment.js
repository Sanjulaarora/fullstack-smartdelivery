import React from 'react';
import { NavLink } from 'react-router-dom';

const Assignment = ({assignment}) => {
  return (
    <div className='m-10'>
      <div className='w-[400px] h-[240px] p-8 bg-gradient-to-b from-gray-900 to-blue-500 rounded-lg shadow-sm text-white hover:scale-110'>
        <NavLink to={`/assignments/${assignment._id}`}>
          <p className='text-center text-xl font-bold'>Assignment</p>
          <div className='flex flex-col justify-center items-center mt-5'>
            <p className='text-md font-bold'>Order Id: {assignment.orderId}</p>
            <p className='text-md font-bold'>Partner Id: {assignment.partnerId}</p>
            <p className='text-md font-bold'>TimeStamp: {(assignment.timestamp).slice(11,16)}</p>
            <p className='text-md font-bold'>Status: {assignment.status}</p>
            <p className='text-md font-bold'>Reason</p>
          </div>   
        </NavLink>  
      </div>
    </div>
  )
}

export default Assignment;