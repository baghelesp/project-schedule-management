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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}>
          <Route path='/login' element={<Login/>}> </Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/adminlogin' element={<Adminlogin/>}></Route>
        </Route> 
        <Route  path='/userdashboard' element={<Userdashboard/>}>
            <Route  path='/userdashboard/projects' element={<Projects/>}></Route>
            <Route  path='/userdashboard/profile' element={<Profile/>}></Route>
        </Route> 
        <Route  path='/admindashboard' element={<Admindashboard/>}>
            <Route  path='/admindashboard/createproject' element={<Createproject/>}></Route>
            
        </Route> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
