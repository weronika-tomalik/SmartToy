import React, { useEffect, useState } from 'react';

const ToyInteractive = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(response => response.json())
            .then(data => setToys(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const interactive = toys.filter(function (toy) {
        if (toy.category === 'interactive')
            return toy
    });

    return (
        <div>
            <h2>Zabawki interaktywne</h2>
            <ul>
                {interactive.map(interactiveToy => (
                    <li key={interactiveToy.id}>
                        <h3>{interactiveToy.name}</h3>
                        <p>{interactiveToy.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ToyInteractive