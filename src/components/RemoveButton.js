import React from 'react';
import {Button} from "react-bootstrap";


const RemoveButton = ({ id, onToyRemoved }) => {

    const handleDelete = () => {
        if (window.confirm('Are you sure that you want to remove this toy?')) {

                fetch(`http://localhost:5000/toys/${id}`, {
                    method: 'DELETE',
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('HTTP error!');
                        }
                        console.log('Toy deleted successfully');
                        onToyRemoved();
                    })
                    .catch(error => {
                        console.error('Error deleting toy');
                    });
            }
        }

    return <Button lg={2} onClick={handleDelete} variant="outline-dark">Remove toy</Button>
    };


export default RemoveButton

