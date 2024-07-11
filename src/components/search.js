import React, {useState} from 'react';

const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:5000/toys`);
            const data = await response.json();

            const filteredResults = data.filter(toy =>
                toy.name.toLowerCase().includes(query.toLowerCase()) ||
                toy.description.toLowerCase().includes(query.toLowerCase()) 
            );
            setResults(filteredResults);

        } catch (error) {
            console.error("Error fetching data: ", error);
            setResults([]);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search toy"
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Search;