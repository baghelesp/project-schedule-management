import React from 'react';
import Navbar from '../Navbar/Navbar'
import Login from '../login/Login'
import Register from '../register/Register'
import Userdashboard from '../Userdashboard/Userdashboard';

import {BrowserRouter,Link,Outlet,Route,Routes} from'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IndividualIntervalsExample from '../Carousel/IndividualIntervalsExample';


const Home=()=>{
    
    return(
    <div className='container mx-auto px-4'>
        
       
        <Navbar/>
        <Outlet/>
       
        
    
    </div>
    )
}
export default Home;