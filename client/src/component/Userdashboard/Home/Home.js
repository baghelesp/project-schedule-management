import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from 'axios';


function UserHome() {
  return <div><>
    
  <div class="p-1">
  <ul class="flex p-4   rounded-tl-lg  rounded-tr-lg  bg-indigo-400">
<li class="mr-8">
  <Link to="/userdashboard/home/active" class="text-sky-100 text-base hover:text-sky-800" >Active Project</Link>
</li>
<li class="mr-8">
  <Link to="/userdashboard/home/closed" class="text-sky-100 text-base hover:text-sky-800" >Completed Project</Link>
</li>


</ul>
<div>
<Outlet/>
</div>

  
  </div> 



  </></div>;
}

export default UserHome;