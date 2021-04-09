import React from 'react';

const Filter = ({ value, setSearch }) => (
    <input
        value={value}
        onChange={(event) => {
            setSearch(event.target.value);
        }}
    />
);

export default Filter;
