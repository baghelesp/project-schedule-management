import React from "react";
import ig1 from "../../../assets/adminImg.png"
function Inbox() {
    return<div>
    <div>
<div class="bg-teal-100 border-t-4 my-3 border-teal-500 rounded-md text-teal-900 px-4 py-3 shadow-md" role="alert">
<div class="flex">
<div class="py-1"><img className="h-16 w-16 rounded-full mr-2" src={ig1} alt="" /></div>
<div>
<div class="flex">
          <div class="font-bold">Admin</div>
          <div class="font-semibold mx-10">10-March-2023</div>
      </div>
      <p class="text-sm">Status Updated for the project id :01</p>
  </div>
</div>

<div class="text-blue-800 text-right">

</div> 
</div>
<div class="bg-green-100 border-t-4 my-3 border-green-500 rounded-md text-green-900 px-4 py-3 shadow-md" role="alert">
    <div class="flex">
      <div class="py-1"><img className="h-16 w-16 rounded-full mr-2" src={ig1} alt="" /></div>
      <div>
          <div class="flex">
              <div class="font-bold">Admin</div>
              <div class="font-semibold mx-10">15-March-2023</div>
          </div>
          <p class="text-sm">Resource Granted for project id:69</p>
      </div>
    </div>
    <div class="text-blue-800 text-right">
    
    </div> 
  </div>
  <div class="bg-sky-100 border-t-4 my-3 border-sky-500 rounded-md text-sky-900 px-4 py-3 shadow-md" role="alert">
    <div class="flex">
      <div class="py-1"><img className="h-16 w-16 rounded-full mr-2" src={ig1} alt="" /></div>
      <div>
          <div class="flex">
              <div class="font-bold">Admin</div>
              <div class="font-semibold mx-10">20-March-2023</div>
          </div>
          <p class="text-sm">Budget Updated for project id :09</p>
      </div>
    </div>
    <div class="text-blue-800 text-right">
   
    </div> 
  </div>
  
</div>;
    
    </div>
}

export default Inbox;
