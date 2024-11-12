import React, { lazy, Suspense } from 'react';

const Partner = lazy(() => import('./Partner'));

const PartnersList = ({partners}) => {
  return (
    <>
      {partners.map((partner) =>(
        <Suspense fallback={<div>Loading...</div>} key={partner._id}>
          <Partner key={partner._id} partner={partner}/>
        </Suspense>
      ))} 
    </>
  )
}

export default PartnersList;