import { PROJECT_COMMENT_SUCCESS,PROJECT_COMMENT_REQUEST,PROJECT_COMMENT_FAIL, PROJECT_UNCOMMENT_REQUEST, PROJECT_UNCOMMENT_SUCCESS, PROJECT_UNCOMMENT_FAIL } from "./constant"

export const commentproject=(state={},action)=>{
    // eslint-disable-next-line default-case
    switch (action.type) {
        case PROJECT_COMMENT_REQUEST : 
            return {loading : true}
        case PROJECT_COMMENT_SUCCESS : 
            return {loading : false , projectcomment : action.payload}
        case PROJECT_COMMENT_FAIL :
            return {loading : false , error: action.payload }        
        default:
            return state    

    }
 }
export const uncommentproject=(state={},action)=>{
    // eslint-disable-next-line default-case
    switch (action.type) {
        case PROJECT_UNCOMMENT_REQUEST : 
            return {loading : true}
        case PROJECT_UNCOMMENT_SUCCESS : 
            return {loading : false , projectcomment : action.payload}
        case PROJECT_UNCOMMENT_FAIL :
            return {loading : false , error: action.payload }        
        default:
            return state    

    }
 }