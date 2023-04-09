import React from "react";

import { Timeline } from 'rsuite';

import {  Grid, Row, Col } from 'rsuite';


function Showtimeline() {
   return (
    <div style={{
      display: 'block', width: 700, paddingLeft: 30
    }}>
      <h4>Trace Product delivery</h4>
      <Timeline>
        <Timeline.Item>Task1</Timeline.Item>
        <Timeline.Item>Task2</Timeline.Item>
        <Timeline.Item>Order Delivered</Timeline.Item>
        <Timeline.Item>Order Delivered</Timeline.Item>

      </Timeline>
    </div>
  );
}

export default Showtimeline;
