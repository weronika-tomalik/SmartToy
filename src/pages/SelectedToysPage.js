import React, { useEffect, useState } from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import './SelectedToysPage.scss'
const SelectedToysPage = ({typeOfToy}) => {
    const [toys, setToys] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(response => response.json())
            .then(data => setToys(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const selectedToys = toys.filter(function (toy) {
        if (toy.category === `${typeOfToy}`)
            return toy
    });

    const handleNavigate = () => {
        navigate('/newtoy');
    }

    return (
        <Container className='toy__container'>
            <Row>
                <Col className='toy__header'>Your {typeOfToy} toys</Col>
            </Row>
            {selectedToys.map(toy => (
                        <Row  key={toy.id} className='toy__item'>
                            <Col className='toy__item-header' sm={10} lg={8}>{toy.name} </Col>
                            <Col className='toy__item-info' sm={10} lg={8}>{toy.description}</Col>
                        </Row>
                ))}
            <Row className='toy__row-button'>
                <Col className='text-center'>
                    <Button onClick={handleNavigate} variant="outline-light" className='toy__button'>Dodaj nową zabawkę</Button>
                </Col>
            </Row>
        </Container>
    );
};
export default SelectedToysPage