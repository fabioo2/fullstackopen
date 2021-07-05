import React from 'react';

const PersonForm = ({
    addName,
    newName,
    setNewName,
    newPhoneNumber,
    setNewPhoneNumber,
    setMessage,
}) => (
    <form onSubmit={addName}>
        <div>
            Name:{' '}
            <input
                value={newName}
                onChange={(event) => {
                    setNewName(event.target.value);
                    setMessage('');
                }}
            />{' '}
            Number:{' '}
            <input
                value={newPhoneNumber}
                onChange={(event) => {
                    setNewPhoneNumber(event.target.value);
                    setMessage('');
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
