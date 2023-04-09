import React from "react";
import { useState } from "react";

function Workdowndetails() {
  let type;
  const temptasklist=[{
    id:1,
		label: "",
		dateStart: "",
		dateEnd: "",
		cost:0,
		progress: 0,
		type: "",
		resources: [{
			id: "",
			label: "",
		}]}]
  const [tasklist, setTask]=useState(temptasklist)
  const handleChange = (event) => {
   
    console.log(event.target.value);
  };

 const handleAddTask = () => {
    let temptask=tasklist;
    setTask(temptask.concat(temptasklist));
  };
  function handleRemoveTask (e){
    
    
}

  return <div>
  {
    tasklist.map((task,index)=>{
      return(
        <form class="w-full max-w-full py-3">
  <div class="flex flex-wrap -mx-3 mb-6">
  <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="type">
        Task Type
      </label>
      <div class="relative">
        <select id="type" name="type" value={task.type} onChange={handleChange} class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" >
          <option>Task</option>
          <option>Sub-Task</option>
          <option>Milestones</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          Task {index+1}
      </label>
      <input value={task.label} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name"  type="text"/>
      <p class="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div class="w-full md:w-1/4 px-3">
      <label value={task.dateStart} class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Start Date
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="date"  />
    </div>
    <div class="w-full md:w-1/4 px-3">
      <label value={task.dateEnd} class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        End Date
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="date" />
      <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
    </div>
  </div>
  
  <div class="flex flex-wrap -mx-3 mb-2">
  <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="taskid">
        ID
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="taskid" type="text" readOnly="readonly" value="1" />
    </div>
    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="progress">
        Progress
      </label>
      <input value={task.progress} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="progress" type="text" readOnly="readonly" value="0"/>
    </div>
    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Resource
      </label>
      <input value={task.resources[0].label} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" />
    </div>
    
    <div class="w-full md:w-1/4 px-3 mb-6 md:mb-0">
      <label  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Cost
      </label>
      <input value={task.cost} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text"  />
    </div>
  </div>
  <br/>
</form>
      )
    })
  }

  <div>
  <button onClick={handleAddTask} class="rounded-lg text-white py-1 px-2 m-1 bg-sky-600">add task</button>
  <button class="rounded-lg text-white py-1 px-2 m-1 mr-4 float-right bg-green-600">Submit</button>
  </div>
  
  
  </div>;
}

export default Workdowndetails;
