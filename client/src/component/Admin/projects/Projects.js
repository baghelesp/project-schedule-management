import React from "react";
import { useState } from "react";
import axios from 'axios';
//progress bar
import { Progress } from 'antd'
import Ganttchart from '../Ganttchart';
import {Route, Link, Routes, useNavigate} from 'react-router-dom';
import downarrow from '../../../assets/downarrow.png'
const Projects = () => {
  
let projectList;
const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}

  const [projects, setProjects] = React.useState(null);
  
  React.useEffect(() => {
    axios.get('http://localhost:5000/api/projectreport')
  .then(res => {
    console.log(res.data);
    projectList=res.data;
    setProjects(projectList);
    
  })
  .catch(function (error) {
      console.log(error);
  })
  }, []);

  
  //show more const
  const [showMore, setShowMore] = useState(false);


  
  //show more details
  

  // show/ hide gantt chart and milestone graph
  const [isVisible, setIsVisible] = useState(false)
  let prevIsVisibleValue=false;
    const showGanttChart=()=>
    {
      console.log(isVisible);
       setIsVisible(prevIsVisibleValue => !prevIsVisibleValue) ;
       console.log(isVisible);
    }
    
  
  
  if (!projects) return "No post!"

  return (
    
    <div class="text-center">
    <button onClick={goBack} class="rounded-md bg-indigo-400 py-1 px-2 text-white">Go Back</button>
    <div>

    </div>
    
    {projects.map((item, index) => (
        <div key={index}>
        <div class="p-1">
    <div class="block p-6 w-full  border border-indigo-400 rounded-lg shadow  bg-indigo-400 ">
    
    <div class="bg-gradient-to-r rounded-lg m-1  p-2 from-indigo-200  to-gray-200 ...">
    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-grey-900 ">Project Name : {item.projectName}</h5>
    </div>
    <div class="bg-gradient-to-r rounded-lg m-1  p-2 from-indigo-200  to-gray-200 ...">
    <p class="font-300 text-indigo-900 "><b class="text-gray-800">Problem Statement : </b> {item.problemStatement}</p>
    </div>
    <div>
    <button class=" text-sm text-bold  text-white rounded-lg m-1  p-1 bg-indigo-300 ..." onClick={() => setShowMore(!showMore)}>



      <img class="h-5 w-6" src={downarrow}/>
    </button>
    </div>

    
    
    { showMore &&
    <>
    
    <div class="bg-gradient-to-r rounded-lg m-1 p-2 from-indigo-200  to-gray-200 ...">
    <p class="font-300 text-indigo-900 "><b class="text-gray-800">Statement of work : </b> {item.sow}</p>
    </div>
    <div class="bg-gradient-to-r rounded-lg m-1 p-2 from-indigo-200  to-gray-200 ...">
    <p class="font-300 text-indigo-900 "><b class="text-gray-800">PMO Users : </b> 
            {item.empemail.map((emp, index) => (
                <div key={index}>
                <div class="font-semibold text-gray-600 ">UserID : {emp}</div>
                </div>
            ))}
    </p>
    </div>

    <div class="bg-gradient-to-r rounded-lg m-1 p-2 from-indigo-200  to-gray-200 ...">
    <p class="font-300 text-indigo-900 "><b class="text-gray-800">Start date : </b> {item.startDate} <b class="text-gray-800"> <br/>End date : </b> {item.endDate}</p>
    </div>
    <div class="bg-gradient-to-r rounded-lg m-1 p-2 from-indigo-200  to-gray-200 ...">
    <p class="font-300 text-indigo-900 "><b class="text-gray-800">Budget : </b> {item.budget}</p>
    </div>
    <div class="bg-gradient-to-r rounded-lg m-1 p-2 from-indigo-200  to-gray-200 ...">
    <p class="font-300 text-indigo-900 "><b class="text-gray-800">Status :  </b> {item.status}</p>
    </div>
    </>
    }
    <div class="m-1 p-2">
    
    <Progress
        type="circle"
        percent={item.progress}
        trailColor="#e6f4ff"
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
              }}
        style={{
          textColor:'white',
          marginRight:8,
        }}
    />
    
    </div>
    <p class="text-white">
      <button onClick={showGanttChart}>click here to see a milestones and gantt chart</button>
    </p>
    </div>
    <div class="mt-2">
    {isVisible && <Ganttchart/>}
    </div>
    
    </div> 


         
        </div>
      ))}

    

    </div>
  );
};

export default Projects;
