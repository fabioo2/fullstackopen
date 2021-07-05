import React from 'react';

const Name = ({ name, phoneNumber }) => {
    return (
        <li>
            {name} - {phoneNumber}{' '}
        </li>
    );
};

export default Name;
