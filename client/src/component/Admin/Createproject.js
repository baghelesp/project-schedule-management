import React from "react";
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Createproject() {
    const [data, setData]=useState({
        projectName:"",
        problemStatement:"",   
        sow:"", 
        empemail:"",
        startDate:"",
        endDate:"",
        budget:0,
        status:"Active",

    })
    function handleData(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)
    }

    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        
        e.preventDefault();
        try{
            const url="http://localhost:5000/api/createproject";
            axios.post(url, data).then(res=>{
                console.log(res.data.message)
              if(res.data.message=="Successfull")
              {
                
                console.log("Login successfully")
                navigate('/admindashboard')
              }
              else if(res.data.message=="UnSuccessfull")
              {
                console.log("User does not exits")
              }
            })
            
        }catch(error){
            console.log(error)
        }
    }
    return(
   
    <>
    
<div class="m-2 p-4 mr-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
<form class="space-y-6" onSubmit={(e)=>handleSubmit(e)} action="#">
    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Create Project</h5>
    <div>
        <label for="projectName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Name</label>
        <input value={data.projectName} onChange={(e)=>handleData(e)} type="text" name="projectName" id="projectName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
    </div>
    <div>
        <label for="problemStatement" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Problem Statement</label>
        <textarea value={data.problemStatement} onChange={(e)=>handleData(e)} name="problemStatement" id="problemStatement"  rows="3"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
    </div>
    <div>
        <label for="sow" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Statement Of Work</label>
        <textarea value={data.sow} onChange={(e)=>handleData(e)} name="sow" id="sow" rows="3"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required/>
    </div>
    <div>
        <label for="empemail" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Assign Project (Enter Email Id)</label>
        <input type="email" value={data.empemail} onChange={(e)=>handleData(e)} name="empemail" id="empemail" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
    </div>
    <div class="flex">
    <div class="mr-2">
    <label for="startDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project Start Date</label>
        <input type="date" value={data.startDate} onChange={(e)=>handleData(e)} name="startDate" id="startDate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required/>
    </div>
    <div class="ml-2">
    <label for="endDate" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project End Date</label>
        <input type="date" value={data.endDate} onChange={(e)=>handleData(e)} name="endDate" id="endDate" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"  required/>
    </div>
    </div>
    <div>
        <label for="budget" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Assign Project (Enter Email Id)</label>
        <input type='number' value={data.budget} onChange={(e)=>handleData(e)} name="budget" id="budget" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required/>
    </div>
    <div>
                    <label for="status" class="block mb-2 text-sm font-medium dark:text-white ">Status</label>
                    <select id="status" name="status" value={data.status} onChange={handleData} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="Active"  selected>Active</option>
                    <option value="Closed">Closed</option>
                    <option value="Suspended">Suspended</option>
                    </select>
                </div>
    <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Project</button>
    
</form>
</div>

    </>
  );
}

export default Createproject;
