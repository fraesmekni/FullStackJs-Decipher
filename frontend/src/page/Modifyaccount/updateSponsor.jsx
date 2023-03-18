import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import video from "../../Components/HeroSection/pottery2.mp4";
import "../../Components/HeroSection/HeroSection.css";
import "../Register/register.css"


import SpecialButton from "../../Components/Button/button";

import Message from "../../Components/Message";
 import Loader from "../../Components/Loader";
 import { Alert } from "react-bootstrap";
 import FormContainer from "../../Components/FormContainer";

import {update} from "../../userredux/useraction"
const UpdateCoach = () => {



    const [firstName , setFirstName]=useState('')
    const [lastName , setLastName] = useState('')
    const [phone , setPhone]=useState('')
    const [email , setEmail]=useState('')
    const [imageUrl , setImageUrl] = useState('')
    const [password , setPassword]=useState('')
  
    const [dateOfBirth , setDateOfBirth]=useState('')

    const userLogin =useSelector(state =>state.userLogin)
    const {userInfo} =userLogin

      //validateurs simple user
  const [validFirstName, setValidFirstName] = useState(false);
  const [validLastName, setValidLastName] = useState(false);

  const [validPhone, setValidPhone] = useState(false);
  const [validDateOfBirth, setValidDateOfBirth] = useState(false);
  const [validImageUrl, setValidImageUrl] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validConfirmPassword, setValidConfirmPassword] = useState(false);
  const [validPassword, setValidPassword] = useState(false);



    // Clear the input field when the user interacts with it

    function handleInputFocus(e) {
        e.target.value = "";
      }


    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error } = userRegister;

    const dispatch = useDispatch();

      //hedhi bch taamelek el redirection
  const navigate = useNavigate();

  const messageSuccess = "";




    const submitHandler=async(e)=>{
      e.preventDefault();

       // dispatch(update(firstName,lastName,phone,email,imageUrl,password,dateOfBirth))

       let result = await fetch(`http://localhost:5000/api/user/updateUser/${userInfo._id}`,{
        method:"put",
        body:JSON.stringify({firstName,lastName,phone,email,imageUrl,password,dateOfBirth}),
        headers:{
            "Content-type":"application/json"
        }
       
    })


    result = await result.json();
    console.warn(result)


    }




    const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
    const PHONE_REGEX = /^[2-9][0-9]{7}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

    const DATE_REGEX =/^(?:19|20)\d{2}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12]\d|3[01])$/;
    const IMAGE_REGEX = /\.(png|jpe?g)$/i;
    const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



{/* use effects taa controle de saisie */}

  useEffect(() => {
    const result = USER_REGEX.test(firstName);

    setValidFirstName(result);
  }, [firstName]);

  useEffect(() => {
    const result = USER_REGEX.test(lastName);

    setValidLastName(result);
  }, [lastName]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);

    setValidEmail(result);
  }, [email]);


  
  useEffect(() => {
    const result = PWD_REGEX.test(password);

    setValidPassword(result);
  }, [password]);




  useEffect(() => {
    const result = PHONE_REGEX.test(phone);

    setValidPhone(result);
  }, [phone]);

  useEffect(() => {
    const result = IMAGE_REGEX.test(imageUrl.name);

    setValidImageUrl(result);
  }, [imageUrl]);
  useEffect(() => {
    if (dateOfBirth) {
      const inputDate = new Date(dateOfBirth);
      const today = new Date();
      const diffInMilliseconds = today.getTime() - inputDate.getTime();
      const age = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 365));
      if (age >= 18) {
        setValidDateOfBirth(true);
      } else {
        setValidDateOfBirth(false);
      }
    }
  }, [dateOfBirth]);



 
  return (
    <>   

      {/* el video taa el background */}
      <div className="hero-container">
        <video src={video} autoPlay loop muted />
        {/* el message taa el controle de saisie w el loader   */}
       
        <section className="marginTops">
          {error && <div className="alert">{error}</div>}
          {messageSuccess && <div className="alertgreen">{messageSuccess}</div>}

          {loading && <Loader />}
        </section>
        {/* form start    */}
        <form
          className="register"
          onSubmit={submitHandler}
          encType="multipart/form-data"
          
        >
          <div
            align="center"
            style={{ marginBottom: "20px", marginTop: "-20px" }}
          >
            {" "}
            <h1>Update User</h1>{" "}
          </div>
            <label>First Name</label>
              <input
                id="firstName"
                type="text"
                placeholder={ userInfo.firstName}
                value={firstName}
                
                onChange={(e) => setFirstName(e.target.value)}
              ></input>

              <p
                id="notefirstname"
                className={firstName && !validFirstName ? "none" : "hide"}
              >
                First Name is at least 3 letters and cannot contain special
                characters or numbers
              </p>

              <label>Last Name </label>
              <input
                id="lastName"
                
                type="text"
                placeholder={userInfo.lastName}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
              <p
                id="notelastname"
                className={lastName && !validLastName ? "none" : "hide"}
              >
                Last Name is at least 3 letters and cannot contain special
                characters or numbers
              </p>
              <label>Email</label>
              <input
                id="email"
                
                type="email"
                placeholder={userInfo.email}
                 value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <p
                id="noteemail"
                className={email && !validEmail ? "none" : "hide"}
              >
                Enter a valid e-mail adress{" "}
              </p>
              <label>Password</label>
              <input
                id="password"
                type="password"
             
                
                placeholder="change password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
             
              <label>Phone</label>
              <input
                id="phone"
                type="phone"
                placeholder={userInfo.phone}
                
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></input>
              <p
                id="noteephone"
                className={phone && !validPhone ? "none" : "hide"}
              >
                Phone contains 8 digits{" "}
              </p>


              <label>Date Of Birth</label>
                <input
                  id="dateOfBirth"
                  type="date"  
                  
                  onFocus={handleInputFocus}
                  onChange={(event) => setDateOfBirth(event.target.value)}
                />
              

              <p
                id="noteedate"
                className={dateOfBirth && !validDateOfBirth ? "none" : "hide"}
              >
                You need to be at least 18 years old{" "}
              </p>

              <label>Profile Picture</label>
              <input
                id="imageUrl"
                type="file"
                name="imageUrl"
                value={imageUrl}
                accept=".png, .jpg, .jpeg"
                onChange={(e) => setImageUrl(e.target.files[0])}
              ></input>

              <p
                id="noteimag"
                className={imageUrl && !validImageUrl ? "none" : "hide"}
              >
                Enter Valid image type : png , jpg or jpeg{" "}
              </p>

              <Button
                style={{ marginTop: "5px" }}
                type="submit"
              >
               Update 
              </Button>
        </form>
     </div>
      </>
  )
}

export default UpdateCoach


