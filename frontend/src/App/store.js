import { createStore, combineReducers , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
//el store houwa objet bch ykounou fih des données partagées bin el components lkol

import {userLoginReducer} from '../Reducers/UserReducers'
const reducer = combineReducers({
    //reducers
    userLogin : userLoginReducer
})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null 


const initialState ={
        //localstorage
        userLogin : {userInfo: userInfoFromStorage}
  }
  const middleware = [thunk]
  
  const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware)));
  
  export default store 