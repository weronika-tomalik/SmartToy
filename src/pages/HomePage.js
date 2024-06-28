import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import "./homePage.scss"




const HomePage = ({setResult}) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/toylist');
    }

    return (
        <Container >
            <Row className='test'>
                <Col className='col-test' >Smart Toys</Col>
            </Row>
            <Row className="test">
                <Col className='col-test'>
                    <Button as={Link} to="/newtoy" variant="secondary" className='btn-test'>Dodaj zabawkę</Button>
                    <Button onClick={handleNavigate} variant="secondary" className='btn-test'>Nowy zestaw</Button>
                </Col>
            </Row>
            <Row className="test ">
                <Col className='col-test'>Your toys</Col>
            </Row>
            <Row className="test " >
                <Col as={Link} to="/toymovement" className='col-test' sx={12}  md={4}><Button variant="outline-light" className='btn-test'>Movement Toys</Button></Col>
                <Col as={Link} to="/toyinteractive" className='col-test' sx={12}  md={4}><Button variant="outline-light" className='btn-test'>Interactive Toys</Button></Col>
                <Col as={Link} to="/toystructural" className='col-test' sx={12}  md={4}><Button variant="outline-light" className='btn-test'>Structural Toys</Button></Col>
                {/*<Col className='header-test' sx={12} sm={6} md={4}><Button variant="outline-light" className='btn-test'>Kat. 4</Button></Col>*/}
                {/*<Col className='header-test' sx={12} sm={6} md={4}><Button variant="outline-light" className='btn-test'>Kat. 5</Button></Col>*/}
                {/*<Col className='header-test' sx={12} sm={6} md={4}><Button variant="outline-light" className='btn-test'>Kat. 6</Button></Col>*/}
            </Row>
            <Row className="test">
                <Col className='footer-test'>Footer info</Col>
            </Row>
        </Container>
    );
};

export default HomePage;