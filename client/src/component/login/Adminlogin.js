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
    
      const [data, setData]=useState({
        email:"",
        password:"",
        favColor:"",
        schoolName:"",
        luckyNumber:""


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
            const url="http://localhost:5000/api/adminlogin";
            axios.post(url, data).then(res=>{
                console.log(res.data.message)
              if(res.data.message=="Successfull")
              {
                notify();
                console.log("Login successfully")
                const userdata=res.data.adminuser;
                console.log("backend data "+ userdata.firstName);
                localStorage.setItem("adminFname", userdata.firstName);
                console.log("backend data : "+userdata.lastName)
                localStorage.setItem("adminLname", userdata.lastName);
                navigate('/admindashboard')
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
        <div class="md:flex ">
        <div class="w-full  md:w-1/3  p-4 m-1 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form class="space-y-6" action="#" onSubmit={(e)=>handleSubmit(e)}>
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">Login</h5>
                
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email"  value={data.email} onChange={(e)=>handleData(e)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input  value={data.password} onChange={(e)=>handleData(e)} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <div>
                    <label for="favColor" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Whats your Favorite Color ?
                            <input value={data.favColor} onChange={(e)=>handleData(e)} type="text" name="favColor" id="favColor" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </label>
                    <label for="schoolName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Whats your school name ?
                            <input value={data.schoolName} onChange={(e)=>handleData(e)} type="text" name="schoolName" id="schoolName" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </label>
                    <label for="luckyNumber" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Whats your lucky number ?
                            <input value={data.luckyNumber} onChange={(e)=>handleData(e)} type="text" name="luckyNumber" id="luckyNumber" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                    </label>
                    </div>  
            <div class="flex items-start">
                <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
            </div>
            <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
            
</form>
</div>

<div class="py-10 w-full md:w-2/3">

<Carousel infiniteLoop useKeyboardArrows autoPlay showArrows  >
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