import React, { useState } from 'react';
import {Link, Route,Routes} from'react-router-dom'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
      
    <div >
    <nav class="bg-slate-600 border-gray-600  ">
      <div class="flex  bg-slate-600  flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-4">
        <p class="flex items-center">
          
          <Link to="/"><span class="self-center  text-[18px] sm:text-xl font-semibold whitespace-nowrap  text-white dark:text-white">Project Management</span> </Link>
        </p>

        <div className="block sm:hidden">
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
     <div class={` bg-slate-700 opacity-80 top-[60px] right-1 p-2 rounded flex-col fixed ${isOpen ? "block" : "hidden"}`}>
        <div class="m-1 ">
        <div class="my-3"><Link to='/home/adminlogin' class="mr-6  text-sm font-medium text-white dark:text-blue-500 text-blue-400 hover:underline">Admin Login</Link></div>
        <div class="my-3"><Link to='/home/login' class="mr-6  text-sm font-medium text-white dark:text-blue-500 text-blue-400 hover:underline">Login</Link></div>
        <div class="my-3"><Link to='/home/register' class="text-sm  font-medium text-white dark:text-blue-500 text-blue-400 hover:underline">Register</Link></div>
        </div>
      </div>
      <div class={`flex items-left hidden sm:block `}>
        <Link to='/home/adminlogin' class="mr-6 text-sm font-medium text-blue-200     hover:underline " >Admin</Link>
        <Link to='/home/login' class="mr-6 text-sm font-medium text-blue-200       hover:underline ">Login</Link>
        <Link to='/home/register' class="text-sm font-medium text-blue-200  hover:underline  ">Register</Link>
      </div>
      

      
      </div>
    </nav>
  </div>
          
           
         
          
     

  );
};

export default Navbar;
