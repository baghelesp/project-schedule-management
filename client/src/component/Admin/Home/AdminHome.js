import React from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import PieChart from "./PieChart";

const AdminHome = () => {
  const name= localStorage.getItem("adminFname")+" "+localStorage.getItem("adminLname")
  return (
    <>
    
      
      <div class="px-auto mx-auto  md:p-10 w-full">
        <BarChart/>
      </div>
   
    <div class="px-auto mx-auto  md:p-10 mt-6 w-full">
        <LineChart/>
      </div>
    
      <div class="px-auto mx-auto md:p-10 mt-6 w-2/3">
        <PieChart/>
      </div>

    
    
    


    </>
  )
};

export default AdminHome;