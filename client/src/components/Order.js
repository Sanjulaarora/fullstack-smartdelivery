import React from 'react';
import { NavLink } from 'react-router-dom';

const Order = ({order}) => {
  return (
    <div className='m-10'>
      <div className='w-[500px] h-[440px] p-4 bg-gradient-to-b from-gray-900 to-blue-500 rounded-lg shadow-sm text-white hover:scale-110'>
        <NavLink to={`/orders/${order._id}`}>
          <p className='text-center text-xl font-bold'>Order {order.orderNumber}</p>
          <p className='text-center text-lg font-bold mt-3'>Customer</p>
          <div className='flex flex-col justify-center items-center'>
            <p className='font-bold'>Name: {order.customer.name}</p>
            <p className='font-bold'>Phone No.: {order.customer.phone}</p>
            <p className='font-bold'>Address: {order.customer.address}</p>
          </div>
          <p className='text-center font-bold'>Area: {order.area}</p>
          <p className='text-center text-lg font-bold mt-3'>Items</p>
          <ul className='flex justify-evenly'>
            <li className='font-semibold'>Item 1</li>
            <li className='font-semibold'>Item 2</li>
          </ul>
          <p className='text-center font-bold mt-4'>Order Status: {order.status}</p>
          <p className='text-center font-bold'>Schedules For: {order.scheduledFor}</p>
          <p className='text-center font-bold'>Assigned To: {order.assignedTo}</p>
          <p className='text-center font-bold'>Total Amount: {order.totalAmount}</p>
          <p className='text-center font-bold'>Created At: {(order.createdAt).slice(11,16)}</p>
          <p className='text-center font-bold'>Updated At: {(order.updatedAt).slice(11,16)}</p>
        </NavLink>  
      </div>
    </div>
  )
}

export default Order;