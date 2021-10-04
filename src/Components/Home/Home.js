import React from 'react';
import { useContext } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { CourseContext } from '../../App';
import heroImg from '../../images/hero-img.png';
import './Home.css';

const Home = () => {
    /* Receive Fake JSON Data from App.js using Context Api */
    const courses = useContext(CourseContext);
    return (
        <div>
            {/* Hero Part */}
            <section className="bg-light pt-5">
                <Container>
                    <Row xs={1} md={2} className="d-flex align-items-center">
                        <Col className="hero-text mb-5 mb-md-0">
                            <p className="border border-danger text-danger rounded-pill p-2 hero-text text-center"><small>MAKE YOUR DREAM TRUE</small></p>
                            <h1 className="fw-bold">Find your <span className="text-danger">Course <br /> </span><span>&amp;</span> Make your Dream True</h1>
                            <button size="lg" className="btn-grad">Get Started</button>
                        </Col>
                        <Col className="text-center">
                            <img className="img-fluid" src={heroImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* Course Part */}
            <section className="py-5">
                <div>
                    <h1 className="text-center mb-4 fw-bold">Course</h1>
                </div>
                <Container>
                    <Row xs={1} md={2} className="g-4">
                        {
                            courses?.slice(0, 4).map((course) =>
                                <Col key={course.id}>
                                    <Card className="shadow">
                                        <Card.Img variant="top" src={course.thumbnail} />
                                        <Card.Body>
                                            <Card.Title className="fs-4 card-title">{course.course_name}</Card.Title>
                                            <Card.Text>{course.description.slice(0, 178)}</Card.Text>
                                            <Row md={2} className="pt-3 border-top card_footer d-flex align-items-center">
                                                <Col>
                                                    <h5 className="mb-0"><span className="text-danger fw-bold">Price:</span> ${course.price}</h5>
                                                </Col>
                                                <Col>
                                                    <button className="btn btn-grad">See More</button>
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        }
                    </Row>
                </Container>
            </section>
        </div >
    );
};

export default Home;