import React from "react";
import { Link, } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigate} from'react-router-dom';
import adminImg from "../../assets/adminImg.png"
import adminHomeImg from "../../assets/adminHomeImg.png"

function Admindashboard() {
    const navigate=useNavigate()
    const logout = () => {
        localStorage.clear();
        navigate('/')
    };
    
  return (
    <>
    <div class="bg-gray-200 h-auto min-h-screen">      
    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
        <span class="sr-only">Open sidebar</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
        </svg>
    </button>

    <aside id="default-sidebar" class="fixed top-0 left-0   z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-full px-3 py-4 overflow-y-auto  bg-gray-600 dark:bg-gray-800">
            <ul class="space-y-2">
                <li class="flex">
                <img className="h-10 w-10 rounded-full ring-2 ring-indigo-200 " src={adminImg} alt="" />
                <p class="m-2 text-white">Admin Limited</p>

            </li>
            <li>
                <a href="/admindashboard/home" class="flex group items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-indigo-300 ">
                <img src={adminHomeImg} alt="" class="flex-shrink-0 w-6 h-6 text-gray-100 transition duration-75  group-hover:text-gray-700  "></img>
                <span class="flex-1 ml-3 text-gray-100 group-hover:text-gray-700 whitespace-nowrap">Home</span>
            </a>
            </li>    
            <li>
                <a href="/admindashboard/profile" class="flex group items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-indigo-300">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                <span class="flex-1 ml-3 text-gray-100 group-hover:text-gray-700 whitespace-nowrap">Profile</span>
            </a>
            </li>
            <li>
                <Link to="/admindashboard/query" class="flex group items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-indigo-300">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
                    <span class="flex-1 ml-3 text-gray-100 group-hover:text-gray-700 whitespace-nowrap">Query Inbox</span>
                    <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                </Link>
            </li>
            <li>
                <Link to="/admindashboard/createproject" class="flex group items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-indigo-300">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
                <span class="flex-1 ml-3 text-gray-100 group-hover:text-gray-700 whitespace-nowrap">Create Projects</span>
            </Link>
            </li>
            
            <li>
            <Link to="/admindashboard/allproject" class="flex group items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-indigo-300">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                <span class="flex-1 ml-3 text-gray-100 group-hover:text-gray-700 whitespace-nowrap">ALL Project </span>
            </Link>
            </li>
            <li>
            <Link to="/admindashboard/projectreport" class="flex group items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-indigo-300">
                <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path></svg>
                <span class="flex-1 ml-3 text-gray-100  group-hover:text-gray-700 whitespace-nowrap">Project Report </span>
            </Link>
            </li>
            <li>
                <button onClick={logout} class="flex group items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-indigo-300">
                    <svg aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-gray-100 transition duration-75 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path></svg>
                    <span class="flex-1 ml-3 text-gray-100 group-hover:text-gray-700 whitespace-nowrap">Logout</span>
                 </button>
                
            </li>
            </ul>
        </div>
    </aside>

    <div class="p-1 sm:ml-64">
        <Outlet/>
    </div>
</div>





 </>
  )
}

export default Admindashboard;
