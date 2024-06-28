import React, {useEffect, useState} from 'react';

const NewToy = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newToy = {
            name,
            description,
            category
        };

            fetch('http://localhost:5000/toys', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newToy)
            })
                .then(response => response.json())
                .then(data => {
                    setName('');
                    setDescription('');
                    setCategory('');
                })
                .catch(error => console.error('Error adding task:', error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div>
                <label>Category: {}</label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="" disabled>Select an option</option>
                    <option value="structural">structural</option>
                    <option value="movement">movement</option>
                    <option value="interactive">interactive</option>
                </select>
            </div>
            <button type="submit">Add Toy</button>
        </form>
    );
};

export default NewToy