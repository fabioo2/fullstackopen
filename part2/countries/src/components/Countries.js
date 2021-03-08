import React from 'react';
import Country from './Country';

const Countries = ({ countries, search }) => (
    <ul>
        {countries
            .filter((country) =>
                country.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((country) => (
                <Country key={country.numericCode} name={country.name} />
            ))}
    </ul>
);

export default Countries;
