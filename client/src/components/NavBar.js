import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='mt-10'>
    <ul className='flex justify-evenly'>
        <li className='text-lg font-extrabold'>
            <NavLink to='/'><button>Dashboard</button></NavLink>  
        </li>
        <li className='text-lg font-extrabold'>
            <NavLink to='/partners'><button>Partners</button></NavLink>
        </li>
        <li className='text-lg font-extrabold'>
            <NavLink to='/orders'><button>Orders</button></NavLink>
        </li>
        <li className='text-lg font-extrabold'>
            <NavLink to='/assignments'><button>Assignment Dashboard</button></NavLink>
        </li>
    </ul>
    </div>
  )
}

export default NavBar;