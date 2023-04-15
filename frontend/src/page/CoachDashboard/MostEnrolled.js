import React, { useState, useEffect } from 'react';
import { VictoryBar, VictoryChart, VictoryAxis } from 'victory';
import { useDispatch, useSelector } from "react-redux";

const EnrollChart = () => {
  const [data, setData] = useState([]);
  const [courses, setCourses] = useState([]);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const getCourse = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/course/courseById/${userInfo._id}`,
        { method: "GET" }
      );
      const data = await response.json();
      setCourses(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const countEnroll = async (course) => {
    try {
      const response = await fetch(`http://localhost:5000/course/countEnroll/${course}`);
      const data = await response.json();
      return data.count;
    } catch (error) {
      console.error(error);
    }
  };

  const getCourseCounts = async () => {
    const courses = await getCourse();
    const counts = await Promise.all(
      courses.map(async (course) => {
        const count = await countEnroll(course._id);
        return { ...course, count };
      })
    );
    return counts;
  };

  useEffect(() => {
    const fetchCounts = async () => {
      const counts = await getCourseCounts();
      setData(counts);
    };
    fetchCounts();
  }, []);
  

  const getMaxEnrollCourse = () => {
    const maxEnroll = Math.max(...data.map((course) => course.count));
    const maxEnrollCourse = data.find(
      (course) => course.count === maxEnroll
    );
    return maxEnrollCourse;
  };

  const maxEnrollCourse = getMaxEnrollCourse();

  return (
    <div>
      <h1>{maxEnrollCourse ? maxEnrollCourse.title : 'No courses available'}</h1>
      {maxEnrollCourse && (
        <VictoryChart domainPadding={20}>
          <VictoryAxis tickFormat={(x) => x} />
          <VictoryAxis dependentAxis />
          <VictoryBar
            data={[{ x: maxEnrollCourse.title, y: maxEnrollCourse.count }]}
            style={{ data: { fill: '#c43a31' } }}
          />
        </VictoryChart>
      )}
    </div>
  );
};
export default EnrollChart;