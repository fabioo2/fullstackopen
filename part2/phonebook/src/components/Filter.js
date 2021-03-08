import React from 'react';
// for more accurate search to implement later

// const handleSearch = (event) => {
//     const searchArray = event.target.value.split('');
//     const filteredNames = [];
//     console.log(searchArray);
//     persons.forEach((person) => {
//         let match = true;

//         searchArray.forEach((char, index) => {
//             if (
//                 char.toLowerCase() !== person.name[index].toLowerCase()
//             ) {
//                 match = false;
//             }
//         });
//         if (match === true) {
//             filteredNames.push(person);
//         }
//     });
//     setPersons(filteredNames);
// };
const Filter = ({ value, setSearch }) => (
    <input
        value={value}
        onChange={(event) => {
            setSearch(event.target.value);
        }}
    />
);

export default Filter;
