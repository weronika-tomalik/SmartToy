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
            <Card className='text-center shadow-lg card'>
                <Row>
                    {myImg && (
                        <Col className='d-none d-lg-block'>
                            {/* d-lg-block element będzie widoczny jako blok tylko na szerokich ekranach*/}
                            <CardImg src={myImg} className='h-100' />
                        </Col>)}
                        <Col>
                            <CardBody className='card__body'>
                                <CardTitle className='card-title card__title' >{title}</CardTitle>
                                <CardText className='card-text card__text' >
                                    {infoText}
                                </CardText>
                                <Button onClick={() => handleNavigate(path)} variant="outline-dark" className='card__button' >{buttonText}</Button>
                            </CardBody>
                        </Col>
                </Row>
            </Card>
        </>
    );
};

export default MainCard;