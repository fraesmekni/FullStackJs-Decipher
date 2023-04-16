import { useState, useEffect } from "react";
import axios from "axios";
import { VictoryPie } from "victory";
import { useDispatch, useSelector } from "react-redux";
import TEST from "./test";

const CoursesChart = () => {
  const [data, setData] = useState([]);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const getCourse = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/course/courseById/${userInfo._id}`,
        { method: "GET" }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const countNotStartedEnrollments = async (courseId) => {
    try {
      const res = await axios.get(`http://localhost:5000/course/countNotStartedEnrollments/${courseId}`);
      return res.data.count;
    } catch (err) {
      console.error(err);
      return 0;
    }
  };

  const countInProgressEnrollments = async (courseId) => {
    try {
      const res = await axios.get(`http://localhost:5000/course/countInProgressEnrollments/${courseId}`);
      return res.data.count;
    } catch (err) {
      console.error(err);
      return 0;
    }
  };

  const countCompletedEnrollments = async (courseId) => {
    try {
      const res = await axios.get(`http://localhost:5000/course/countCompletedEnrollments/${courseId}`);
      return res.data.count;
    } catch (err) {
      console.error(err);
      return 0;
    }
  };

  useEffect(() => {
    async function fetchData() {
      const courseData = await getCourse();
      const newData = await Promise.all(courseData.map(async (course) => {
        const notStarted = await countNotStartedEnrollments(course._id);
        const inProgress = await countInProgressEnrollments(course._id);
        const completed = await countCompletedEnrollments(course._id);
        return {
          x: course.titleCourse,
          y: [notStarted, inProgress, completed],
          labels: [`${notStarted} not started`, `${inProgress} in progress`, `${completed} completed`],
          colorScale: ["#EFDC8D", "#F0904B", "#EFBE49"],
          labelRadius: 10,
       
        };
      }));
      setData(newData);
    }
    fetchData();
  }, [userInfo._id]);

  return (
    <div style={{display:"flex"}}> <TEST></TEST>
        {data ? (<>
      {data.map((d, index) => {
        return (
          <div key={index}>
                        <h4 style={{color: "white", marginBottom : "-30px"}}>{d.x}</h4>

            <VictoryPie  
              data={d.y.map((y, i) => ({ x: d.labels[i], y }))}
              colorScale={d.colorScale}
              labelRadius={d.labelRadius}
              style={{ marginTop : "-500px",
                labels: { fontSize: 12 ,color: "white"}
              }}
              height={300}
              width={300}  
               animate={{
                duration: 1000,
                easing: "bounce",
                onLoad: { duration: 500 }
              }}
            /> 
          </div>
        );
      })} </> ):(<><p>statistics are loading </p> </>)}
           
 </div>
  );
};

export default CoursesChart;
