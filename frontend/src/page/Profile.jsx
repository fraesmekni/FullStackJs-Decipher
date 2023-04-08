import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Row, Col, ListGroup, Image, Card, } from 'react-bootstrap'
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Table, TableHead, TableRow, TableCell, TableBody ,TablePagination  } from '@material-ui/core';

import {listOrders} from '../orderRedux/orderActions';
import Palette from "@material-ui/icons/Palette";
import add from "@material-ui/icons/Add";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faDashboard, faShop,faChalkboard, faShopLock} from '@fortawesome/free-solid-svg-icons';
import Favorite from "@material-ui/icons/Favorite";
// core components
// import Header from "/components/Header/Header.js";
// import Footer from "/components/Footer/Footer.js";
import Button from "../Components/CustomButtons/Button.js";
import GridContainer from "../Components/Grid/GridContainer.js";
import GridItem from "../Components/Grid/GridItem.js";
import NavPills from "../Components/NavPills/NavPills.js"
import Parallax from "../Components/Parallax/Parallax.js";

import styles from "../Components/styles/jss/nextjs-material-kit/pages/profilePage.js";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader.js";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import backg from "./olive.png";

import Input from "../Components/Input.jsx";
import UploadfFile from "./UploadfFile.jsx";
import { Link, useNavigate } from "react-router-dom";
import { FaChalkboard, FaChalkboardTeacher } from "react-icons/fa";

const useStyles = makeStyles(styles);

export default function Profile() {
  const navigate = useNavigate();

const GotoUserDashboard=()=>{

  navigate('/userdashboard');

}
const GotoCoachDashboard=()=>{
  navigate('/coachdashboard');

}
  const handle=()=>{
    if (show ){
      return setShow(!show)
    }
    return setShow(!show)
  }
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

    const [toggle,setToggle]=useState(()=> {return ['a']}) 
    const userLogin = useSelector(state => state.userLogin)
    const {loading , error,userInfo } = userLogin  
    
    const addFiled=()=>{
      if (toggle.length<5) {
        setToggle([...toggle,'&'])
      }
    }
    
const dispatch = useDispatch();

const orderList = useSelector((state) => state.orderList);
const { loading : loadingList , error : errorList , orders } = orderList;

  
    const [show,setShow]=useState(false)
   
    useEffect(() => {
      dispatch(listOrders(userInfo._id));
    }, [dispatch, userInfo._id]);


  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>

    {loading && <Loader></Loader>} 
      <Parallax small filter image="/images/handmade.jpg" />       

      <div style={{backgroundColor: "#43312d",backgroundImage:`url(${backg})`}} className={classNames(classes.main, classes.mainRaised)}>        <div> <div></div>
          <div className={classes.container}>
            <GridContainer  justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img
                      src={"/images/"+userInfo.imageUrl}
                      alt="..."
                      style={{"borderRadius": "50%","height":"160px"}}
                    />
                  </div>
                  {userInfo.certified ? (
  <FontAwesomeIcon style={{marginTop:"-300px"}} onClick={GotoUserDashboard} icon={faShop}   color="#FCFFE7" size="2x" />
) : (
   userInfo.role.name === "coach" ? 
  <FontAwesomeIcon style={{marginTop:"-300px"}} onClick={GotoCoachDashboard} icon={faChalkboardTeacher}  color="#FCFFE7" size="2x" /> : 
  <FontAwesomeIcon style={{marginTop:"-300px"}}  icon={faShopLock}   color="#FCFFE7" size="2x" />

)}

             
                  <div className={classes.name +"py-3"}>
                    <h3 style={{ color: "#FCFFE7"}}className={classes.title}>{userInfo.lastName+" "+userInfo.firstName}</h3>
                     <h6 style={{ color: "#FCFFE7"}}> {userInfo.role.name}</h6> 
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
               
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="#000"
                  tabs={[
                    {
                      tabButton: "Course",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/images/1e8e248f-04de-428d-bb5a-ef1b4992550e-1678730933200.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/images/1e8e248f-04de-428d-bb5a-ef1b4992550e-1678730933200.png"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/images/1e8e248f-04de-428d-bb5a-ef1b4992550e-1678730933200.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/images/1e8e248f-04de-428d-bb5a-ef1b4992550e-1678730933200.png"
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Orders",
                      tabIcon: AssignmentIcon,
                      tabContent: (
                        <GridContainer justify="center">
                           <h1>My Orders</h1>
                          <Table style={{ borderCollapse: 'collapse' }}>
                            <TableHead>
                              <TableRow>
                                <TableCell style={{ padding: '8px', border: '1px solid #ddd' }} >DATE</TableCell>
                                <TableCell>TOTAL</TableCell>
                                <TableCell>PAID</TableCell>
                                <TableCell>DELIVERED</TableCell>
                                <TableCell></TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody style={{color:"#fff"}} >
                            {orders.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order) => (
                                <TableRow key={order._id}>
                                  <TableCell style={{color:"#fff"}}>{order.createdAt.substring(0, 10)}</TableCell>
                                  <TableCell style={{color:"#fff"}}>${order.totalPrice.toFixed(2)}</TableCell>
                                  <TableCell style={{color:"#fff"}}>{order.isPaid ? order.paidAt.substring(0, 10) : 'No'}</TableCell>
                                  <TableCell style={{color:"#fff"}}>
                                    {order.isDelivered ? order.deliveredAt.substring(0, 10) : 'No'}
                                  </TableCell>
                                  <TableCell>
                                    <Link to={`/order/${order._id}`}>
                                    <Button variant="light"  >
                                      Details
                                    </Button>
                                    </Link>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody>
                          </Table>
                         
                            <TablePagination
                rowsPerPageOptions={[5, 10, 25]} // optional: allow user to choose how many rows per page to display
                component="div"
                count={orders.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={(event, newPage) => setPage(newPage)}
                onChangeRowsPerPage={(event) => {
                  setRowsPerPage(parseInt(event.target.value, 10));
                  setPage(0);
                }}
              />
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Events",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/images/1e8e248f-04de-428d-bb5a-ef1b4992550e-1678730933200.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/images/1e8e248f-04de-428d-bb5a-ef1b4992550e-1678730933200.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/images/1e8e248f-04de-428d-bb5a-ef1b4992550e-1678730933200.png"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/images/1e8e248f-04de-428d-bb5a-ef1b4992550e-1678730933200.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/images/1e8e248f-04de-428d-bb5a-ef1b4992550e-1678730933200.png"
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/images/1e8e248f-04de-428d-bb5a-ef1b4992550e-1678730933200.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/images/1e8e248f-04de-428d-bb5a-ef1b4992550e-1678730933200.png"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/images/1e8e248f-04de-428d-bb5a-ef1b4992550e-1678730933200.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/images/1e8e248f-04de-428d-bb5a-ef1b4992550e-1678730933200.png"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/images/1e8e248f-04de-428d-bb5a-ef1b4992550e-1678730933200.png"
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    }
                  ]}
                />
                <GridContainer justify="center">
                  {userInfo.role.name==="coach"  &&
                  <Button  onClick={handle}>add more Experiance</Button>
                  }
                  {userInfo.role.name==="sponsor"  &&
                  <Button  onClick={handle}  >add more Experiance</Button>
                  }
                  

                </GridContainer>
                
                  
                  {show && 
                  <>
                   {toggle.map((index)=>{
                  return <Input
                  key={Math.random()}
                  /> 
                  })} 
                  <Button onClick={addFiled} > Add Filed</Button>
                  </>
                  }
                  
                  
              </GridItem>
            </GridContainer>
            
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
}