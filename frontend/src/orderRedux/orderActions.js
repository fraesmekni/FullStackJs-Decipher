import {
    ORDER_CREATE_REQUEST, 
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAIL,
    ORDER_DETAILS_FAIL,
    ORDER_DETAILS_REQUEST,
    ORDER_DETAILS_SUCCESS
} from './orderConstants.js'
import { CART_REMOVE_ITEM } from '../cartredux/cartconstant'
import axios from 'axios'
import { Logout } from '../userredux/useraction'
export const createOrder = (order) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_CREATE_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.post(`http://localhost:5000/api/orders`, order, config)
  
      dispatch({
        type: ORDER_CREATE_SUCCESS,
        payload: data,
      })
      dispatch({
        type: CART_REMOVE_ITEM,
        payload: data,
      })
      localStorage.removeItem('cartItems')
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(Logout())
      }
      dispatch({
        type: ORDER_CREATE_FAIL,
        payload: message,
      })
    }
  }



  export const getOrderDetails = (orderId) => async (dispatch, getState) => {
    try {
      dispatch({
        type: ORDER_DETAILS_REQUEST,
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`http://localhost:5000/api/orders/${orderId}`, config)
  
      dispatch({
        type: ORDER_DETAILS_SUCCESS,
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(Logout())
      }
      dispatch({
        type: ORDER_DETAILS_FAIL,
        payload: message,
      })
    }
  }