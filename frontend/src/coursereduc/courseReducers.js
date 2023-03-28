import { COURSE_ADD_FAIL, COURSE_ADD_REQUEST, COURSE_ADD_SUCCESS, LESSON_ADD_FAIL, LESSON_ADD_REQUEST, LESSON_ADD_SUCCESS, SET_COURSE_ID } from "./courseConstants"

export const addCourseReducer=(state={},action)=>{
    // eslint-disable-next-line default-case
    switch (action.type) {
        case COURSE_ADD_REQUEST : 
            return {loading : true}
        case COURSE_ADD_SUCCESS : 
            return {loading : false ,messageSuccess : "WE SENT YOU A VERIFICATION E-MAIL!"}
        case COURSE_ADD_FAIL :
            return {loading : false , error: action.payload }        
        default:
            return state    

    }
 }
 export const addLessonReducer=(state={},action)=>{
    // eslint-disable-next-line default-case
    switch (action.type) {
        case LESSON_ADD_REQUEST : 
            return {loading : true}
        case LESSON_ADD_SUCCESS : 
            return {loading : false ,messageSuccess : "WE SENT YOU A VERIFICATION E-MAIL!"}
        case LESSON_ADD_FAIL :
            return {loading : false , error: action.payload }        

        default:
            return state    

    }
 }