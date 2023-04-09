import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from 'axios';
//notify
import { ToastContainer, toast } from 'react-toastify';
//progress bar
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Progress } from 'antd'
import Ganttchart from './Ganttchart';



const Navbar = () => {

  return (
    
    <>
    
    <div class="p-1">
    <ul class="flex p-4   rounded-tl-lg  rounded-tr-lg  bg-indigo-400">
  <li class="mr-7">
    <Link to="/userdashboard/projects/details" class="text-sky-100 hover:text-sky-800" href="#">Project Details</Link>
  </li>
  <li class="mr-6">
    <Link to="/userdashboard/projects/workbreakdown" class="text-sky-100 hover:text-sky-800" href="#">Create Work Breakdown</Link>
  </li>
  <li class="mr-6">
    <Link to="/userdashboard/projects/timeline" class="text-sky-100 hover:text-sky-800" href="#">Timeline</Link>
  </li>

</ul>
<div>
<Outlet/>
</div>
 
    
    </div> 



    </>
  );
};

export default Navbar;
