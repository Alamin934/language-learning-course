import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar bg="black" variant="dark" expand="md">
                <Container>
                    <Navbar.Brand className="fs-4">Grow Languages</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/home" className="ms-md-3 ms-0 nav-link">HOME</NavLink>
                            <NavLink to="/about" className="ms-md-3 ms-0 nav-link">ABOUT</NavLink>
                            <NavLink to="/blog" className="ms-md-3 ms-0 nav-link">BLOG</NavLink>
                            <NavLink to="/courses" className="ms-md-3 ms-0 nav-link">COURSES</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;