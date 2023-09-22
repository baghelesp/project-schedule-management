import React, { useRef, useState } from 'react';
import {BrowserRouter,Link, Navigate, Outlet, Route,Routes} from'react-router-dom';
import { useNavigate} from 'react-router-dom';
import { FaBars, FaTimes} from 'react-icons/fa'

import img from '../../assets/empImg.png'

const Userdashboard=()=>{
    const navigate=useNavigate();
    const firstName=localStorage.getItem("firstName")
    const lastName= localStorage.getItem("lastName");
    const logout = () => {
        localStorage.clear();
        navigate('/')
    };
    
    const [isOpen, setIsOpen] = useState(false);
    return(


<div>

        
<div className="block lg:hidden">
       <button
         onClick={() => setIsOpen(!isOpen)}
         className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
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
       
    


<aside   class="fixed top-0 left-0   z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar">
<div class="h-full px-3 py-4 overflow-y-auto  bg-slate-600 dark:bg-gray-800">
   <ul class="space-y-2">
  
   <li class="flex">
    <img src={img} fill="currentColor" className="w-8 m-1 h-8 text-white">
    </img>

 
       
       <p class="m-2 text-white">{`${firstName+" "+lastName}`}</p>

   </li>
   <li>
       <Link to='/userdashboard' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
           <svg aria-hidden="true" class="w-6 h-6  transition duration-75 text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
           <span class="ml-3 text-gray-300">Dashboard</span>
       </Link>
   </li>


   <li>
       <Link to='/userdashboard/query' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
           <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
           <span class="flex-1 ml-3 whitespace-nowrap text-gray-300">Inbox</span>
           <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
       </Link>
   </li>
   <li>
       <a href="/userdashboard/profile" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
       <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
       <span class="flex-1 ml-3 whitespace-nowrap text-gray-300">Profile</span>
   </a>
   </li>
   <li>
       <Link to="/userdashboard/projects" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
       <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
       <span class="flex-1 ml-3 whitespace-nowrap text-gray-300">Projects</span>
   </Link>
   </li>
   <li>
       <button onClick={logout} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
           <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
           <span class="flex-1 ml-3 whitespace-nowrap text-gray-300">Logout</span>
       </button>
   </li>
   
  
</ul>
   
</div>
</aside>

{/* responsive nav bar */}
<aside   class={` fixed ${isOpen ? "block" : "hidden"}`}>
<div class="h-full px-3 py-4 overflow-y-auto opacity-80  bg-slate-700 ">
   <ul class="space-y-2">
  
   <li class="flex">
    <img src={img} fill="currentColor" className="w-8 m-1 h-8 text-white">
    </img>

 
       
       <p class="m-2 text-white">{`${firstName+" "+lastName}`}</p>

   </li>
   <li>
       <Link to='/userdashboard' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
           <svg aria-hidden="true" class="w-6 h-6  transition duration-75 text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path><path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path></svg>
           <span class="ml-3 text-gray-300">Dashboard</span>
       </Link>
   </li>


   <li>
       <Link to='/userdashboard/query' class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
           <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
           <span class="flex-1 ml-3 whitespace-nowrap text-gray-300">Inbox</span>
           <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
       </Link>
   </li>
   <li>
       <a href="/userdashboard/profile" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
       <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
       <span class="flex-1 ml-3 whitespace-nowrap text-gray-300">Profile</span>
   </a>
   </li>
   <li>
       <Link to="/userdashboard/projects" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
       <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
       <span class="flex-1 ml-3 whitespace-nowrap text-gray-300">Projects</span>
   </Link>
   </li>
   <li>
       <button onClick={logout} class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-500 dark:hover:bg-gray-700">
           <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6  transition duration-75 text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
           <span class="flex-1 ml-3 whitespace-nowrap text-gray-300">Logout</span>
       </button>
   </li>
   
  
</ul>
   
</div>
</aside>

<div class="p-1 sm:ml-64">
<Outlet/>
</div>

</div>
)
}

export default Userdashboard;