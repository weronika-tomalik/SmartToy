import React, { useEffect, useState } from 'react';
import {Button, Col, Container, Row, Card, CardBody, CardTitle, CardText} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import RemoveButton from "../components/RemoveButton";


const SelectedToysPage = ({typeOfToy}) => {
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
        <Container className='container-grid'>
            <Row>
                <Col>
                    <h2 className='text-center' style={{fontSize: 'calc(1.5rem + 1vw)', letterSpacing: '5px', marginBottom: '40px'}}>Your {typeOfToy} toys</h2>
                </Col>
            </Row>
            <Row className='justify-content-center'>
            {selectedToys.map((toy, index) => (
                <Card className='shadow-lg' style={{ width: '50rem', border: '1px solid lightgray', marginBottom: '15px', paddingLeft: '30px' }}>
                    <Col >
                    <CardBody key={toy.id}>
                        <CardTitle style={{textTransform: 'lowercase'}}>{index + 1}. {toy.name}</CardTitle>
                        <CardText style={{textIndent: '25px'}}>
                            {toy.description}
                        </CardText>
                    </CardBody>
                    </Col>
                    <Col >
                    <CardBody className='text-end'>
                        <Button lg={2} onClick={() => handleNavigate(`/updatetoy/${toy.id}`)} variant="outline-dark" style={{marginRight: '15px', fontSize: '1rem'}}>Update toy info</Button>
                        <RemoveButton id={toy.id} onToyRemoved={handleToyRemoved}/>
                    </CardBody>
                    </Col>
                </Card>))}

            </Row>
        </Container>
    );
};
export default SelectedToysPage