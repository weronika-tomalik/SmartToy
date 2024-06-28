import React, { useEffect, useState } from 'react';

const ToysStructural = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(response => response.json())
            .then(data => setToys(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const structural = toys.filter(function (toy) {
        if (toy.category === 'structural')
            return toy
    });

    return (
        <div>
            <h2>Zabawki konstrukcyjne</h2>
            <ul>
                {structural.map(structuralToy => (
                    <li key={structuralToy.id}>
                        <h3>{structuralToy.name}</h3>
                        <p>{structuralToy.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToysStructural