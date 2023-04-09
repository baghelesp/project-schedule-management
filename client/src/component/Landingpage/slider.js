



import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/homeImg.png'




function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        
      </Carousel.Item>
      
      
    </Carousel>
  );
}



export default Slider;