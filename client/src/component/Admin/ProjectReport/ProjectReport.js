import React from "react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from 'axios';


function ProjectReport() {
  return <div><>
    
  <div class="p-1">
  <ul class="flex p-4   rounded-tl-lg  rounded-tr-lg  bg-indigo-400">
<li class="mr-8">
  <Link to="/admindashboard/projectreport/active" class="text-sky-100 text-base hover:text-sky-800" href="#">Active Project</Link>
</li>
<li class="mr-8">
  <Link to="/admindashboard/projectreport/closed" class="text-sky-100 text-base hover:text-sky-800" href="#">CLosed Project</Link>
</li>
<li class="mr-8">
  <Link to="/admindashboard/projectreport/delayed" class="text-sky-100 text-base hover:text-sky-800" href="#">Delayed Running Project</Link>
</li>

</ul>
<div>
<Outlet/>
</div>

  
  </div> 



  </></div>;
}

export default ProjectReport;
