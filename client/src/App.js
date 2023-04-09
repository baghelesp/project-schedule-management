import './App.css';
import Userdashboard from './component/Userdashboard/Userdashboard';

import Login from './component/login/Login';
import Adminlogin from './component/login/Adminlogin';
import Register from './component/register/Register';
import Projects from './component/Userdashboard/projects/Projects';
import Profile  from './component/Userdashboard/profile/Profile';
import {BrowserRouter,Link,Route,Routes,Navigate} from'react-router-dom'
import Admindashboard from './component/Admin/Admindashboard';
import AdminProfile from './component/Admin/profile/Profile';
import Query from './component/Admin/Query';
import Createproject from './component/Admin/Createproject';
import Allproject from './component/Admin/Projects';
import Workdowndetails from './component/Userdashboard/projects/workdowndetails';
import Navbar from './component/Userdashboard/projects/navbar';
import Showtimeline from './component/Userdashboard/projects/timeline';
import Landingpage from './component/Landingpage/landingpage';
import Home from './component/Home/Home'
//
import ProjectReport from './component/Admin/ProjectReport/ProjectReport';
import ActiveProject from './component/Admin/ProjectReport/ActiveProject';
import DelayedProject from './component/Admin/ProjectReport/DelayedProject';
import ClosedProject from './component/Admin/ProjectReport/ClosedProject';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Landingpage/>}>
        </Route>
        <Route path='/home' element={<Home/>}>
        <Route path='/home/login' element={<Login/>}> </Route>
        <Route path='/home/register' element={<Register/>}></Route>
        <Route path='/home/adminlogin' element={<Adminlogin/>}></Route> 
       
        </Route>
        <Route  path='/userdashboard' element={<Userdashboard/>}>
              
            <Route  path='/userdashboard/projects' element={<Navbar/>}>
              <Route  path='/userdashboard/projects/details' element={<Projects/>}></Route>
              <Route path="/userdashboard/projects/" element={<Navigate replace to="/userdashboard/projects/details" />} />
              <Route  path='/userdashboard/projects/workbreakdown' element={<Workdowndetails/>}></Route>
              <Route  path='/userdashboard/projects/timeline' element={<Showtimeline/>}></Route>
            
            </Route>
            <Route  path='/userdashboard/profile' element={<Profile/>}></Route>
            <Route  path='/userdashboard/workstructure' element={<Workdowndetails/>}></Route>
        </Route> 
        <Route  path='/admindashboard' element={<Admindashboard/>}>
            <Route path='/admindashboard/query' element={<Query/>}></Route>
            <Route path='/admindashboard/profile' element={<AdminProfile/>}></Route>
            <Route  path='/admindashboard/createproject' element={<Createproject/>}></Route>
            <Route  path='/admindashboard/allproject' element={<Allproject/>}></Route>
            <Route  path='/admindashboard/projectreport' element={<ProjectReport/>}>
                <Route path='/admindashboard/projectreport/active' element={<ActiveProject/>}></Route>
                <Route  path='/admindashboard/projectreport' element={<Navigate replace to="/admindashboard/projectreport/active" />}></Route>
                <Route path='/admindashboard/projectreport/closed' element={<ClosedProject/>}></Route>
                <Route path='/admindashboard/projectreport/delayed' element={<DelayedProject/>}></Route>
            </Route>
            
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
