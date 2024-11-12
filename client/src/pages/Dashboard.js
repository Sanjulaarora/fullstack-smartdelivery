import React from 'react';

const Dashboard = () => {
  return (
    <div>
      <ul className='mt-20 flex flex-col md:flex-row justify-center items-center md:justify-evenly'>
        <div className='flex flex-col'>
          <li className='text-center font-bold mt-4 md:mt-0'>Key Metrics</li>
          <li className='text-blue-950 text-center font-semibold'>Success Rate: 67.67</li>
        </div>
        <div className='flex flex-col'>
          <li className='font-bold mt-4 md:mt-0'>Active Orders</li>
          <li className='text-blue-950 text-center font-semibold'>3</li>
        </div>
        <div className='flex flex-col'>
          <li className='font-bold mt-4 md:mt-0'>Partner Availability Status</li>
          <li className='text-blue-950 text-center font-semibold'>1 Active, 2 Inactive</li>
        </div>
        <div className='flex flex-col'>
          <li className='font-bold mt-4 md:mt-0'>Recent Assignments</li>
          <li className='text-blue-950 text-center font-semibold'>3</li>
        </div>
      </ul>
    </div>
  )
}

export default Dashboard;