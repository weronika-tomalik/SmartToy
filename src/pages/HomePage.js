import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Button} from "react-bootstrap";

const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col>Smart Toys</Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <Row>
                        <Col><Button variant="outline-info">Wyszukaj</Button>{' '}</Col>
                    </Row>
                    <Row>
                        <Col><Button variant="outline-info">Dodaj zabawkę</Button>{' '}</Col>
                    </Row>
                    <Row>
                        <Col><Button variant="outline-info">Losuj</Button>{' '}</Col>
                    </Row>
                </Col>
                <Col sm={8}>
                    <Row>
                        <Col>Twoje zabawki</Col>
                    </Row>
                    <Row>
                        <Col>Kat. 1</Col>
                        <Col>Kat. 2</Col>
                        <Col>Kat. 3</Col>
                    </Row>
                    <Row>
                        <Col>Kat. 4</Col>
                        <Col>Kat. 5</Col>
                        <Col>Kat. 6</Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>Footer info</Col>
            </Row>

        </Container>
    );
};

export default HomePage;