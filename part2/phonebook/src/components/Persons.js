import React from 'react';
import Name from './Name';
import personService from '../services/persons';

const Persons = ({ persons, search, setPersons }) => {
    const deletePerson = (id, name) => {
        if (window.confirm(`Delete ${name}?`)) {
            personService.deletePerson(id);
            setPersons(persons.filter((p) => p.id !== id));
        }
    };
    return (
        <ul>
            {persons
                .filter((person) =>
                    person.name
                        .toLowerCase()
                        .includes(search.toLowerCase())
                )
                .map((person) => (
                    <div key={person.id}>
                        <Name
                            name={person.name}
                            number={person.number}
                            id={person.id}
                            setPersons={setPersons}
                        />
                        <button
                            onClick={() =>
                                deletePerson(person.id, person.name)
                            }
                        >
                            delete
                        </button>
                    </div>
                ))}
        </ul>
    );
};

export default Persons;
