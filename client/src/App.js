import './App.css';
import Userdashboard from './component/Userdashboard/Userdashboard';
import Home from './component/Home/Home'
import Login from './component/login/Login';
import Adminlogin from './component/login/Adminlogin';
import Register from './component/register/Register';
import Projects from './component/Userdashboard/projects/Projects';
import Profile  from './component/Userdashboard/profile/Profile';
import {BrowserRouter,Link,Route,Routes} from'react-router-dom'
import Admindashboard from './component/Admin/Admindashboard';
import Createproject from './component/Admin/Createproject';
import Gantt from './component/Gantt';

function App() {
  const data={
    data:[
      { id:1, text:'Task #1',start_date:'15-04-2021',duration:3, progress:0.6},
      { id:2, text:'Task #2',start_date:'18-04-2021',duration:3, progress:0.4}
    ],
    links:[
      {id:1, source:1, target:2, type:'0'}
    ]
  };
  return (
    <div >
    <div className="gantt-container">
    hello
      <Gantt tasks={data}/>
    </div>
   
    </div>
  );
}

export default App;
