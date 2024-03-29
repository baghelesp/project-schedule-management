import React from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import img1 from "../../../assets/projectIcons/picon.png"
import img2 from "../../../assets/projectIcons/picon2.png"
import img3 from "../../../assets/projectIcons/picon3.png"


const AllProjects = () => {
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

  
  if (!projects) return "No post!"

  return (
    <>
      <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Project 
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Duration
                  </th>
                  
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Assigned To
                  </th>
                  
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {projects.map(project => (
                  <tr key={project._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={img1} alt="x" />
                        </div>
                        <div className="ml-4">
                        
                          <div className="text-sm text-gray-500">ProjectId :{project._id}</div>
                          <div className="text-sm font-medium text-gray-900"><Link to="/admindashboard/project">{project.projectName}</Link></div>
                          
                          <div className="text-sm text-gray-500">Budget : {project.budget}</div>
                      
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{project.startDate + " to "+ project.endDate}</div>

                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className="px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-green-100 text-green-800"
                      >
                        {project.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {project.empemail.map((id, index)=>(
                        <div key={index}>{id}</div>
                      ))}
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    

    </>
  );
};

export default AllProjects;

