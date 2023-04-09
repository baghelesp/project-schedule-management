import React from "react";
import Slider from './slider';
import Images from './Images'
import {useChain,useTrail, useSpring, animated } from '@react-spring/web'
import {motion} from 'framer-motion';
import MyComponent from "./Images";
import Img from '../../assets/homeImg.png'
import { FaBeer } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";


function Header() {
  const springs = useSpring({
    from: { x: -100 },
    to: { x: 0 },
    
  })
  
  return <><div class="flex bg-gradient-to-r from-sky-900 to-indigo-900 p-24">
  <animated.div style={{
      ...springs,
      }} 
      class="md:w-1/3 text-white m-2">
        <h1 class="text-3xl">#1 Project Management tool used all over the world</h1>
        <div class="pt-5 pb-3 text-1xl font-semibold">EACH PRODUCT ON A FREE PLAN:</div>
        <ul>
          <div class="flex "><TiTick size={20} /><li class="mb-3">Supports up to 10 users</li></div>
          <div class="flex "><TiTick size={20} /><li class="mb-3"></li><li class="mb-3">Includes 2 GB storage</li></div>
          
          <div class="flex "><TiTick size={20} /><li class="mb-3"></li><li class="mb-3">Offers Community support</li></div>
          
          <div class="flex "><TiTick size={20} /><li class="mb-3"></li><li>Is always free, no credit card needed</li></div>
    </ul>

  </animated.div>
  <div class="md:w-2/3 m-2">
  <motion.div animate={{x:0, scale:1}} transition={{
    duration: 0.6,
    
}} initial={{x:300 ,scale:0.2}}>
  <img src={Img} />
  </motion.div>
  

  </div>
  </div>
  <div><h1 class="text-3xl text-center p-3 mt-5">Trusted by over 100,000 customers world-wide</h1></div>
  </>


}

export default Header;
