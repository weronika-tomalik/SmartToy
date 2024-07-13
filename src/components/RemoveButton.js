import React from 'react';
import {Button} from "react-bootstrap";

const RemoveButton = ({ id, onToyRemoved }) => {

    // kiedy usunę zabawkę, onToyRemoved dokona aktualizacji i zabawka zniknie z listy
    const handleDelete = () => {
        if (window.confirm('Are you sure that you want to remove this toy?')) {

                fetch(`http://localhost:5000/toys/${id}`, {
                    method: 'DELETE',
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('HTTP error!');
                        }
                        onToyRemoved();
                    })
                    .catch(error => {
                        console.error('Error deleting toy');
                    });
            }
        }

    return <Button lg={2} onClick={handleDelete} variant="outline-dark" className='category__button'>Remove toy</Button>
    };


export default RemoveButton

