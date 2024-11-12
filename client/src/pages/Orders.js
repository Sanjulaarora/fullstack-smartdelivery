import React, { lazy, Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOrders } from '../features/orderSlice';

const OrdersList = lazy(() => import('../components/OrdersList'));

const Orders = () => {
  const { data, isLoading, isError } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const orders = data;

  return (
    <div>
      <div className='flex justify-center mt-1 p-1'>
        <div id='orders' className='flex flex-wrap'>
          {isLoading && <p className='font-bold'>Loading.....</p>}
          {!isLoading && isError && <p className='font-bold'>Error</p>}
          {!isLoading && !isError && (orders.length ?
          <div id='orders-list' className="flex flex-wrap justify-center items-center">
            <Suspense fallback={<div className='font-bold'>Loading...</div>}>
              <OrdersList orders={orders}/>
            </Suspense>
          </div>
          : 
          <p>No orders are present currently.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Orders;