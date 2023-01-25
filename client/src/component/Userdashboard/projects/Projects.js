import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {GanttComponent, TaskFieldsModel} from '@syncfusion/ej2-react-gantt';


const Projects = () => {
  let projectdata=null;
  const empemail=localStorage.getItem("empemail");
  console.log("Local storage email : "+empemail);
  axios.get('http://localhost:5000/api/userproject', {
    params: {
      id: empemail,
    }
  })
  .then(res => {
    console.log(res.data);
    projectdata={
      projectName:res.data.projectName,
      problemStatement:res.data.problemStatement,
      empemail: res.data.empemail,
    startDate: res.data.startDate,
    endDate: res.data.endDate, 
    }
    
      
  })
  .catch(function (error) {
      console.log(error);
  })
  

  return (
    
    <>
    
    <div class="p-1 m-1">
    <Link to="#"  class="block p-6 w-full bg-sky border border-sky-200 rounded-lg shadow hover:bg-sky-600 dark:bg-sky-900 dark:border-sky-900 dark:hover:bg-sky-800">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-sky-900 dark:text-white">Project Name : {projectdata.projectName}</h5>
    <p class="font-normal text-sky-700 dark:text-teal-100"><b class="text-teal-300">Problem Statement : </b>{projectdata.problemStatement}</p>
    </Link>
    </div> 



    </>
  );
};

export default Projects;
