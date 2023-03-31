import React, { useState, useEffect  } from 'react';
import { useParams,useNavigate, Link } from 'react-router-dom'; 
import "./CourseDetail.css"
import { Container, Row, Col, Button, Card ,CardGroup, Accordion, ListGroup} from 'react-bootstrap';
import { useDispatch , useSelector , } from "react-redux";
import { getCourses } from '../../coursereduc/courseActions';

const CourseDetail= () => {

  const userLogin = useSelector(state => state.userLogin)
    const {userInfo } = userLogin
  const navigate = useNavigate();
    const dispatch = useDispatch();
      const { id } = useParams();
      const [qty,setQty]= useState(1);
      const [lessonIndex,setLessonIndex]=useState(0);
      const courses = useSelector((state) => state.courseDisplay.courses);
      console.log(courses);

      useEffect(() => {
        dispatch(getCourses());
      }, [dispatch ]);
      console.log("ena el products" + Array.isArray(courses) );
      const coursse = courses.find((p) => p._id === id);
      console.log(id);
  
        const [isExpanded, setIsExpanded] = useState(true);
      
        const toggleExpand = () => {
          setIsExpanded(!isExpanded);
        };
        console.log('///////////////////'+coursse);
     

  return ( 
    
    <Container style={{marginTop:"100px"}}>
     
      {coursse ? (
     <>
        
    <Row >
        <Col md={8}>
        {coursse.lessons[lessonIndex].typeLesson ==="Video"?         (
<>
          <iframe
            width="100%"
            height="415"
            src={coursse.lessons[lessonIndex].contentLesson}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> <h4>{coursse.lessons[lessonIndex].titleLesson}</h4> </>):(<Card className="description-card">
          <Card.Body>
            <Card.Text> <h4>{coursse.lessons[lessonIndex].titleLesson}</h4>
            {coursse.lessons[lessonIndex].contentLesson}         </Card.Text>
          </Card.Body>
        </Card>)} </Col>
        <Col md={4}>

        <Card className="lessons">
            <Card.Header onClick={toggleExpand} style={{ cursor: 'pointer' }}>
              Lessons
            </Card.Header>
            {isExpanded && coursse && coursse.lessons.map((lesson,index) =>  (
              
                <div  key={lesson._id}>
                  <Card.Body >
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <div className="d-flex justify-content-between align-items-center">
                        <Link onClick={() => setLessonIndex(index)}>Lesson {index+1} </Link>
                          <div>
                            <i className="far fa-check-circle text-success mr-2"></i>
                            <span className="text-muted">{lesson.typeLesson}</span>
                          </div>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </Card.Body>
                </div>
              ))}
          </Card>
          <Button variant="primary">Enroll Now</Button> 
          </Col>
        </Row>
          <br />
           <div className="mt-2">
            <Row md={2}>
            {/* <Card className="description-card">
              <Card.Body>
                <Card.Text>
                  ken pdf
             </Card.Text>
              </Card.Body>
            </Card> */}
            
            </Row>

            <h4 className="mt-5">What you'll learn</h4>
            <ListGroup className="learning-list">
              <ListGroup.Item>
                <div className="d-flex align-items-center">
                  <div className="learning-icon">
                    <i className="far fa-check-circle"></i>
                  </div>
                  <div>
                    <h5>In This Lesson You will learn : </h5>
                    <p>
                    {coursse.lessons[lessonIndex].descriptionLesson}                  </p>
                  </div>
                </div>
              </ListGroup.Item>
             </ListGroup> </div>
      
          <div className="mt-4">
            <h4>Related Courses</h4>
            <CardGroup>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Course 1</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod massa id erat congue, euismod
                    maximus enim laoreet.
                  </Card.Text>
                  <Button variant="primary">View Course</Button>
                </Card.Body>
              </Card>
              <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Course 2</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod massa id erat congue, euismod
                    maximus enim laoreet.
                  </Card.Text>
                  <Button variant="primary">View Course</Button>
                </Card.Body>               </Card>
                <Card>
                <Card.Img variant="top" src="https://via.placeholder.com/150" />
                <Card.Body>
                  <Card.Title>Course 2</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod massa id erat congue, euismod
                    maximus enim laoreet.
                  </Card.Text>
                  <Button variant="primary">View Course</Button>
                </Card.Body>               </Card> </CardGroup> </div>

       


      </>):(<p> no Course found </p>)}
    </Container> 
  );
};

export default CourseDetail;