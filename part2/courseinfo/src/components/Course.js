import React from 'react';
import Header from './Header';
import Part from './Part';
import Exercises from './Exercises';

const Course = ({ name, parts }) => {
    const total = parts.reduce((a, b) => {
        console.log(a);
        return a + b.exercises;
    }, 0);
    return (
        <div>
            <Header courseName={name} />

            {parts.map((part) => (
                <Part
                    key={part.id}
                    name={part.name}
                    exercises={part.exercises}
                />
            ))}

            <Exercises total={total} />
        </div>
    );
};

export default Course;
