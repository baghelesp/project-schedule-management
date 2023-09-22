import React from "react";
import img from '../../../assets/projectIcons/picon.png'
import img2 from '../../../assets/projectIcons/picon2.png'
import img3 from '../../../assets/projectIcons/picon3.png'


function UserClosedProject() {
    const projects = [
        {
          ID:1,
          name: 'Face Detection',
          title: 'Regional Paradigm Technician',
          budget: '2,00,000Rs',
          duration:'2-Feb-2022 - 1-July-2022',
          pmo: 'Rohit Bhojwani, Shivam Baghele',
          image: img,
        },
        {
            ID:2,
            name: 'Money Management',
            title: 'Regional Paradigm Technician',
            budget: '2,50,000Rs',
            duration:'19-April-2022 - 2-Aug-2022',
            pmo: 'Prathmesh Rajbhoj, Bhushan Wanjari',
          image:img2,
        },
        {
            ID:3,
            name: 'Split-Expenses Web',
            title: 'Regional Paradigm Technician',
            budget: '3,00,000Rs',
            duration:'20-Aug-2022 - 1-Dec-2022',
            pmo: 'Shivam Baghele, Sahil Verma',
          image: img3,
        },
        
      ];
  return <div>
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
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {projects.map(project => (
                  <tr key={project.ID}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={project.image} alt="" />
                        </div>
                        <div className="ml-4">
                        <div className="text-sm text-gray-500">ProjectId :{project.ID}</div>
                          <div className="text-sm font-medium text-gray-900">{project.name}</div>
                          
                          <div className="text-sm text-gray-500">{project.budget}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{project.duration}</div>

                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className="px-2 inline-flex text-xs leading-5
                      font-semibold rounded-full bg-red-100 text-red-800"
                      >
                        Closed
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {project.pmo}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default UserClosedProject;

