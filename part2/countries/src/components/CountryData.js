import React from 'react';

const CountryData = ({ capital, population }) => (
    <div>
        <p>
            <b>Capital: </b>
            {capital}
        </p>
        <p>
            <b>Population: </b>
            {population}
        </p>
    </div>
);

export default CountryData;
