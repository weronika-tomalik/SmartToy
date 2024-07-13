import React, { useEffect, useState } from 'react';
import {Button, Col, Container, Row, Card, CardBody, CardTitle, CardText} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import RemoveButton from "../components/RemoveButton";


const CategoryToys = ({typeOfToy}) => {
    const [toys, setToys] = useState([]);

const fetchToys = () => {
        fetch('http://localhost:5000/toys')
            .then(response => response.json())
            .then(data => setToys(data))
            .catch(error => console.error('Error fetching data:', error));
    }


    useEffect(() => {
        fetchToys()
        }
        , []);

    const handleToyRemoved = () => {
        fetchToys();
    };

    const selectedToys = toys.filter(function (toy) {
        if (toy.category === `${typeOfToy}`)
            return toy
    });

    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    }

    return (
        <Container className='container-grid--form'>
            <Row>
                <Col>
                    <h2 className='text-center category__header'>Your {typeOfToy} toys</h2>
                </Col>
            </Row>
            <Row className='justify-content-center'>
            {selectedToys.map((toy, index) => (
                <Card key={toy.id} className='shadow-lg card--category'>
                    <Col>
                    <CardBody>
                        <CardTitle className='card__title--selected'>{index + 1}. {toy.name}</CardTitle>
                        <CardText className='card__text--selected'>
                            {toy.description}
                        </CardText>
                    </CardBody>
                    </Col>
                    <Col >
                    <CardBody className='text-end'>
                        <Button lg={2} onClick={() => handleNavigate(`/updatetoy/${toy.id}`)} variant="outline-dark" className='category__button'>Update toy info</Button>
                        <RemoveButton id={toy.id} onToyRemoved={handleToyRemoved}/>
                    </CardBody>
                    </Col>
                </Card>))}

            </Row>
        </Container>
    );
};
export default CategoryToys