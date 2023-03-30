import axios from "axios";
import { useState } from "react";
import { COURSE_ADD_FAIL, COURSE_ADD_REQUEST, COURSE_ADD_SUCCESS, LESSON_ADD_REQUEST, LESSON_ADD_SUCCESS, SET_COURSE_ID, UPDATE_COURSE_FAIL, UPDATE_COURSE_REQUEST, UPDATE_COURSE_SUCCESS, UPDATE_LESSON_REQUEST } from "./courseConstants";

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
      export const updateCourse = ({titleCourse,descriptionCourse,category,coach,thumbnailCourse,id}) => async (dispatch)=>{
        try {
              dispatch({
                  type:UPDATE_COURSE_REQUEST
              })
              const config = {
                  headers:{
                      'Content-Type' : 'multipart/form-data'
                  }
              }
      
              const { data } = await axios.put(
                `http://localhost:5000/course/updateCourse/${id}`,
                  {titleCourse,descriptionCourse,category,coach,thumbnailCourse},
                  config
                );
      
              dispatch({
                  type : UPDATE_COURSE_SUCCESS,
                  payload : data
              })
           
             // localStorage.setItem('userInfo', JSON.stringify(data))
      
             } catch(error){

                dispatch({
                    type: UPDATE_COURSE_FAIL,
                    payload: error.response && error.response.data.message
                        ? error.response.data.data.message
                        : error.message
                });
            
            console.log(error.response.data.message);
        }
      }
      
      export const updateLesson = ({titleLesson, descriptionLesson,contentLesson,typeLesson,course,id}) => async (dispatch)=>{
        try {
              dispatch({
                  type:UPDATE_LESSON_REQUEST
              })
              const config = {
                  headers:{
                      'Content-Type' : 'multipart/form-data'
                  }
              }
      
              const { data } = await axios.put(
                `http://localhost:5000/course/updateLesson/${id}`,
                  {titleLesson, descriptionLesson,contentLesson,typeLesson,course},
                  config
                );
      
              dispatch({
                  type : UPDATE_COURSE_SUCCESS,
                  payload : data
              })
           
             // localStorage.setItem('userInfo', JSON.stringify(data))
      
             } catch(error){

                dispatch({
                    type: UPDATE_COURSE_FAIL,
                    payload: error.response && error.response.data.message
                        ? error.response.data.data.message
                        : error.message
                });
            
            console.log(error.response.data.message);
        }
      }
      
  