import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import {GanttComponent, TaskFieldsModel} from '@syncfusion/ej2-react-gantt';
//progress bar
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Progress } from 'antd'



const Projects = () => {
  
  const empemail=localStorage.getItem("empemail");
  console.log("Local storage email : "+empemail);
  const [projects, setProjects] = React.useState(null);

  React.useEffect(() => {
    axios.get('http://localhost:5000/api/userproject', {
    params: {
      id: empemail,
    }
  })
  .then(res => {
    console.log(res.data);
    let projectdata={
      projectName:res.data.projectName,
      problemStatement:res.data.problemStatement,
      empemail: res.data.empemail,
     startDate: res.data.startDate,
      endDate: res.data.endDate, 
    }
    setProjects(projectdata);
    
      
  })
  .catch(function (error) {
      console.log(error);
  })
  }, []);

  
  

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
  
  
  
  if (!projects) return "No post!"

  return (
    
    <>
    
    <div class="p-1 m-1">
    <Link to="#"  class="block p-6 w-full bg-sky border border-sky-200 rounded-lg shadow hover:bg-sky-600 dark:bg-sky-900 dark:border-sky-900 dark:hover:bg-sky-800">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-sky-900 dark:text-white">Project Name : {projects.projectName}</h5>
    <p class="font-normal text-sky-700 dark:text-teal-100"><b class="text-teal-300">Problem Statement : {projects.problemStatement}</b> </p>
    <p >
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
    </Button.Group>
    </p>
    </Link>
    <div>
    
    </div>
    </div> 



    </>
  );
};

export default Projects;
