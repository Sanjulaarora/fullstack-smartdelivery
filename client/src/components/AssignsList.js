import React, { lazy, Suspense } from 'react';

const Assignment = lazy(() => import('./Assignment'));

const AssignsList = ({assignments}) => {
  return (
    <>
      {assignments.map((assignment) =>(
        <Suspense fallback={<div>Loading...</div>} key={assignment._id}>
          <Assignment key={assignment._id} assignment={assignment}/>
        </Suspense>
      )) }
    </>
  )
}

export default AssignsList;