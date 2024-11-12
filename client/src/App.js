import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Partners = lazy(() => import('./pages/Partners'));
const PartnerRegister = lazy(() => import('./components/PartnerRegister'));
const Orders = lazy(() => import('./pages/Orders'));
const AssignDash = lazy(() => import('./pages/AssignDash'));

function App() {
  return (
    <div className='flex flex-col flex-start min-h-screen overflow-y-auto bg-gradient-to-b from-gray-600 to-blue-300'>
      <NavBar />
      <Suspense fallback = {<div>Loading...</div>}>
        <Routes>
          <Route path='/' element ={ <Dashboard />} />
          <Route path='/partners' element = { <Partners /> } />
          <Route path='/partners/register' element = { <PartnerRegister />} />
          <Route path='/orders' element = {<Orders />} />
          <Route path='/assignments' element = { <AssignDash />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
