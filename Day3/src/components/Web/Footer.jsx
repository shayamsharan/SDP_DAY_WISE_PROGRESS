import { Facebook, Instagram, Twitter } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <div className='w-full h-16 flex justify-between items-center border-t-2 border-primary fixed bottom-0 bg-white z-50'>
      <div className='text-xl font-extrabold ml-4'>
        © T-Square 2024
      </div>
      <div className='flex space-x-4 mr-4'>
        <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
          <Facebook className='h-6 w-6'/>
        </a>
        <a href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
          <Twitter className='h-6 w-6'/>
        </a>
        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>
          <Instagram className='h-6 w-6'/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
