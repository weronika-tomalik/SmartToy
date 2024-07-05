import React from 'react';

import {Col, Container, Row, Nav, Navbar, NavLink} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import "./homePage.scss";

const HomePage = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    }

    return (

        <Container className='container-test'>
            {/*<Row>*/}
            {/*    <Navbar bg="light" data-bs-theme="light">*/}
            {/*        <Container>*/}
            {/*            <Navbar.Brand href="#home">Smart Toys</Navbar.Brand>*/}
            {/*            <Nav className="me-auto">*/}
            {/*                <NavLink href="#home">Home</NavLink>*/}
            {/*                <NavLink href="#features">Add Toy</NavLink>*/}
            {/*                <NavLink href="#pricing">New toy set</NavLink>*/}
            {/*            </Nav>*/}
            {/*        </Container>*/}
            {/*    </Navbar>*/}
            {/*</Row>*/}
            <Row className='test'>
                <Col className='col-test' >Smart Toys</Col>
            </Row>
            <Row className="test">
                <Col className='col-test'>
                    <Button onClick={() => handleNavigate('/newtoy')} variant="outline-light" className='btn-test'>Dodaj zabawkę</Button>
                    <Button onClick={() => handleNavigate('/newlistoftoys')} variant="outline-light" className='btn-test'>Nowy zestaw</Button>
                </Col>
            </Row>
            <Row className="test ">
                <Col className='col-test'>Your toys</Col>
            </Row>
            <Row className="test " >
                <Col onClick={() => handleNavigate("/toymovement")} className='col-test' sx={12}  md={4}><Button variant="outline-light" className='btn-test'>Movement Toys</Button></Col>
                <Col onClick={() => handleNavigate("/toyinteractive")} className='col-test' sx={12}  md={4}><Button variant="outline-light" className='btn-test'>Interactive Toys</Button></Col>
                <Col onClick={() => handleNavigate("/toystructural")} className='col-test' sx={12}  md={4}><Button variant="outline-light" className='btn-test'>Structural Toys</Button></Col>
            </Row>
            <Row className="test">
                <Col className='footer-test'>Footer info</Col>
            </Row>
        </Container>

    );
};

export default HomePage;