import React from 'react';
import Navbar from './navbar'
import Header from './header';


import {BrowserRouter,Link,Outlet,Route,Routes} from'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import IndividualIntervalsExample from '../Carousel/IndividualIntervalsExample';


const Landingpage=()=>{
    
    return(
    <div className='container'>
        
       
        <Navbar/>
        <Header/>
        
       
    
    </div>
    )
}
export default Landingpage;