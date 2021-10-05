import React from 'react';
import { useContext } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { CourseContext } from '../../App';

const Courses = () => {
    /* Receive Fake Data from App.js using Context Api */
    const courses = useContext(CourseContext);
    return (
        <div>
            <section className="py-5">
                <div>
                    <h1 className="text-center mb-4 fw-bold">Course</h1>
                </div>
                <Container>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            courses?.map(course =>
                                <Col key={course.thumbnail}>
                                    {/* Course Details */}
                                    <Card className="shadow position-relative">
                                        <Card.Img variant="top" src={course.thumbnail} />
                                        <Card.Body>
                                            <Card.Title className="fs-4 card-title">{course.course_name}</Card.Title>
                                            <Card.Text>{course.description.slice(0, 178)} <small className="fst-italic text-danger">..{course.instructor}</small></Card.Text>
                                            <Row md={2} className="pt-3 border-top card_footer d-flex align-items-center">
                                                <Col>
                                                    <h5 className="mb-0"><span className="text-danger fw-bold">Price:</span> ${course.price}</h5>
                                                </Col>
                                                <Col>
                                                    <button className="btn btn-grad">See More</button>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                        {/* Course Level */}
                                        <div>
                                            <p className="bg-danger w-25 text-center text-white position-absolute top-0 start-0 m-2 pb-1"><small>{course.course_lavel}</small></p>
                                        </div>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Courses;