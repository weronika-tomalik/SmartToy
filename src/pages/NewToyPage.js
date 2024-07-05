import React, {useState} from 'react';
import {FormGroup, FormLabel, FormControl, Form, FormSelect, Container, ToastContainer, Toast, ToastBody,CloseButton} from "react-bootstrap";
import {Button, Row, Col} from "react-bootstrap";
import "./NewToyPage.scss";

import 'react-toastify/dist/ReactToastify.css';


const NewToyPage = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [errors, setErrors] = useState([]);
    const [showToast, setShowToast] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = [];

        if (!name) {
            newErrors.name = 'Toy name is required.';
        }
        else if (name.length < 3){
            newErrors.name = "Toy name is too short"
        }

        if (description.length < 3){
            newErrors.description = "Toy description is required"
        }

        if (category.length < 1) {
            newErrors.category = "Select the toys category"
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const newToy = {
            name,
            description,
            category
        };

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newToy)
            })
                .then(response => response.json())
                .then(data => {
                    setName('');
                    setDescription('');
                    setCategory('');
                    setShowToast(true)
                })
                .catch(error => console.error('Error adding task:', error));
    };

    return (
        <Container className='form__container'>
        <Form onSubmit={handleSubmit}>
            <Row className='justify-content-center'>
                <Col sx={12} sm={8} md={8} >
                    <FormGroup className="mb-3" >
                        <FormLabel className='form__label'>Name</FormLabel>
                        <FormControl type="text"
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
                    <FormGroup className="mb-3" >
                        <FormLabel className='form__label'>Description</FormLabel>
                        <FormControl as="textarea"
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
                        <FormLabel className='form__label'>Category {}</FormLabel>
                        <FormSelect className={`form__control ${errors.category ? 'is-invalid' : ''}`} aria-label="Default select example" value={category} onChange={(e) => setCategory(e.target.value)}>
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
                <Col className='text-center' >
                    <Button type="submit" variant="outline-light" className='form__button justify-content-center'>Add Toy</Button>
                </Col>
            </Row>
        </Form>
            <Row>
                <Col>
                    <ToastContainer position="top-end" className="p-3">
                        <Toast onClose={() => setShowToast(false)} show={showToast} delay={2000} autohide >
                            <ToastBody> Well done!</ToastBody>
                        </Toast>
                    </ToastContainer>
                </Col>
            </Row>
        </Container>
    );
};

export default NewToyPage