/* eslint-disable no-duplicate-case */
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from "./userconstant";

 export const userLoginReducer=(state={},action)=>{
    // eslint-disable-next-line default-case
    switch (action.type) {
        case USER_LOGIN_REQUEST : 
            return {loading : true}
        case USER_LOGIN_SUCCESS : 
            return {loading : false , userInfo : action.paylaod}
        case USER_LOGIN_FAIL :
            return {loading : false , error: action.paylaod }        
        case USER_LOGOUT:
            return {}
        default:
            return state    

    }
 }
 export const userRegisterReducer=(state={},action)=>{
    // eslint-disable-next-line default-case
    switch (action.type) {
        case USER_REGISTER_REQUEST : 
            return {loading : true}
        case USER_REGISTER_SUCCESS : 
            return {loading : false , userInfo : action.paylaod}
        case USER_REGISTER_FAIL :
            return {loading : false , error: action.paylaod }        
        default:
            return state    

    }
 }