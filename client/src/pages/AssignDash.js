import React, { lazy, Suspense, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAssignments } from '../features/assignmentSlice';
import { fetchMetrics } from '../features/metricsSlice';

const AssignsList = lazy(() => import('../components/AssignsList'));

const AssignDash = () => {
  const { data, isLoading, isError } = useSelector((state) => state.assignments);
  const dispatch = useDispatch();

  const { dataMetrics, isLoadingMetrics, isErrorMetrics } = useSelector((state) => state.metrics);
  const dispatchMetrics = useDispatch();

  useEffect(() => {
    dispatch(fetchAssignments());
  }, [dispatch]);

  useEffect(() => {
    dispatchMetrics(fetchMetrics());
  }, [dispatchMetrics]);

  const assignments = data;

  const metrics = dataMetrics;

  return (
    <div>
      <div className='flex justify-center mt-1 p-1'>
        <div id='assignments' className='flex flex-wrap'>
          {isLoading && <p className='font-bold'>Loading.....</p>}
          {!isLoading && isError && <p className='font-bold'>Error</p>}
          {!isLoading && !isError && (assignments.length ?
          <div id='assignments-list' className='flex flex-wrap justify-center items-center'>
            <Suspense fallback={<div className='font-bold'>Loading...</div>}>
              <AssignsList assignments={assignments}/>
            </Suspense>
          </div>
          : 
          <p>No new Assigned Orders are present currently.</p>
          )}
        </div>
      </div>
      <p className='text-center text-xl font-extrabold mt-16'>Assignment Metrics</p>
          {isLoadingMetrics && <p className='text-center font-bold'>Loading.....</p>}
          {!isLoadingMetrics && isErrorMetrics && <p className='text-center font-bold'>Error</p>}
          {!isLoadingMetrics && !isErrorMetrics && (metrics.length ?
            <div>
              <div className='flex flex-col md:flex-row justify-center items-center md:justify-evenly'>
                <p className='text-lg font-bold mt-4 md:mt-0'>Total Assignments: {metrics[0].totalAssigned}</p>
                <p className='text-lg font-bold mt-4 md:mt-0'>Success Rate: {metrics[0].successRate}</p>
                <p className='text-lg font-bold mt-4 md:mt-0'>Average Time Taken: {metrics[0].averageTime}</p>
                <div className='flex flex-col justify-center items-center'>
                  <p className='text-lg font-bold mt-4 md:mt-4'>Failures :</p>
                  <p className='text-blue-950 text-base font-semibold mt-4 md:mt-0'>Reason: {metrics[0].failureReasons[0].reason}</p>
                  <p className='text-blue-950 text-base font-semibold mt-2 md:mt-0'>Count: {metrics[0].failureReasons[0].count}</p>
                  <p className='text-blue-950 text-base font-semibold mt-2 md:mt-0'>Id: {metrics[0].failureReasons[0]._id}</p>
                </div>
              </div>
            </div>
            : 
            <p>No Metrics.</p>
            )}
    </div>
  )
}

export default AssignDash;