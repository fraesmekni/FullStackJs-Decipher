import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Event from '../../Components/event/event';
import { getCourses } from '../../coursereduc/courseActions';

function Courses() {
    const dispatch = useDispatch();
    const courses = useSelector((state) => state.courseDisplay.courses);
  
    useEffect(() => {
      dispatch(getCourses());
    }, [dispatch ]);
    console.log("ena el products" + Array.isArray(courses) );

   
   const handleRefresh = () => {
     setTimeout(() => {
       dispatch(getCourses());
     }, 1000); 
     console.log("after 1 second");// Refresh after 1 seconds (adjust the number as needed)
   };
  return (
    <div>        

 {Array.isArray(courses) && courses.map((c) => (
          <Event course={c} key={c._id} >

          </Event>
        ))}

    </div> 
  )
}

export default Courses