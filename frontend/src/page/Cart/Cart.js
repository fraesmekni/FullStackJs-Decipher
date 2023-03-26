import { useEffect } from 'react';
import "../ProductDetail/ProductDetail.css";
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart , removeFromCart} from '../../cartredux/cartaction';
import "./Cart.css"
import { CART_LOAD_ITEMS, CART_SET_ITEMS } from '../../cartredux/cartconstant';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Cart= (location) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const cart = useSelector((state) => state.cart);
const { cartItems } = cart;
const qty = location.search ? Number(location.search.split("=")[1]) : 1;
const user = useSelector((state) => state.userLogin.userInfo._id); // Get the user ID from the store
const dispatch = useDispatch();
console.log(id);
console.log("ena quantity" + qty);
useEffect(() => {
  
  if (cartItems.length === 0) {
    // Redirect to '/cart' when cart is empty
    navigate('/cart');
  }
  if (id) {
    dispatch(addToCart(id, qty,user));
  }
  const storedCartItems = JSON.parse(localStorage.getItem(`cartItems_${user}`)) || [];
  if (storedCartItems.length > 0) {
    dispatch({
      type: CART_SET_ITEMS,
      payload: storedCartItems.filter((item) => item.qty > 0),
    });
  }
}, [dispatch, id, qty, user]);

const removeFromCartHandler = (id)=>{
  dispatch(removeFromCart(id));
  const storedCartItems = JSON.parse(localStorage.getItem(`cartItems_${user}`)) || [];
  const updatedCartItems = storedCartItems.filter((item) => item.product !== id);
  localStorage.setItem(`cartItems_${user}`, JSON.stringify(updatedCartItems));
}

    return (<div style={{marginTop:"200px",marginLeft:"500px"}} classname="shoppingcart">
    <Row >
        <Col  md={8}>
          <h1 style={{marginLeft:"-120px"}}> Your Shopping Cart</h1>
            {cartItems.length===0?( <div style={{marginLeft:"140px"}}><img style={{width:"120px"}}src='http://cdn.onlinewebfonts.com/svg/img_290414.png'/> <p>Your cart is empty </p> </div>):(
            <ListGroup  variant='flush'>
              {cartItems.map(item =>
                <ListGroup.Item >
                  <Row>
                    <Col md={2}>
                      <Image src={`${process.env.PUBLIC_URL}/images/${item.imageProduct}`} alt={item.productName} fluid rounded />
                    </Col>
                    <Col md={3}>
                      {item.productName}
                    </Col>
                    <Col md={2}>{item.price} DT</Col>
                    <Col md={2}>
                    <Form.Control
                      as='select'
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value), user)
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
                    <Col md={1}>
          <FontAwesomeIcon icon={faTrash} size="xl" 
                  onClick={() => {
                        removeFromCartHandler(item.product);
                  }}
            
          />          </Col>
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
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                items
              </h2>
              
              {cartItems
                .reduce((acc, item) => acc + item.qty * item.price, 0)
                .toFixed(2)}
              DT
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