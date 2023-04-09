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
  
  const empemail=localStorage.getItem("empemail");
  console.log("Local storage email : "+empemail);
  const [projects, setProjects] = React.useState(null);
  let progressPercent=0;
  React.useEffect(() => {
    axios.get('http://localhost:5000/api/userproject', {
    params: {
      id: empemail,
    }
  })
  .then(res => {
    console.log(res.data);
    progressPercent=res.data.progress;
    let projectdata={
      _id: res.data._id,
      projectName:res.data.projectName,
      problemStatement:res.data.problemStatement,
      sow:res.data.sow,
      empemail: res.data.empemail,
      startDate: res.data.startDate,
      endDate: res.data.endDate,
      progress: res.data.progress, 
      status:res.data.status,
      budget: res.data.budget
    }
    setProjects(projectdata);
    setPercent(progressPercent);
  })
  .catch(function (error) {
      console.log(error);
  })
  }, []);

  
  //show more const
  const [showMore, setShowMore] = useState(false);

  //code for progress bar
  const [percent, setPercent] = useState(0);
  const increase = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent + 10;
      if (newPercent > 100) {
        return 100;
      }
      return newPercent;
    });
  };
  const decline = () => {
    setPercent((prevPercent) => {
      const newPercent = prevPercent - 10;
      if (newPercent < 0) {
        return 0;
      }
      return newPercent;
    });
  };
  const saveProgress=()=>{
    const progress=percent;
    axios.post('http://localhost:5000/api/updateprogress', {_id:projects._id, progress : percent})
        .then(res=>{
          console.log(res.data.message)
        if(res.data.message=="Saved")
        {
          notify();
        }
        else if(res.data.message=="Error")
        {
          console.log("User alredy exits")
        }
      })
    
  }
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
    <div>
    <div class="block p-6 w-full bg-sky border border-sky-200 rounded-bl-lg rounded-br-lg shadow hover:bg-sky-600 dark:bg-sky-900 dark:border-sky-900 dark:hover:bg-sky-800">
    <div class="bg-gradient-to-r rounded-lg m-1  p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-sky-900 dark:text-white">Project Name : {projects.projectName}</h5>
    </div>
    <div class="bg-gradient-to-r rounded-lg m-1  p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
    <p class="font-300 text-sky-700 dark:text-white"><b class="text-teal-300">Problem Statement : </b> {projects.problemStatement}</p>
    </div>
    <div>
    <button class="bg-gradient-to-r text-sm text-bold  text-white rounded-lg m-1  p-1 from-teal-300 to-teal-600 ..." onClick={() => setShowMore(!showMore)}>Show more details...</button>
    </div>
    
    { showMore &&
    <>
    
    <div class="bg-gradient-to-r rounded-lg m-1 p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
    <p class="font-300 text-sky-700 dark:text-white"><b class="text-teal-300">Statement of work : </b> {projects.sow}</p>
    </div>

    <div class="bg-gradient-to-r rounded-lg m-1 p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
    <p class="font-300 text-sky-700 dark:text-white"><b class="text-teal-300">Start date : </b> {projects.startDate} <b class="text-teal-300"> End date : </b> {projects.endDate}</p>
    </div>
    <div class="bg-gradient-to-r rounded-lg m-1 p-2 from-indigo-600 via-purple-500 to-pink-500 ...">
    <p class="font-300 text-sky-700 dark:text-white"><b class="text-teal-300">Budget : </b> {projects.budget}</p>
    </div>
    <div class="bg-gradient-to-r rounded-lg m-1 p-2 from-indigo-600 via-purple-500 to-fuchsia-500 ...">
    <p class="font-300 text-sky-700 dark:text-white"><b class="text-teal-300">Status :  </b> {projects.status}</p>
    </div>
    </>
    }
    <div class="m-1 p-2">
    
    <Progress
        type="circle"
        percent={percent}
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
    <Button.Group>
      <Button style={{color:'white'}} onClick={decline} icon={<MinusOutlined />} />
      <Button style={{color:'white'}} onClick={increase} icon={<PlusOutlined />} />
      <p><Button style={{color:'white', marginLeft:'10px'}} onClick={saveProgress} >Save Progress</Button></p>
      
    </Button.Group>
    
    </div>
    <p class="text-white">
      <button onClick={showGanttChart}>click here to see a milestones and gantt chart</button>
    </p>
    </div>
    <div class="mt-2">
    {isVisible && <Ganttchart/>}
    </div>
    
    </div> 



    </>
  );
};

export default Projects;
