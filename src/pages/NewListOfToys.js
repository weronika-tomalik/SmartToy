import React, { useEffect, useState } from 'react';
import RandomToyPicker from "../components/RandomToyPicker";

const NewListOfToys = () => {
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
            <RandomToyPicker interactive={interactive} movement={movement} structural={structural}/>
        </div>
    )
};

export default NewListOfToys