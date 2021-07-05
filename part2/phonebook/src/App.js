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
    const [newPhoneNumber, setNewPhoneNumber] = useState('');
    const [search, setSearch] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        personService.getAll().then((persons) => setPersons(persons));
    }, []);

    const addName = (event) => {
        event.preventDefault();
        setNewName('');
        setNewPhoneNumber('');

        const nameExists = persons.find(
            (person) => person.name === newName.trim()
        );
        if (nameExists) {
            if (
                window.confirm(
                    `${newName} is already added to the phonebook, replace the old number with the a new one?`
                )
            ) {
                console.log('confirmed');
                const updatedPerson = {
                    ...nameExists,
                    phoneNumber: newPhoneNumber,
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
                        setMessage(error.response.data.error);
                    });
            }
        } else {
            const personObject = {
                name: newName.trim(),
                phoneNumber: newPhoneNumber,
            };
            personService
                .create(personObject)
                .then((returnedPerson) => {
                    setPersons(persons.concat(returnedPerson));
                    setNewName('');
                    setMessage(`Added ${returnedPerson.name}`);
                })
                .catch((error) => {
                    setIsError(true);
                    setMessage(error.response.data.error);
                });
        }
    };

    return (
        <div>
            <h2>Phonebook</h2>
            <Message message={message} isError={isError} />
            Search the Phonebook:{' '}
            <Filter
                value={search}
                setSearch={setSearch}
                setMessage={setMessage}
            />
            <h3>Add a New Number</h3>
            <NameForm
                setMessage={setMessage}
                addName={addName}
                newName={newName}
                setNewName={setNewName}
                newPhoneNumber={newPhoneNumber}
                setNewPhoneNumber={setNewPhoneNumber}
            />
            <h2>Numbers</h2>
            <Persons
                persons={persons}
                search={search}
                setPersons={setPersons}
                setMessage={setMessage}
                isError={setIsError}
            />
        </div>
    );
};

export default App;
