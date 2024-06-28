import React, { useEffect, useState } from 'react';

const ToysMovement = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(response => response.json())
            .then(data => setToys(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const movement = toys.filter(function (toy) {
        if (toy.category === 'movement')
            return toy
    });

    return (
        <div>
            <h2>Zabawki ruchowe</h2>
            <ul>
                {movement.map(movementToy => (
                    <li key={movementToy.id}>
                        <h3>{movementToy.name}</h3>
                        <p>{movementToy.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToysMovement