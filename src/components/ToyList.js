import React, { useEffect, useState } from 'react';
import NewToy from './NewToy';

const ToysList = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(response => response.json())
            .then(data => setToys(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleAddToy = (toy) => {
        setToys([...toys, toy]);
    };

    const structural = toys.filter(function (toy) {
        if (toy.category === 'structural')
            return toy

    });
    const movement = toys.filter(function (toy) {
        if (toy.category === 'movement')
            return toy

    });
    const interactive = toys.filter(function (toy) {
        if (toy.category === 'interactive')
            return toy

    });

    return (
        <div>
            <h1>Toy List</h1>
            <NewToy onAddToy={handleAddToy}/>
            <h2>Zabawki konstrukcyjne</h2>
            <ul>
                {structural.map(structuralToy => (
                    <li key={structuralToy.id}>
                        <h3>{structuralToy.name}</h3>
                        <p>{structuralToy.description}</p>
                    </li>

                ))}
            </ul>
            <h2>Zabawki ruchowe</h2>
            <ul>
                {movement.map(movementToy => (
                    <li key={movementToy.id}>
                        <h3>{movementToy.name}</h3>
                        <p>{movementToy.description}</p>
                    </li>
                ))}
            </ul>
            <h2>Zabawki interaktywne</h2>
            <ul>
                {interactive.map(interactiveToy => (
                    <li key={interactiveToy.id}>
                        <h3>{interactiveToy.name}</h3>
                        <p>{interactiveToy.description}</p>
                    </li>
                ))}
            </ul>
            {/*<ul>*/}
            {/*    {toys.map(toy => (*/}
            {/*        <li key={toy.id}>*/}
            {/*            <h2>{toy.name}</h2>*/}
            {/*            <h3>{toy.category}</h3>*/}
            {/*            <p>{toy.description}</p>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </div>
    );
};

export default ToysList