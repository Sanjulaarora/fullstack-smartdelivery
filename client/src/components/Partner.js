import React from 'react';
import { NavLink } from 'react-router-dom';

const Partner = ({partner}) => {
  return (
    <div className='m-10'>
      <div className='w-[500px] h-[300px] p-3 bg-gradient-to-b from-gray-900 to-blue-500 rounded-lg shadow-sm hover:scale-110'>
        <NavLink to={`/partners/${partner._id}`}>
          <div className='text-white'>
          <p className='text-center font-bold text-lg'>{partner.name}</p>
          <div className='flex justify-evenly'>
            <p className='font-semibold'>{partner.email}</p>
            <p className='font-semibold'>+91 {partner.number}</p>
          </div>
          <div className='flex flex-col justify-center items-center mt-5'>
            <p className='font-semibold'>Status: {partner.status}</p>
            <p className='font-semibold'> Current Load: {partner.currentLoad}</p>
            <p className='font-semibold'> Areas: {partner.areas[0]}</p>
            <p className='font-semibold'>Shift: {partner.shift.startTime} - {partner.shift.endTime}</p>
          </div>
          <div className='flex justify-evenly mt-5'>
            <p className='font-semibold'>Rating: {partner.metrics.rating}</p>
            <p className='font-semibold'>Completed Orders: {partner.metrics.completedOrders}</p>
            <p className='font-semibold'>Cancelled Orders: {partner.metrics.cancelledOrders}</p>
          </div>
        </div>
        <button className="w-28 h-8 bg-blue-400 text-white rounded-lg font-semibold mx-auto p-1 ml-20 mt-8 shadow-lg hover:scale-110">Edit Profile</button>
        </NavLink>  
      </div>
    </div>
  )
}

export default Partner;