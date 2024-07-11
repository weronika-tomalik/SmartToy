import React from 'react';
import {Button, Col, Row, Card, CardImg, CardBody, CardImgOverlay, CardTitle, CardText} from "react-bootstrap";
import {useNavigate} from "react-router-dom";


const MainCard = ({path, title, myImg, infoText, buttonText}) => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    }
    return (
        <>
            <Card className='text-center shadow-lg' style={{marginBottom: '30px'}}>
                <Row>
                    {myImg && (
                        <Col className='d-none d-lg-block'>
                            <CardImg src={myImg} className='h-100' />
                        </Col>)}
                        <Col>
                            <CardBody style={{fontSize: 'calc(0.5rem + 1vw)'}}>
                                <CardTitle className='card-title' style={{marginTop: '20px', marginBottom: '35px'}}>{title}</CardTitle>
                                <CardText className='card-text' style={{marginBottom: '30px'}}>
                                    {infoText}
                                </CardText>
                                <Button onClick={() => handleNavigate(path)} variant="outline-dark" style={{marginTop: '20px', marginBottom: '20px'}} >{buttonText}</Button>
                            </CardBody>
                        </Col>
                </Row>
            </Card>
        </>
    );
};

export default MainCard;