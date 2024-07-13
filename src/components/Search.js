import React, {useState, useRef, useEffect} from 'react';
import {
    Card,
    CardBody,
    CardText,
    CardTitle,
    Col,
    FormControl, FormGroup,
    Row
} from "react-bootstrap";


const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [errors, setErrors] = useState([]);
    const searchContainerRef = useRef(null);
    const handleSearch = async () => {
        setErrors([]);

        try {
            const response = await fetch(`http://localhost:5000/toys`);
            const data = await response.json();
            const newErrors = [];


                const filteredResults = data.filter(toy =>
                toy.name.toLowerCase().includes(query.toLowerCase()) ||
                toy.description.toLowerCase().includes(query.toLowerCase())
            );

            if (!query) {
                newErrors.query = 'What are you looking for?';
            }

            if (filteredResults.length === 0) {
                newErrors.result = `You don't have such a toy.`;
            }

            if (Object.keys(newErrors).length > 0) {
                setErrors(newErrors);
                return
            }
            setResults(filteredResults)


        } catch (error) {
            console.error("Error fetching data: ", error);
            setResults([]);
        }

    };

    const handleClickOutside = (e) => {
        e.preventDefault()
        if (searchContainerRef.current && !searchContainerRef.current.contains(e.target)) {
            setResults([]);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return (
        <div >
            <Row className='justify-content-center' >
                <Col sx={9} sm={9} md={6}>
                    <FormGroup ref={searchContainerRef} className="input-group rounded" style={{marginBottom: '20px'}}>
                    <FormControl
                        type="search"
                        placeholder="Search toy"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className={`form-control rounded ${errors.query ? 'is-invalid' : ''} ${errors.result ? 'is-invalid' : ''} `}/>

                    <span onClick={handleSearch} className="input-group-text border-0" style={{background: 'transparent'}} >
                        <i className="fas fa-search"></i>
                    </span>
                        {errors.query && <div className="invalid-feedback">{errors.query}</div>}
                        {errors.result && <div className="invalid-feedback">{errors.result}</div>}
                    </FormGroup>
                </Col>
            </Row>
            <Row className='justify-content-center' style={{marginTop: '20px'}}>
                {results.map((result, index) => (
                    <Card key={index} className='shadow-lg' style={{
                        width: '50rem',
                        border: '1px solid lightgray',
                        marginBottom: '15px',
                        paddingLeft: '30px'
                    }}>
                        <Col>
                            <CardBody >
                                <CardTitle className='card__title--selected'>{index + 1}. {result.name}</CardTitle>
                                <CardText className='card__text--selected'>
                                    {result.description} / {result.category}
                                </CardText>
                            </CardBody>
                        </Col>
                    </Card>))}
            </Row>
        </div>
    );
};

export default Search;