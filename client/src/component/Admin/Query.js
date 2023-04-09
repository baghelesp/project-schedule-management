import React from "react";
import ig1 from "../../assets/PMO/emp1.jpg"
import ig2 from "../../assets/PMO/emp2.jpg"
import ig3 from "../../assets/PMO/emp3.jpg"
import ig4 from "../../assets/PMO/emp4.jpg"

const Query=() =>{
    const handleItemClick=(event)=> {
		const val=prompt('enter a feedback');
        window.alert("Feedback sent to the PMO user");
		}
	
  return (<div>
  <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
  <div class="flex">
    <div class="py-1"><img className="h-16 w-16 rounded-full mr-2" src={ig1} alt="" /></div>
    <div>
        <div class="flex">
            <div class="font-bold">Shivam Baghele</div>
            <div class="font-bold ">10-March-2023</div>
        </div>
        <p class="text-sm">Request to update the project status for the project id :01</p>
    </div>
  </div>
  
  <div class="text-blue-800 text-right">
   <button onClick={handleItemClick}>send feedback</button> 
  </div>
  
  
</div>
  </div>)
}

export default Query;
