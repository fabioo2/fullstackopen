import React from 'react';
import CountryListItem from './CountryListItem';
import Country from './Country';

const Countries = ({ countries, search }) => {
    const filteredCountries = countries.filter((country) => country.name.toLowerCase().includes(search.toLowerCase()));

    if (filteredCountries.length === 1) {
        const country = filteredCountries[0];
        return (
            <Country
                name={country.name}
                capital={country.capital}
                population={country.population}
                languages={country.languages}
                flag={country.flag}
            />
        );
    } else if (filteredCountries.length > 9) {
        return <p>Too many matches, specify another filter</p>;
    } else {
        return (
            <ul>
                {filteredCountries.map((country) => (
                    <CountryListItem key={country.numericCode} name={country.name} />
                ))}
            </ul>
        );
    }
};

export default Countries;
