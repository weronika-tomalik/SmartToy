import React, {useState, useEffect} from "react";
import {
    Container,
    Button,
    Col,
    Form,
    FormControl,
    FormGroup,
    FormLabel,
    FormSelect,
    Row,
    ToastContainer, Toast, ToastBody
} from "react-bootstrap";
import {useParams} from "react-router-dom";

const UpdateToyInfo = () => {
    const { id } = useParams();

    const [data, setData] = useState({
        id: id,
        name: '',
        description: '',
        category: '',
    });
    const [errors, setErrors] = useState({});
    const [showToast, setShowToast] = useState(false);

useEffect(() => {
    fetch(`http://localhost:5000/toys/${id}`)
        .then(response => response.json())
        .then(initialData => setData(initialData))
        .catch(error => console.error('Error fetching data:', error));
}, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };
    const updateData = (id, updatedData) => {
        fetch(`http://localhost:5000/toys/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                setShowToast(true)
                return response.json();
            })
            .then(data => {
                console.log('Data updated successfully:', data);
            })
            .catch(error => {
                console.error('Error updating data:', error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!data.name) {
            newErrors.name = 'Toy name is required.';
        } else if (data.name.length < 3) {
            newErrors.name = "Toy name is too short"
        }

        if (!data.description || data.description.length < 3) {
            newErrors.description = "Toy description is required";
        }

        if (!data.category) {
            newErrors.category = "Select the toys category";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return
        }
        updateData(id, data);
    };

    return (
        <Container className='container-grid--form'>
            <Form onSubmit={handleSubmit}>
                <Row className='justify-content-center'>
                    <Col sx={12} sm={8} md={8} >
                        <FormGroup className="mb-3" >
                            <FormLabel className='form__label'>Name</FormLabel>
                            <FormControl type="text"
                                         value={data.name}
                                         onChange={handleChange}
                                         name='name'
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
                                         value={data.description}
                                         onChange={handleChange}
                                         name="description"
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
                            <FormSelect className={`form__control ${errors.category ? 'is-invalid' : ''}`} aria-label="Default select example" value={data.category} name='category' onChange={handleChange}>
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
                        <Button type="submit" variant="outline-dark" className='form__button justify-content-center'>Update</Button>
                    </Col>
                </Row>
            </Form>
            <Row>
                <Col>
                    <ToastContainer position="top-end" className="p-3">
                        <Toast onClose={() => setShowToast(false)} show={showToast} delay={2000} autohide >
                            <ToastBody> Excellent! Updating successfully!</ToastBody>
                        </Toast>
                    </ToastContainer>
                </Col>
            </Row>
            </Container>
    )};

export default UpdateToyInfo


