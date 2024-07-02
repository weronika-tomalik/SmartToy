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
                        <Row key={toy.id} className='toy__item' md={12}>
                            <Col className='toy__item-header'  >{toy.name}</Col>
                            <Col className='toy__item-info' md={12} >{toy.description}</Col>
                        </Row>
                ))}
            <Row className='toy__row-button'>
                <Col><button className='toy__button' onClick={handleNavigate}>Dodaj nową zabawkę</button></Col>
            </Row>
        </Container>
    );
};
export default SelectedToysPage