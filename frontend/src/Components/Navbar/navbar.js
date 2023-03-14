


import React, { Component , useState,useEffect} from 'react';

import './navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone } from '@fortawesome/free-solid-svg-icons';
import { Navbar} from 'react-bootstrap';
import Example from './sidemenu';
import { Link ,useNavigate } from "react-router-dom";
import NavDropdown from 'react-bootstrap/NavDropdown';
import LinkContainer from 'react-bootstrap/NavLink';
import { useDispatch , useSelector } from 'react-redux';
import { Logout } from '../../userredux/useraction';
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition"

function Navbarr () {
  const dispatch = useDispatch()
  const userLogin =useSelector(state =>state.userLogin)
  const {userInfo} =userLogin
  const navigate = useNavigate();
  const [redirectUrl, setRedirectUrl] = useState("")
  const logoutHandler = () => {
      dispatch(Logout())
  }
  const commands = [
    {
      commands: ["Go to *", "Open *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ]
  const { transcript } = useSpeechRecognition({ commands });
  const pages = ["home", "shop", "courses", "aboutus", "register"]
  const urls = {
    home: "/",
    shop: "/shop",
    courses: "/courses",
    aboutus: "/aboutus",
    register: "/register"
  };
  
 
  
  useEffect(() => {
    if (transcript) {
      for (let i = 0; i < pages.length; i++) {
        if (transcript.toLowerCase().includes(pages[i])) {
          setRedirectUrl(pages[i]);
          break;
        }
      }
    }
  }, [transcript, pages]);
  
  useEffect(() => {
    if (redirectUrl && pages.includes(redirectUrl)) {
      navigate(urls[redirectUrl], { replace: true });
    }
  }, [redirectUrl, navigate, pages, urls]);
  
        return( <>

        <Navbar id='mynav' className={"fixed-top" } expand="lg" background-color="transparent"><nav className="NavbarItems">
            
            <ul>
           
            
                        <li > <Link className="nav_links"  to="/">
                            
                            HOME
                          

                             </Link>
                            <Link  className="nav_links" to="/shop">
                           
                            SHOP
                            
                             </Link>
                            <Link to="/courses" className="nav_links">

                            COURSES
                            
                             </Link>
                            <Link to="/aboutus" className="nav_links">

                            ABOUT US                            
                             </Link>
                           
<<<<<<< HEAD
                               <Link to="/register" style={{marginLeft: '700px'}}className="nav_links">
=======
                               <Link to="/register" style={{marginLeft: '600px'}} className="nav_links">
>>>>>>> 16a7a304b62f6dbf93d83951d8a61ba87b5c6b88

                                    SIGNUP                          
                                    </Link>

           
       {userInfo?(
           <div style={{marginLeft: '1120px',marginTop: '-27.8px'}} > 
                    <NavDropdown   title={userInfo.lastName + " " + userInfo.firstName } id="username">
                      
                        <LinkContainer  to='/profile'>
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                        </LinkContainer>
                        <NavDropdown.Item onClick={logoutHandler} >Logout</NavDropdown.Item>
<<<<<<< HEAD
                    </NavDropdown>
            ): 
            <LinkContainer to={"/login"}>
                signin
                </LinkContainer>         
            }
            
=======
                    </NavDropdown>  </div>
            
            )  : 
            <Link className="nav_links" to={"/login"}>
                signin
                </Link>         
            }  
>>>>>>> 16a7a304b62f6dbf93d83951d8a61ba87b5c6b88

                          

                            
                              <a className="nav_links">    
                              <FontAwesomeIcon icon={faMicrophone}  onClick={SpeechRecognition.startListening} size="lg" />
                              <a className="nav_links" id="transcript"> transcript : {transcript}</a>
</a>
                            </li>
            </ul>
           <div>
           
 </div> 
            </nav> 
            <Example className="disablede"/>
              </Navbar></>
        )

    }

export default Navbarr;