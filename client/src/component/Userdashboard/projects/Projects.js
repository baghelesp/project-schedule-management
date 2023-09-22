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
import downarrow from '../../../assets/downarrow.png'


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
    <div class="block p-6 w-full bg-indigo-200 border border-indigo-200 rounded-bl-lg rounded-br-lg shadow  ">
    <div class="bg-gradient-to-r rounded-lg m-1  p-2 from-indigo-300  to-gray-200 ...">
    <h5 class="mb-2 text-2xl font-semibold tracking-tight text-indigo-900 ">Project Name : {projects.projectName}</h5>
    </div>
    <div class="bg-gradient-to-r rounded-lg m-1  p-2 from-indigo-300  to-gray-200 ...">
    <p class="font-300 text-gray-700 "><b class="text-indigo-900">Problem Statement : </b> {projects.problemStatement}</p>
    </div>
    <div>
    <button class=" text-sm text-bold  text-grey-600 rounded-lg m-1  p-1 bg-indigo-300" onClick={() => setShowMore(!showMore)}><img class='h-4 w-5' src={downarrow}/> </button>
    </div>
    
    { showMore &&
    <>
    
    <div class="bg-gradient-to-r rounded-lg m-1 p-2 from-indigo-300  to-gray-200 ...">
    <p class="font-300 text-gray-700"><b class="text-indigo-900">Statement of work : </b> {projects.sow}</p>
    </div>

    <div class="bg-gradient-to-r rounded-lg m-1 p-2 from-indigo-300  to-gray-200 ...">
    <p class="font-300 text-gray-700"><b class="text-indigo-900">Start date : </b> {projects.startDate} <b class="text-indigo-900"> <br/> End date : </b> {projects.endDate}</p>
    </div>
    <div class="bg-gradient-to-r rounded-lg m-1 p-2 from-indigo-300  to-gray-200 ...">
    <p class="font-300 text-gray-700"><b class="text-indigo-900">Budget : </b> {projects.budget}</p>
    </div>
    <div class="bg-gradient-to-r rounded-lg m-1 p-2 from-indigo-300  to-gray-200 ...">
    <p class="font-300 text-gray-700"><b class="text-indigo-900">Status :  </b> {projects.status}</p>
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
      <Button style={{backgroundColor:'blue',color:'white'}} onClick={decline} icon={<MinusOutlined />} />
      <Button style={{backgroundColor:'blue',color:'white'}} onClick={increase} icon={<PlusOutlined />} />
      <p><Button style={{backgroundColor:'blue',color:'white', marginLeft:'10px'}} onClick={saveProgress} >Save Progress</Button></p>
      
    </Button.Group>
    
    </div>
    <p class="text-grey-600">
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
