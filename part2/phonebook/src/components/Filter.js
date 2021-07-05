import React from 'react';

const Filter = ({ value, setSearch, setMessage }) => (
    <input
        value={value}
        onChange={(event) => {
            setSearch(event.target.value);
            setMessage('');
        }}
    />
);

export default Filter;
