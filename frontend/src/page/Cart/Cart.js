import { useEffect } from 'react';
import "../ProductDetail/ProductDetail.css";
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart } from '../../cartredux/cartaction';
import "./Cart.css"
import { CART_LOAD_ITEMS } from '../../cartredux/cartconstant';

const Cart= (location) => {
  const { id } = useParams();
  const cart = useSelector((state) => state.cart);
const { cartItems } = cart;
const qty = location.search ? Number(location.search.split("=")[1]) : 1;
const user = useSelector((state) => state.userLogin.userInfo._id); // Get the user ID from the store
const dispatch = useDispatch();
console.log(id);
console.log("ena quantity" + qty);
useEffect(() => {
  if (id) {
    dispatch(addToCart(id, qty,user));
  }

  const cartItems = JSON.parse(localStorage.getItem(`cartItems_${user}`)) || []; // Get the cart items for the current user
  dispatch({ type: CART_LOAD_ITEMS, payload: cartItems }); // Load the cart items from localStorage to the store
}, [dispatch, id, qty, user]);

    return (<div style={{marginTop:"200px"}} classname="shoppingcart">
    <Row >
        <Col  md={8}>
          <h1>Shopping Cart</h1>
            {cartItems.length===0? <p>your card is emptyyyyy</p> :(
            <ListGroup variant='flush'>
              {cartItems.map(item =>
                <ListGroup.Item >
                  <Row>
                    <Col md={2}>
                      <Image src={item.imageProduct} alt={item.productName} fluid rounded />
                    </Col>
                    <Col md={3}>
                      {item.productName}
                    </Col>
                    <Col md={2}>{item.price} </Col>
                    <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                    <Col md={2}>
                      <Button
                        type='button'
                        variant='light'
                      >
                        <i className='fas fa-trash'></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>)}
            </ListGroup>
          ) }
        </Col>
        <Col md={6}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>
                  Subtotal 
                  items
                </h2>
             
              </ListGroup.Item>
              <ListGroup.Item>
                <button
                  type='button'
                  className='add'
                >
                  Proceed To Checkout
                </button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row></div>)
}
export default Cart;