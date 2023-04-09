import React from "react";

import { Link, Outlet } from "react-router-dom";





const QueryNavbar = () => {

  return (
    
    <>
    
    <div class="p-1">
    <ul class="flex p-4   rounded-tl-lg  rounded-tr-lg  bg-indigo-400">
  <li class="mr-7">
    <Link to="/userdashboard/query/inbox" class="text-sky-100 hover:text-sky-800" href="#">Inbox</Link>
  </li>
  <li class="mr-6">
    <Link to="/userdashboard/query/postquery" class="text-sky-100 hover:text-sky-800" href="#">Post Query</Link>
  </li>
  

</ul>
<div>
<Outlet/>
</div>
 
    
    </div> 



    </>
  );
};

export default QueryNavbar;
