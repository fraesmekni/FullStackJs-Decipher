import React, { useState } from 'react';
import { Container, Row, Col, Button, Card ,CardGroup, Accordion, ListGroup} from 'react-bootstrap';

const CourseDetail= () => {
        const [isExpanded, setIsExpanded] = useState(true);
      
        const toggleExpand = () => {
          setIsExpanded(!isExpanded);
        };
  return (
    <Container style={{marginTop:"100px"}}>
      <Row>
        <Col md={8}>
          <iframe
            width="100%"
            height="415"
            src="https://www.youtube.com/embed/Z54bL6kjyOI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
           <div className="mt-2">
            <h4>Description</h4><Row md={2}>
            <Card className="description-card">
              <Card.Body>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod massa id erat congue, euismod maximus enim laoreet. Fusce quis scelerisque sapien, vel egestas sapien. Fusce vel magna sit amet nibh tempor lobortis.
                </Card.Text>
              </Card.Body>
            </Card></Row>
            <h4 className="mt-5">What you'll learn</h4>
            <ListGroup className="learning-list">
              <ListGroup.Item>
                <div className="d-flex align-items-center">
                  <div className="learning-icon">
                    <i className="far fa-check-circle"></i>
                  </div>
                  <div>
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <p>
                      Consectetur adipiscing elit. Sed euismod massa id erat congue, euismod maximus enim laoreet.
                    </p>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-flex align-items-center">
                  <div className="learning-icon">
                    <i className="far fa-check-circle"></i>
                  </div>
                  <div>
                    <h5>Consectetur adipiscing elit</h5>
                    <p>
                      Sed euismod massa id erat congue, euismod maximus enim laoreet. Fusce quis scelerisque sapien, vel egestas sapien. Fusce vel magna sit amet nibh tempor lobortis.
                    </p>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-flex align-items-center">
                  <div className="learning-icon">
                    <i className="far fa-check-circle"></i>
                  </div>
                  <div>
                    <h5>Sed euismod massa id erat congue</h5>
                    <p>
                      Fusce quis scelerisque sapien, vel egestas sapien. Fusce vel magna sit amet nibh tempor lobortis.
                    </p>
                  </div>
                </div>
              </ListGroup.Item>
              <ListGroup.Item>
                <div className="d-flex align-items-center">
                  <div className="learning-icon">
                    <i className="far fa-check-circle"></i>
                  </div>
                  <div>
                    <h5>Fusce quis scelerisque sapien</h5>
                    <p>
                      Vel egestas sapien. Fusce vel magna sit amet nibh tempor lobortis. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </ListGroup.Item> <ListGroup.Item>
                <div className="d-flex align-items-center">
                  <div className="learning-icon">
                    <i className="far fa-check-circle"></i>
                  </div>
                  <div>
                    <h5>Fusce quis scelerisque sapien</h5>
                    <p>
                      Vel egestas sapien. Fusce vel magna sit amet nibh tempor lobortis. Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
              </ListGroup.Item></ListGroup> </div>
        </Col>
        <Col md={4}>
        <Card>
            <Card.Header onClick={toggleExpand} style={{ cursor: 'pointer' }}>
              Lessons
            </Card.Header>
            {isExpanded && (
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <div className="d-flex justify-content-between align-items-center">
                      Lesson 1
                      <div>
                        <i className="far fa-check-circle text-success mr-2"></i>
                        <span className="text-muted">12 min</span>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-flex justify-content-between align-items-center">
                      Lesson 2
                      <div>
                        <i className="far fa-play-circle mr-2"></i>
                        <span className="text-muted">7 min</span>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-flex justify-content-between align-items-center">
                      Lesson 3
                      <div>
                        <i className="far fa-play-circle mr-2"></i>
                        <span className="text-muted">9 min</span>
                      </div>
                    </div>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <div className="d-flex justify-content-between align-items-center">
                      Lesson 2
                      <div>
                        <i className="far fa-play-circle mr-2"></i>
                        <span className="text-muted">7 min</span>
                      </div>
                    </div>
                  </ListGroup.Item> <ListGroup.Item>
                    <div className="d-flex justify-content-between align-items-center">
                      Lesson 2
                      <div>
                        <i className="far fa-play-circle mr-2"></i>
                        <span className="text-muted">7 min</span>
                      </div>
                    </div>
                  </ListGroup.Item> <ListGroup.Item>
                    <div className="d-flex justify-content-between align-items-center">
                      Lesson 2
                      <div>
                        <i className="far fa-play-circle mr-2"></i>
                        <span className="text-muted">7 min</span>
                      </div>
                    </div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            )}
          </Card>
          <Button variant="primary">Enroll Now</Button> 
          <br />
          <Card> <Card.Header>Take this Course's Quiz
            </Card.Header>
            <Card.Body>yooooooooo</Card.Body>
            </Card>
          </Col>
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

       

      </Row>
      
    </Container>
  );
};

export default CourseDetail;