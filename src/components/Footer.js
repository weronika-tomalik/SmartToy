import React from 'react';
import {Col, Button, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <>
                    <Row className="container d-flex py-3" style={{backgroundColor: 'transparent', minWidth: '100vw'}}>
                        <Col sm={12} className='text-center' >
                            <Button variant="outline-light" className='footer__button'>
                            <i className="fab fa-facebook-f"></i>
                            </Button>
                            <Button variant="outline-light" className='footer__button'>
                                <i className="fab fa-youtube"></i>
                            </Button>
                            <Button variant="outline-light" className='footer__button'>
                                <i className="fab fa-instagram"></i>
                            </Button>
                            <Button variant="outline-light" className='footer__button'>
                                <i className="fab fa-twitter"></i>
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className='text-center' style={{backgroundColor: 'transparent', minWidth: '100vw', marginBottom: '10px'}}>SmartToys || © 2024 Copyright: W.Tomalik</Col>
                    </Row>
        </>


    );
};

export default Footer;