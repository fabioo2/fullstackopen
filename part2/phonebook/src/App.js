import React, { useState, useEffect } from 'react';
//components
import Filter from './components/Filter';
import NameForm from './components/NameForm';
import Persons from './components/Persons';
import Message from './components/Message';
//services
import personService from './services/persons';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [search, setSearch] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        personService.getAll().then((persons) => setPersons(persons));
    }, []);

    const addName = (event) => {
        event.preventDefault();
        setNewName('');
        setNewNumber('');

        const nameExists = persons.find(
            (person) => person.name === newName.trim()
        );
        if (nameExists) {
            if (
                window.confirm(
                    `${newName} is already added to the phonebook, replace the old number with the a new one?`
                )
            ) {
                const updatedPerson = {
                    ...nameExists,
                    number: newNumber,
                };
                personService
                    .update(updatedPerson)
                    .then((returnedPerson) => {
                        setPersons(
                            persons.map((person) =>
                                person.id !== returnedPerson.id
                                    ? person
                                    : returnedPerson
                            )
                        );
                    })
                    .catch((error) => {
                        setMessage(
                            `Unable to update, Information on ${updatedPerson.name} has already been removed from the server`
                        );
                    });
            }
        } else {
            const personObject = {
                name: newName.trim(),
                number: newNumber,
                id: persons.length + 1,
            };
            personService.create(personObject).then((returnedPerson) => {
                setPersons(persons.concat(returnedPerson));
                setNewName('');
                setMessage(`Added ${returnedPerson.name}`);
            });
        }
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Message message={message} />
            Search the Phonebook:{' '}
            <Filter value={search} setSearch={setSearch} />
            <h3>Add a New Number</h3>
            <NameForm
                addName={addName}
                newName={newName}
                setNewName={setNewName}
                newNumber={newNumber}
                setNewNumber={setNewNumber}
            />
            <h2>Numbers</h2>
            <Persons
                persons={persons}
                search={search}
                setPersons={setPersons}
            />
        </div>
    );
};

export default App;
