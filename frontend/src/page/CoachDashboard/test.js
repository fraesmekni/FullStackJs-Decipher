import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./CoachDashboard.css"
import { useSpring, animated } from '@react-spring/web'

import {
  VictoryChart,
  VictoryAxis,
  VictoryPie,
  VictoryStack
} from 'victory';
import Loader from '../../Components/Loader';


function TEST() {
  const props = useSpring({
    from: { transform: 'translateY(-100%)' },
    to: { transform: 'translateY(0%)' },
    config: { tension: 200, friction: 20 },
  });
  const [popularCourseData, setPopularCourseData] = useState([]);
  const colorScale = ["#8B5A2B", "#CD853F", "#A0522D", "#8B4513", "#D2691E", "#A5673F", "#6B4423", "#654321", "#D2B48C", "#DEB887"];
  const animation = {
    duration: 2000,
    easing: 'bounce',
  };
  useEffect(() => {
    axios.get('http://localhost:5000/course/getPopularCat')
      .then(res => {
        const data = res.data.map(item => ({ label: item.category, value: Number(item.count) }));
        console.log(data);
        setPopularCourseData(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <animated.div style={props}>

    <div>
        <h4 style={{color : "white",marginBottom : "-50px"}}> Popular Course Categories</h4>
    {popularCourseData.length > 0 ? (
        
  <VictoryPie  
  data={popularCourseData}          colorScale={colorScale}
  animate={animation}
  style={{
  labels: { fontSize: 10 , fontWeight: "bold", fill: "white" }
}}
  x="label"
  y="value"
  labelRadius={40}
  height={250}
  width={250}  

/>
    ) : (
     <Loader />
    )}
  </div>     </animated.div>

  );
}

export default TEST;