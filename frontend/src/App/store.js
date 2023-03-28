import { createStore, combineReducers , applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import {userLoginReducer, userReducers, userRegisterReducer,
  forgetPassword,resetPassword,
  sponsorReducer,coachReducer} from '../userredux/userreducer'
import { productAddReducer, productDetailReducer, productGetReducer, productDeleteReducer ,productReviewReducer} from '../productredux/productreducer';
import { productDetails } from '../productredux/productaction';
import { cartReducer } from '../cartredux/cartreducer';
import { addCourseReducer, addLessonReducer, courseReducers } from '../coursereduc/courseReducers';
//el store houwa objet bch ykounou fih des données partagées bin el components lkol

const reducer = combineReducers({
    //reducers
    userLogin : userLoginReducer,
    userRegister : userRegisterReducer,
    userDisplay : userReducers,
    forgetPassword: forgetPassword,
    resetpass: resetPassword,
    sponsorReducer:sponsorReducer,
    coachReducer:coachReducer,
    productAdd : productAddReducer,
    productGetReducer : productGetReducer,
    productDetail: productDetailReducer, 
       productDelete : productDeleteReducer,
       cart: cartReducer,
       productReview :productReviewReducer,
       addCourse: addCourseReducer,
       addLesson: addLessonReducer,
       courseDisplay: courseReducers,


})

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null 
const ProductInfoFromStorage = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : null 
const cartItemsFromStorage = localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState ={
        //localstorage
        userLogin : {userInfo: userInfoFromStorage},
        userDisplay: {
          userInfo: userInfoFromStorage
        },
        productGetReducer: {
          products: []
        },
        courseDisplay: {
          courses: []
        },
        cart : { cartItems : cartItemsFromStorage}
  }
  const middleware = [thunk]
  
  const store = createStore(
    reducer, 
    initialState, 
    composeWithDevTools(applyMiddleware(...middleware)));
  
  export default store 