import React from 'react';
import { NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle'; 

const Navbar = () => {
  const LinksData = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Login',
      link: '/login'
    },
    {
      title: 'Register',
      link: '/register'
    }
  ];

  return (
    <div className='w-full h-16 flex justify-between items-center border-b-2 border-primary fixed top-0 bg-white z-50'>
      <div className='flex items-center ml-4'>
        <span className='text-lg font-bold'>T-Square</span>
      </div>
      <div className='flex items-center mr-4'>
        <ul className='flex space-x-8 font-bold'>
          {LinksData.map((data, index) => (
            <li key={index}>
              <NavLink
                to={data.link}
                activeClassName='text-primary font-bold' 
                className='text-black hover:text-primary'
              >
                {data.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
