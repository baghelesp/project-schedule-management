import React from 'react';
import {Link, Route,Routes} from'react-router-dom'


const Navbar = () => {
  return (
      
    <div >
    <nav class="bg-white border-gray-200  dark:bg-gray-900 ">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-4">
        <p class="flex items-center">
          
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Project Schedule Management</span>
        </p>
        <div class="flex items-left">
        <Link to='/home/adminlogin' class="mr-6 text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Admin</Link>
        <Link to='/home/login' class="mr-6 text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
        <Link to='/home/register' class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Register</Link>
      </div>
      </div>
    </nav>
  </div>
          
           
         
          
     

  );
};

export default Navbar;
