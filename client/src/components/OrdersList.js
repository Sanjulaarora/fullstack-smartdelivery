import React, { lazy, Suspense } from 'react';

const Order = lazy(() => import('./Order'));

const OrdersList = ({orders}) => {
  return (
    <>
      {orders.map((order) =>(
        <Suspense fallback={<div>Loading...</div>} key={order._id}>
          <Order key={order._id} order={order}/>
        </Suspense>
      )) }
    </>
  )
}

export default OrdersList;