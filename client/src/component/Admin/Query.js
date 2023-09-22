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
	
  return (<div >
    <div class="bg-gray-100 border-t-4 my-3 border-indigo-500 rounded-md text-indigo-900 px-4 py-3 shadow-md" role="alert">
    <div class="flex">
      <div class="py-1"><img className="h-16 w-16 rounded-full mr-2" src={ig1} alt="" /></div>
      <div>
          <div class="flex">
              <div class="font-bold mr-2">Shivam Baghele</div>
              <div class="font-bold ml-2">10-March-2023</div>
          </div>
          <p class="text-sm">Request to update the project status for the project id :01</p>
      </div>
    </div>
    
    <div class="text-blue-800 text-right">
    <button onClick={handleItemClick}>send feedback</button> 
    </div> 
  </div>
  <div class="bg-gray-100 border-t-4 my-3 border-indigo-500 rounded-md text-indigo-900 px-4 py-3 shadow-md" role="alert">
        <div class="flex">
          <div class="py-1"><img className="h-16 w-16 rounded-full mr-2" src={ig2} alt="" /></div>
          <div>
              <div class="flex">
                  <div class="font-bold mr-2">Ronit Jain</div>
                  <div class="font-bold ml-2">15-March-2023</div>
              </div>
              <p class="text-sm">Request to allocate more resource for project id:69</p>
          </div>
        </div>
        <div class="text-blue-800 text-right">
        <button onClick={handleItemClick}>send feedback</button> 
        </div> 
      </div>
      <div class="bg-gray-100 border-t-4 my-3 border-indigo-500 rounded-md text-indigo-900 px-4 py-3 shadow-md" role="alert">
        <div class="flex">
          <div class="py-1"><img className="h-16 w-16 rounded-full mr-2" src={ig4} alt="" /></div>
          <div>
              <div class="flex">
                  <div class="font-bold mr-2">Ramesh Kumar</div>
                  <div class="font-bold ml-2 ">20-March-2023</div>
              </div>
              <p class="text-sm">Request to update the project status for the project id :09</p>
          </div>
        </div>
        <div class="text-blue-800 text-right">
        <button onClick={handleItemClick}>send feedback</button> 
        </div> 
      </div>
      <div class="bg-gray-100 border-t-4 my-3 border-indigo-500 rounded-md text-indigo-900 px-4 py-3 shadow-md" role="alert">
        <div class="flex">
          <div class="py-1"><img className="h-16 w-16 rounded-full mr-2" src={ig3} alt="" /></div>
          <div>
              <div class="flex">
                  <div class="font-bold mr-2">Ranu Mondal </div>
                  <div class="font-bold ml-2">20-March-2023</div>
              </div>
              <p class="text-sm">Request to update the project status for the project id :09</p>
          </div>
        </div>
        <div class="text-blue-800 text-right">
        <button onClick={handleItemClick}>send feedback</button> 
        </div> 
      </div>
  </div>)
}

export default Query;
