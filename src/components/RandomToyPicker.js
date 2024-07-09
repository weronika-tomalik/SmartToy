import React, {useEffect, useState} from 'react';
import {Button, Card, CardBody, CardText, CardTitle, Col, Container, Row } from "react-bootstrap";
import RemoveButton from "./RemoveButton";
function randomElement(array, numElements) {

    if (numElements > array.length) {
        throw new RangeError("Za mało dostępnych elementów");
    }
    const arrayRandomToys = [...array].sort(() => 0.5 - Math.random());

    return arrayRandomToys.slice(0, numElements);
}

const RandomToyPicker = ({interactive, movement, structural}) => {
    const [randomElements, setRandomElements] = useState([]);


    const handleRandomSelection = () => {
        const numElementsToSelect = 2;

        const selectedFromArray1 = randomElement(interactive, numElementsToSelect);
        const selectedFromArray2 = randomElement(movement, numElementsToSelect);
        const selectedFromArray3 = randomElement(structural, numElementsToSelect);

        const combinedResults = [...selectedFromArray1, ...selectedFromArray2, ...selectedFromArray3];
        setRandomElements(combinedResults);
    };



    useEffect(() => {
            if(interactive.length>0 && movement.length>0 && structural.length>0) {
                handleRandomSelection();
            }
        }
        , [interactive, structural, movement]);




    return (
        <Container style={{marginTop: '40px', backgroundColor: 'rgba(215,163,208,0.2)', padding: '30px', borderRadius: '30px'}}>
            <Row>
                <Col className='text-center' style={{marginBottom: '20px'}}>
                    <h2>Here you are! Your new toy set.</h2>
                    <p> Have a fun with your child!</p>
                </Col>
            </Row>
            <Row className='justify-content-center' >
                {randomElements.map((element, index) => (
                    <Col sm={12} lg={7}>
                    <Card key={index} className='shadow-lg' style={{ border: '1px solid lightgray', marginBottom: '15px' }}>
                            <CardBody>
                                <CardTitle style={{textTransform: 'lowercase'}}>{index + 1}. {element.name}</CardTitle>
                                <CardText>{element.category} / {element.description}</CardText>
                            </CardBody>
                    </Card>
                    </Col>))}
            </Row>
        </Container>
    );
};

export default RandomToyPicker;
