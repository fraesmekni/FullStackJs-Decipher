import React, {  useState } from 'react'
import backg from "./backg.jpg";
import {useQuery} from '@apollo/client'
import  {getProject} from '../../Query/projectQuery'
import { useParams } from 'react-router-dom';
import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap';
import "./project.css"
import { useDispatch, useSelector } from 'react-redux';
import {projectcomment,unprojectcomment} from '../../redux/action'

const DetailProject = () => {
    const {id} =useParams()
    const dispatch=useDispatch()
    const userLogin = useSelector((state)=>state.userLogin)
    const {userInfo} = userLogin
    const [comment,setComment]=useState({
        like:false,
        msg:"",
        user:userInfo._id
    })
    const {data,refetch} = useQuery(getProject,{variables:{
        id
      }})
      const likee=()=>{
        setComment(pres=>({
            ...comment,like:true
        }))
      }
      const unlikee=()=>{
        setComment(pres=>({
            ...comment,like:false
        }))
      }

      const submitHandler=(e)=>{
        e.preventDefault()
        setComment(pres=>({
            ...comment,user:userInfo
        }))
        setComment(pres=>({
            ...comment,like:true
        }))
        console.log(id)
        dispatch(projectcomment({comment:comment,id:id}))
        setComment(pres=>({
            ...comment,msg:""
        }))
        
    }
    
    return (
        <>    <body style={{backgroundImage:`url(${backg})`}}>
               
                {data ? ( 
        <div className="containerdetail">
  <div className="images">
  <img className="img" src={`${process.env.PUBLIC_URL}/images/${data?.project?.imageUrl}`}  />
  </div>
  <div className="product1"> 
  
    <p className="pdetail"> {data?.project?.name}- by {data?.project?.projectCreator?.firstName} {data?.project?.projectCreator?.lastName}</p>
    {/* <h1 className="h1detail">{data?.project.data?.projectName}</h1> */}
    <h2 className="h2detail">{data?.project?.ammounttocollect} Dt </h2>
    <p className="desc pdetail">{data?.project?.description}</p>
    {!comment.like  ? <i onClick={likee} className="fa-regular fa-heart fa-2xl" style={{color:" #EB1414"}}></i>:<i onClick={unlikee} className="fa-solid fa-heart fa-2xl" style={{color: "#EB1414"}}></i>}

   
</div>

   
            <Row>  
            <Col style={{marginLeft:"50px"}}md={10}>
          <h3> Comment Section</h3>
          <ListGroup style={{paddingBottom:"50px"}} variant="flush">
            {data?.project?.comment?.map((review)=>
              <ListGroup.Item  key={review?.id} >
                <strong>{review?.user.firstName} {review?.user.lastName}</strong> 
                <p>{review?.msg}</p>
                
               
                  
              </ListGroup.Item>
            )}
            <ListGroup.Item>
              <h2>Write a Comment </h2>
              {userInfo ? (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="comment">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control as='textarea' rows='3'
                   value={comment.msg}
                    onChange={(e)=>setComment(pres=>({
                        ...comment,msg:e.target.value
                    }))} 
                    ></Form.Control>

                </Form.Group>
                   <Button type="submit" onClick={() => refetch({cancelRefetch:false})} style={{color:"orange",backgroundColor:"#00008B"}}> submit</Button>
              </Form>):""}
            </ListGroup.Item>  

          </ListGroup>
        </Col>
            </Row>
           
    
            </div> ):<>not found</>}
 </body> </>
    )
}

export default DetailProject