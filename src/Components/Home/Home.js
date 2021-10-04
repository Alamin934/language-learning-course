import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import heroImg from '../../images/hero-img.png';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="bg-light pt-5">
                <Container>
                    <Row className="d-flex align-items-center">
                        <Col md={6} className="hero-text mb-5 mb-md-0">
                            <p className="border border-danger text-danger rounded-pill p-2 hero-text text-center"><small>MAKE YOUR DREAM TRUE</small></p>
                            <h1 className="fw-bold">Find your <span className="text-danger">Course <br /> </span><span>&amp;</span> Make your Dream True</h1>
                            <button size="lg" className="btn-grad">Get Started</button>
                        </Col>
                        <Col md={6} className="text-center">
                            <img className="img-fluid" src={heroImg} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    );
};

export default Home;