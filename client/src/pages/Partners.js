import React, { lazy, Suspense, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPartners } from '../features/partnerSlice';

const PartnersList = lazy(() => import('../components/PartnersList'));

const Partners = () => {
  const { data, isLoading, isError } = useSelector((state) => state.partners);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPartners());
  }, [dispatch]);

  const partners = data;

  return (
    <div>
      <header className='mt-8'>
        <div className='flex justify-center'>
          <NavLink to='/partners/register'>
            <span className='text-blue-950 text-lg font-bold p-1'>Register Delivery Partner</span>
          </NavLink>
        </div>
      </header>   
      <div className='flex justify-center mt-1 p-1'>
        <div id='partners' className='flex flex-wrap'>
          {isLoading && <p className='font-bold'>Loading.....</p>}
          {!isLoading && isError && <p className='font-bold'>Error</p>}
          {!isLoading && !isError && (partners.length ?
          <div id='partners-list' className='flex flex-wrap justify-center items-center'>
            <Suspense fallback={<div className='font-bold'>Loading...</div>}>
              <PartnersList partners={partners}/>
            </Suspense>
          </div>
          : 
          <p>No Registered Partner is present.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Partners;