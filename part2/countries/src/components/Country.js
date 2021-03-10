import React from 'react';
import Languages from './Languages';
import Flag from './Flag';
import CountryData from './CountryData';
import Weather from './Weather';

const Country = ({ name, capital, population, languages, flag }) => {
    return (
        <div>
            <h1>{name}</h1>
            <CountryData capital={capital} population={population} />

            <h2>languages</h2>
            <ul>
                {languages.map((language, index) => (
                    <Languages key={index} language={language.name} />
                ))}
            </ul>
            <Flag flag={flag} name={name} />

            <h2>Weather in {capital}</h2>
            <Weather city={capital} />
        </div>
    );
};

export default Country;
