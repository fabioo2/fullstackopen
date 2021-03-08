import React from 'react';
import Course from './components/Course';

const App = ({ courses }) => {
    console.log('App works');
    return courses.map((course) => (
        <Course key={course.id} name={course.name} parts={course.parts} />
    ));
};

export default App;
