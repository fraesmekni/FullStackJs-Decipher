import axios from 'axios'
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS,USER_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS ,USER_REGISTER_FAIL} from "./userconstant"
import { useNavigate } from 'react-router-dom'

export const login = (email,password) => async (dispatch)=>{
    try {
        dispatch({
            type:USER_LOGIN_REQUEST
        })
        const config = {
            headers:{
                'Content-Type' : 'application/json'
            }
        }

        const { data } = await axios.post(
            'http://localhost:5000/api/user/login',
            { email, password },
       
            config
          );

        dispatch({
            type : USER_LOGIN_SUCCESS,
            payload : data
        }) 
        localStorage.setItem('userInfo', JSON.stringify(data))
   
    


    } catch(error){
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          })

    }
}
export const register = (firstName,lastName,cin,phone,dateOfBirth,imageUrl,email,password,speciality,descriptionCoach,dateDebutExperience,dateFinExperience,titrePoste,certification) => async (dispatch)=>{
    try {
        dispatch({
            type:USER_REGISTER_REQUEST
        })
        const config = {
            headers:{
                'Content-Type' : 'application/json'
            }
        }

        const { data } = await axios.post(
            'http://localhost:5000/api/user/register',
            {firstName,lastName,cin,phone,dateOfBirth,imageUrl, email, password,speciality,descriptionCoach,dateDebutExperience,dateFinExperience,titrePoste,certification },
            config
          );

        dispatch({
            type : USER_REGISTER_SUCCESS,
            payload : data
        })
        dispatch ({
            type : USER_LOGIN_SUCCESS,
            payload : data
        })
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch(error){
        dispatch ({
            type : USER_REGISTER_FAIL,
            payload : 
                error.response && error.response.data.message
                ? error.response.data.data.message
                : error.message,
        })

    }
}

export const Logout = ()=>(dispatch) =>{
    localStorage.removeItem('userInfo')
    dispatch({
        type:USER_LOGOUT
    })}