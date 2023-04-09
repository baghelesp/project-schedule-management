import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
//notify
import { ToastContainer, toast } from 'react-toastify';
//progress bar
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Progress } from 'antd'
import Ganttchart from './Ganttchart';


const Projects = () => {
  
  const notify = () => {
    toast.success("Progress Saved!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}
  
  
let projectList;
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
    
    <>
    <ToastContainer/>
    {projects.map((item, index) => (
        <div key={index}>
        <div class="p-1">
    <div class="block p-6 w-full bg-sky border border-sky-200 rounded-lg shadow hover:bg-sky-600 dark:bg-sky-900 dark:border-sky-900 dark:hover:bg-sky-800">
    
    <div class="bg-gradient-to-r rounded-lg m-1  p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-sky-900 dark:text-white">Project Name : {item.projectName}</h5>
    </div>
    <div class="bg-gradient-to-r rounded-lg m-1  p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
    <p class="font-300 text-sky-700 dark:text-white"><b class="text-teal-300">Problem Statement : </b> {item.problemStatement}</p>
    </div>
    <div>
    <button class="bg-gradient-to-r text-sm text-bold  text-white rounded-lg m-1  p-1 from-green-600 to-green-600 ..." onClick={() => setShowMore(!showMore)}>Show more details...</button>
    </div>

    
    
    { showMore &&
    <>
    
    <div class="bg-gradient-to-r rounded-lg m-1 p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
    <p class="font-300 text-sky-700 dark:text-white"><b class="text-teal-300">Statement of work : </b> {item.sow}</p>
    </div>
    <div class="bg-gradient-to-r rounded-lg m-1 p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
    <p class="font-300 text-sky-700 dark:text-white"><b class="text-teal-300">PMO Users : </b> 
            {item.empemail.map((emp, index) => (
                <div key={index}>
                <div>Name: {emp}</div>
                </div>
            ))}
    </p>
    </div>

    <div class="bg-gradient-to-r rounded-lg m-1 p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
    <p class="font-300 text-sky-700 dark:text-white"><b class="text-teal-300">Start date : </b> {item.startDate} <b class="text-teal-300"> End date : </b> {item.endDate}</p>
    </div>
    <div class="bg-gradient-to-r rounded-lg m-1 p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
    <p class="font-300 text-sky-700 dark:text-white"><b class="text-teal-300">Budget : </b> {item.budget}</p>
    </div>
    <div class="bg-gradient-to-r rounded-lg m-1 p-2 from-indigo-600 via-purple-500 to-fuchsia-500 ...">
    <p class="font-300 text-sky-700 dark:text-white"><b class="text-teal-300">Status :  </b> {item.status}</p>
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

    

    </>
  );
};

export default Projects;
