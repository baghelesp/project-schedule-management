import React from 'react';
import { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { GanttChart } from 'smart-webcomponents-react/ganttchart';
import { Progress } from 'antd';

const Ganttchart = () => {
    
	const [progress, setProgress] = React.useState(null);
	
	const treeSize = '30%';
	const durationUnit = 'day';
	let showProgressLabel = true;

	
	const taskColumns = [{
		label: 'Tasks',
		value: 'label',
		
		
	},
	{
		label: 'Team',
		value: 'class',
		
	},
	{
		label: 'Duration (days)',
		value: 'duration',
		formatFunction: (date) => parseInt(date)
	}
	];

	const dataSource = [{
		id:1,
		label: 'PRD & User-Stories',
		dateStart: '2021-01-10',
		dateEnd: '2021-02-10',
		class: 'product-team',
		progress: progress,
		type: 'task',
		resources: [{
			id: 'megan',
			label: 'Megan',
		}]
	},
	{
		id:2,
		label: 'Persona & Journey',
		dateStart: '2021-02-01',
		dateEnd: '2021-03-30',
		class: 'marketing-team',
		type: 'task'
	},
    {
		id:3,
        label: 'Milestone 1',
        dateEnd: '2021-04-30',
        type: 'milestone'
    },
	{
		id:4,
		label: 'Architecture',
		dateStart: '2021-04-11',
		dateEnd: '2021-05-16',
		class: 'product-team',
		type: 'task'
	},
	{
		id:5,
		label: 'Prototyping',
		dateStart: '2021-05-17',
		dateEnd: '2021-07-01',
		class: 'dev-team',
		type: 'task'
	},
    {
        label: 'Milestone 2',
        dateEnd: '2021-07-01',
        type: 'milestone'
    },
	{
		label: 'Design',
		dateStart: '2021-07-02',
		dateEnd: '2021-08-01',
		class: 'design-team',
		type: 'task'
	},
	{
		label: 'Development',
		dateStart: '2021-08-01',
		dateEnd: '2021-09-10',
		class: 'dev-team',
		type: 'task'
	},
	{
		label: 'Testing & QA',
		dateStart: '2021-09-11',
		dateEnd: '2021-10-10',
		class: 'qa-team',
		type: 'task'
	},
	{
		label: 'UAT Test',
		dateStart: '2021-10-12',
		dateEnd: '2021-11-11',
		class: 'product-team',
		type: 'task'
	},
	{
		label: 'Handover & Documentation',
		dateStart: '2021-10-17',
		dateEnd: '2021-11-31',
		class: 'marketing-team',
		type: 'task'
	},
	{
		label: 'Release',
		dateStart: '2021-11-01',
		dateEnd: '2021-12-31',
		class: 'release-team',
		type: 'task'
	}
	];
	
	const [data, setData] = React.useState(dataSource);
	const refData= useRef(data);
	useEffect(()=>{
		refData.current=data;
		console.log("rednder ")
	});
	
	function handleItemClick(event) {
		const detail = event.detail;
		const item = detail.item;
		const 	type = detail.type;
		const id=detail.id;
		const 	originalEvent = detail.originalEvent;
		
		const newData= refData.current;
	
		if(type=='task')
		{
			const val=prompt('enter a progress');
			newData[id-1].progress=val;
			
			setData([...newData]);

		}
	}
	const progressLabelFormatFunction = (progress) =>{ return (Math.round(progress) + '%')};
	
	return (
		<div>
        	<GanttChart onItemClick={handleItemClick}  dataSource={data} taskColumns={taskColumns} treeSize={treeSize} durationUnit={durationUnit} showProgressLabel={showProgressLabel} progressLabelFormatFunction={progressLabelFormatFunction} id="gantt"></GanttChart>
		</div>
	);
}



export default Ganttchart;
    
