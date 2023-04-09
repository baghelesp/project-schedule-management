import React from 'react';
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';

import { Carousel } from 'react-responsive-carousel';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const img1= require('../../assets/Lpage.jpg');
const img2= require('../../assets/Lpage2.jpg');
const img3= require('../../assets/Lpage3.jpeg');



const Login=()=>{
    const notify = () => {
        toast.success("Registered Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    const [userType,setUserType]=useState("pmo");
    const handleChange = (event) => {
        setUserType(event.target.value);
        console.log(event.target.value);
      };
      const [data, setData]=useState({
        email:"",
        password:"",    

    })
    function handleData(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)
    }

    const navigate=useNavigate();

    const handleSubmit=async(e)=>{
        
        e.preventDefault();
        try{
            const url="http://localhost:5000/api/login";
            axios.post(url, data).then(res=>{
                console.log(res.data.message)
              if(res.data.message=="Successfull")
              {
                
                console.log("Login successfully")
                const userdata=res.data.user;
                console.log("backend data "+ userdata.firstName);
                localStorage.setItem("firstName", userdata.firstName);
                console.log("backend data : "+userdata.lastName)
                localStorage.setItem("lastName", userdata.lastName);
                console.log("backend data : "+userdata.email)
                localStorage.setItem("empemail", userdata.email);
                navigate('/userdashboard')
              }
              else if(res.data.message=="UnSuccessfull")
              {
                console.log("User does not exits")
              }
            })
            
        }catch(error){
            console.log(error)
        }
    }
    return(
        <div class="md:flex  ">
        <div class="w-full md:w-1/3 p-4 m-1 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form class="space-y-6" action="#" onSubmit={(e)=>handleSubmit(e)}>
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign In</h5>
                
                
                <div class="mt-3">
                    <label for="email" class="block  mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email"  value={data.email} onChange={(e)=>handleData(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input  value={data.password} onChange={(e)=>handleData(e)} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                
            <div class="flex items-start">
                <div class="flex items-start">
                    <div class="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
            </div>
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
            </div>
</form>
</div>

<div class="w-full md:w-2/3 py-10">

<Carousel infiniteLoop useKeyboardArrows autoPlay showArrows >
<div>
    <img class="rounded-md" src={img1} />
    
</div>
<div>
    <img class="rounded-md" src={img2} />
    
</div>
<div>
    <img class="rounded-md" src={img3} />
   
</div>
</Carousel>

</div>

</div>

)}

export default Login;