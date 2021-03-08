import React from 'react';
import Name from './Name';

const Persons = ({ persons, search }) => (
    <ul>
        {persons
            .filter((person) =>
                person.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((person) => (
                <Name
                    key={person.id}
                    name={person.name}
                    number={person.number}
                />
            ))}
    </ul>
);

export default Persons;
