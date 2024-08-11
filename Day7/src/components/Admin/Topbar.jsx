import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ModeToggle } from '../mode-toggle';

const Topbar = () => {
    return (
        <div className='h-[8vh] w-full bg-gray-100 flex justify-end items-center pr-4'>
            <div className='flex items-center gap-6'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                  {/* <Avatar> <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback>GG</AvatarFallback>
             </Avatar> */} 
            {/* <ModeToggle /> */}
            </div>
        </div>
    );
}

export default Topbar;
