import axios from "axios";
import { useState } from "react";
import { COURSE_ADD_FAIL, COURSE_ADD_REQUEST, COURSE_ADD_SUCCESS, COURSE_GET_SUCCESS, LESSON_ADD_REQUEST, LESSON_ADD_SUCCESS, SET_COURSE_ID } from "./courseConstants";

export const addCourse = ({ titleCourse ,
    descriptionCourse , 
    category ,thumbnailCourse,
    coach,course_id }) => async (dispatch)=>{

          dispatch({
              type:COURSE_ADD_REQUEST
          })
          const config = {
              headers:{
                  'Content-Type' : 'multipart/form-data'
              }
          }
  
          const { data } = await axios.post(
              'http://localhost:5000/course/createcourse',
              { titleCourse ,
                descriptionCourse , 
                category ,thumbnailCourse,
                coach },
              config
            );
  
          dispatch({
              type : COURSE_ADD_SUCCESS,
              payload : data
          })        
          return data._id=course_id;

          // localStorage.setItem('userInfo', JSON.stringify(data))
  
         
      }
    
  
export const addLesson = ({ titleLesson,
    descriptionLesson,
     contentLesson,typeLesson,course}) => async (dispatch)=>{
    
          dispatch({
              type:LESSON_ADD_REQUEST
          })
          const config = {
              headers:{
                  'Content-Type' : 'application/json'
              }
          }
  
          const { data } = await axios.post(
              'http://localhost:5000/course/createlesson',
              { titleLesson,
                descriptionLesson,
                 contentLesson,typeLesson,course},
              config
            );
  
          dispatch({
              type : LESSON_ADD_SUCCESS,
              payload : data
          }) ;
       
         // localStorage.setItem('userInfo', JSON.stringify(data))
  
         
      }
    
      export const getCourses = () => async (dispatch) => {
        try {
          const response = await fetch('http://localhost:5000/course/getCourses', {
            method: 'GET',
            headers: {
              accept: 'multipart/form-data',
            },
          });
      
          const data = await response.json();
  
          dispatch({ type: COURSE_GET_SUCCESS, payload: data });
        } catch (error) {
          console.log(error);
        }
      };
     