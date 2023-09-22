import React, { useState } from 'react';
import {BrowserRouter,Link,Outlet,Route,Routes} from'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
  <div class="bg-gradient-to-r from-gray-800 to-indigo-900">
    <nav class="flex  items-center justify-between   p-4">
      <div class="flex  items-center  text-white mr-auto">
        <span 
          class="font-semibold md:text-2xl text-[20px] tracking-tight">
            Project Managmenet
        </span>
      </div>
      
      <div 
        className="block sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center px-3 py-2 rounded text-white hover:text-slate-200"
          >
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "hidden" : "block"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
            <svg
              className={`fill-current h-3 w-3 ${isOpen ? "block" : "hidden"}`}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
            </svg>
          </button>
      </div>
      
      <div class={` bg-slate-700 opacity-80 top-[60px] z-20 right-1 p-2 rounded flex-col fixed ${isOpen ? "block" : "hidden"}`}>
        <div class="m-1 ">
        <div class="my-3"><Link to='/home/adminlogin' class="mr-6  text-sm font-medium text-white dark:text-blue-500 text-blue-400 hover:underline">Admin Login</Link></div>
        <div class="my-3"><Link to='/home/login' class="mr-6  text-sm font-medium text-white dark:text-blue-500 text-blue-400 hover:underline">Login</Link></div>
        <div class="my-3"><Link to='/home/register' class="text-sm  font-medium text-white dark:text-blue-500 text-blue-400 hover:underline">Register</Link></div>
        </div>
      </div>
     
      <div class=" hidden sm:block">
        <Link 
          to='/home/adminlogin' 
          class="mr-6 text-sm font-medium text-white  hover:underline">
            Admin
        </Link>
        <Link 
          to='/home/login' 
          class="mr-6 text-sm font-medium text-white  hover:underline">
            Login
        </Link>
        <Link 
          to='/home/register' 
          class="text-sm font-medium text-white  hover:underline">
            Register
        </Link>
      </div>
    </nav>
  </div>);
}

export default Navbar;
