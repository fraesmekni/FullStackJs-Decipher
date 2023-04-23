import axios from "axios"
import { PROJECT_COMMENT_FAIL, PROJECT_COMMENT_REQUEST, PROJECT_COMMENT_SUCCESS, PROJECT_UNCOMMENT_FAIL, PROJECT_UNCOMMENT_REQUEST, PROJECT_UNCOMMENT_SUCCESS } from "./constant"

export const projectcomment = ({comment,id}) => async (dispatch)=>{
    try {
        dispatch({
            type:PROJECT_COMMENT_REQUEST
        })
        const config = {
            headers:{
                'Content-Type' : 'application/json'
            }
        }
  
        const {data } =await axios.post(
            `http://localhost:5000/api/project/com/${id}`,
            comment,
            config
        )
  
        dispatch({
            type : PROJECT_COMMENT_SUCCESS,
            payload : data
            
        })
    } catch(error){
        dispatch({
            type: PROJECT_COMMENT_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
  
    }
  }
  
  
export const unprojectcomment = ({comentid,id}) => async (dispatch)=>{
    try {
        dispatch({
            type:PROJECT_UNCOMMENT_REQUEST
        })
        const config = {
            headers:{
                'Content-Type' : 'application/json'
            }
        }
  
        const {data } =await axios.post(
            `http://localhost:5000/api/project/com/${id}`,
            comentid,
            config
        )
  
        dispatch({
            type : PROJECT_UNCOMMENT_SUCCESS,
            payload : data
            
        })
    } catch(error){
        dispatch({
            type: PROJECT_UNCOMMENT_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })
  
    }
  }
  
  