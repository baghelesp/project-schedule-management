import React from "react";


import { TiTick } from "react-icons/ti";
import SlideShow from "./SlideShow/SlideShow";
import img1 from '../../assets/homeImg.png'

function Header() {
  
  
  return <>
  <div class="md:flex flex-row bg-gradient-to-r from-indigo-400 to-gray-400 p-2 md:p-6 ">
    

    <div class=" w-full ">
      <div class="  ">
      
        <SlideShow/> 
      </div>
    </div>

  </div>
  <div class="flex bg-gradient-to-r from-gray-600 to-indigo-500 sm:p-16 p-7">

      <div class="md:w-1/3 w-full text-white m-2">

      <div 
        class="md:text-3xl sm:text-1xl text-[15px]">
          #1 Project Management tool used all over the world
      </div>

      <div 
        class="pt-5 pb-3 text-[11px] sm:text-1xl font-semibold">
          EACH PRODUCT ON A FREE PLAN:
      </div>

      <ul>
        <div class="flex "><TiTick size={20} /><li class="mb-3">Supports up to 10 users</li></div>
        <div class="flex "><TiTick size={20} /><li class="mb-3"></li><li class="mb-3 text-[11px] sm:text-[15px]">Includes 2 GB storage</li></div>
            
        <div class="flex "><TiTick size={20} /><li class="mb-3"></li><li class="mb-3 text-[11px] sm:text-[15px]">Offers Community support</li></div>
            
        <div class="flex "><TiTick size={20} /><li class="mb-3"></li><li class="mb-3 text-[11px] sm:text-[15px]">Is always free, no credit card needed</li></div>
      </ul>

      </div>
      <div class="md:w-2/3 hidden md:block">
        <img class="w-full"src={img1} /> 
      </div>
  </div>
  <div >
    <h1 class="md:text-3xl text-[12px] text-center pt-1 md:p-3 md:pt-5  bg-gradient-to-r from-gray-200 to-indigo-100">
      Trusted by over 100,000 customers world-wide
    </h1>
  </div>
  </>


}

export default Header;
