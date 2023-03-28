import axios from "axios";
import { useState } from "react";
import { COURSE_ADD_FAIL, COURSE_ADD_REQUEST, COURSE_ADD_SUCCESS, LESSON_ADD_REQUEST, LESSON_ADD_SUCCESS, SET_COURSE_ID } from "./courseConstants";

export const addCourse = ({ titleCourse ,
    descriptionCourse , 
    category , 
    coach }) => async (dispatch)=>{

          dispatch({
              type:COURSE_ADD_REQUEST
          })
          const config = {
              headers:{
                  'Content-Type' : 'application/json'
              }
          }
  
          const { data } = await axios.post(
              'http://localhost:5000/course/createcourse',
              { titleCourse ,
                descriptionCourse , 
                category , 
                coach },
              config
            );
  
          dispatch({
              type : COURSE_ADD_SUCCESS,
              payload : data
          })
          dispatch({
            type: SET_COURSE_ID,
            payload: data._id
          });         // localStorage.setItem('userInfo', JSON.stringify(data))
  
         
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
          })
       
         // localStorage.setItem('userInfo', JSON.stringify(data))
  
         
      }
    
  