import { useState, useEffect } from 'react';
import Countries from './components/Countries';
import Filter from './components/Filter';

import axios from 'axios';

function App() {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState('');

    const hook = () => {
        axios
            .get('https://restcountries.eu/rest/v2/all/')
            .then((response) => {
                setCountries(response.data);
            });
    };

    useEffect(hook, []);

    return (
        <div>
            <h2>Search Countries</h2>
            <p>search countries</p>
            <Filter value={search} setSearch={setSearch} />
            <Countries countries={countries} search={search} />
        </div>
    );
}

export default App;
