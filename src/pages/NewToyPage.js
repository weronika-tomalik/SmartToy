import React, {useEffect, useRef, useState} from 'react';
import {FormGroup, FormLabel, FormControl, Form, FormSelect, Container, ToastContainer, Toast, ToastBody, Card, CardBody, CardTitle, CardText} from "react-bootstrap";
import {Button, Row, Col} from "react-bootstrap";
import "./NewToyPage.scss";
import 'react-toastify/dist/ReactToastify.css'


const NewToyPage = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [errors, setErrors] = useState([]);
    const [showToast, setShowToast] = useState(false);
    const [showToys, setShowToys] = useState(false);
    const [toys, setToys] = useState([]);

    const refs = useRef([]);

    useEffect(() => {
        if (refs.current.length > 0) {
            refs.current[refs.current.length - 1]?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [toys]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = [];

        if (!name) {
            newErrors.name = 'Toy name is required!';
        } else if (name.length < 3) {
            newErrors.name = 'Toy name is too short!';
        }

        if (!description) {
            newErrors.description = 'Toy description is required!';
        } else if (description.length < 3) {
            newErrors.description = 'Toy description is too short!';
        }

        if (!category) {
            newErrors.category = 'Select the toys category!';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const newToy = { name, description, category };

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newToy),
        })
            .then((response) => response.json())
            .then((data) => {
                setName('');
                setDescription('');
                setCategory('');
                setShowToast(true);
                setShowToys(true);
                fetchToysByCategory(category);
            })
            .catch((error) => console.error('Error adding task:', error));
    };

    const fetchToysByCategory = (category) => {
        fetch(`http://localhost:5000/toys?category=${category}`)
            .then((response) => response.json())
            .then((data) => setToys(data))
            .catch((error) => console.error('Error fetching toys:', error));
    };

    return (
        <Container className='form__container'>
            <h2 className='text-center'>Add new toy!</h2>
            <Form onSubmit={handleSubmit}>
                <Row className='justify-content-center'>
                    <Col sx={12} sm={8} md={8}>
                        <FormGroup className="mb-3">
                            <FormLabel className='form__label'>Name</FormLabel>
                            <FormControl
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Name of toy"
                                className={`form__control ${errors.name ? 'is-invalid' : ''}`}
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </FormGroup>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col sx={12} sm={8} md={8}>
                        <FormGroup className="mb-3">
                            <FormLabel className='form__label'>Description</FormLabel>
                            <FormControl
                                as="textarea"
                                rows={3}
                                type="text"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                placeholder="About toy"
                                className={`form__control ${errors.description ? 'is-invalid' : ''}`}
                            />
                            {errors.description && <div className="invalid-feedback">{errors.description}</div>}
                        </FormGroup>
                    </Col>
                </Row>
                <Row className='justify-content-center'>
                    <Col sx={12} sm={8} md={8}>
                        <FormGroup>
                            <FormLabel className='form__label'>Category</FormLabel>
                            <FormSelect
                                className={`form__control ${errors.category ? 'is-invalid' : ''}`}
                                aria-label="Default select example"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="" disabled>Select category of toy</option>
                                <option value="structural">Structural</option>
                                <option value="movement">Movement</option>
                                <option value="interactive">Interactive</option>
                            </FormSelect>
                            {errors.category && <div className="invalid-feedback">{errors.category}</div>}
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center'>
                        <Button type="submit" variant="outline-light" className='form__button justify-content-center'>Add Toy</Button>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Col>
                    <ToastContainer position="top-end" className="p-3">
                        <Toast onClose={() => setShowToast(false)} show={showToast} delay={2000} autohide>
                            <ToastBody>Well done!</ToastBody>
                        </Toast>
                    </ToastContainer>
                </Col>
            </Row>
            {showToys && (
                <Row>
                    <Col>
                        <h3 className="text-center" style={{ marginTop: '20px', textTransform: 'capitalize' }}>{category} toys</h3>
                        <Row className='justify-content-center' style={{ marginTop: '25px' }}>
                            {toys.map((toy, index) => (
                                <Col ref={(el) => (refs.current[index] = el)}
                                     key={toy.id} lg={8} style={{ marginBottom: '15px' }}>
                                    <Card>
                                        <CardBody>
                                            <CardTitle>{toy.name}</CardTitle>
                                            <CardText>{toy.description}</CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default NewToyPage