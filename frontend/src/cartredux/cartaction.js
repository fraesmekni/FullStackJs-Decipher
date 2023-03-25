import axios from 'axios'
import { CART_ADD_ITEM, CART_SET_ITEMS } from './cartconstant'
 export const addToCart = (id,qty) =>async(dispatch,getState)=>
 {
    const {data}= await axios.get(`http://localhost:5000/product/${id}`)
    dispatch({
        type: CART_ADD_ITEM,
        payload : {
            product: data._id,
            productName: data.productName,
            imageProduct:data.imageProduct,
            price: data.price,
            countInStock : data.countInStock,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}
export const setCartItems = (userId, cartItems) => async (dispatch) => {
    try {
      localStorage.setItem(`cartItems-${userId}`, JSON.stringify(cartItems));
      dispatch({
        type: CART_SET_ITEMS,
        payload: cartItems,
      });
    } catch (error) {
      console.log(error);
    }
  };