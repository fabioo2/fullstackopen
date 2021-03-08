import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import NameForm from './components/NameForm';
import Persons from './components/Persons';
import axios from 'axios';

const App = () => {
    const [persons, setPersons] = useState([]);
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');
    const [search, setSearch] = useState('');

    const hook = () => {
        console.log('effect');
        axios.get('http://localhost:3001/persons').then((response) => {
            console.log('promise fulfilled');
            setPersons(response.data);
        });
    };

    useEffect(hook, []);

    const addName = (event) => {
        event.preventDefault();
        setNewName('');
        setNewNumber('');
        const nameExists = persons.some(
            (person) => person.name === newName.trim()
        );
        if (nameExists) {
            alert(`${newName} is already in the phonebook`);
        } else {
            const personObject = {
                name: newName.trim(),
                number: newNumber,
                id: persons.length + 1,
            };
            setPersons(persons.concat(personObject));
        }
    };

    return (
        <div>
            <h2>Phonebook</h2>
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
            <Persons persons={persons} search={search} />
        </div>
    );
};

export default App;
