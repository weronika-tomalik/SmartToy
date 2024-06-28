import React, { useState } from 'react';
import {Button} from "react-bootstrap";

function randomElement(array, numElements) {

    if (numElements > array.length) {
        throw new RangeError("więcej elementów niż dostępnych");
    }
    const arrayRandomToys = [...array].sort(() => 0.5 - Math.random());

    return arrayRandomToys.slice(0, numElements);
}

const RandomToyPicker = ({array1, array2, array3}) => {
    const [randomElements, setRandomElements] = useState([]);

    const handleRandomSelection = () => {
        const numElementsToSelect = 2;

        const selectedFromArray1 = randomElement(array1, numElementsToSelect);
        const selectedFromArray2 = randomElement(array2, numElementsToSelect);
        const selectedFromArray3 = randomElement(array3, numElementsToSelect);

        const combinedResults = [...selectedFromArray1, ...selectedFromArray2, ...selectedFromArray3];
        setRandomElements(combinedResults);
    };

    return (
        <div>
            <Button onClick={handleRandomSelection} variant="secondary" className='btn-test'>Nowy zestaw</Button>
            <ul>
                {randomElements.map((element, index) => (
                    <li key={index}>{element.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default RandomToyPicker;