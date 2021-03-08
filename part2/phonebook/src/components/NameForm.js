import React from 'react';

const PersonForm = ({
    addName,
    newName,
    setNewName,
    newNumber,
    setNewNumber,
}) => (
    <form onSubmit={addName}>
        <div>
            Name:{' '}
            <input
                value={newName}
                onChange={(event) => {
                    setNewName(event.target.value);
                }}
            />{' '}
            Number:{' '}
            <input
                value={newNumber}
                onChange={(event) => {
                    setNewNumber(event.target.value);
                }}
            />
        </div>
        <br />
        <div>
            <button type="submit">Add</button>
        </div>
    </form>
);

export default PersonForm;
