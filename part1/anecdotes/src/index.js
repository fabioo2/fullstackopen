import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup, Jumbotron } from 'reactstrap';
import reportWebVitals from './reportWebVitals';

const QuoteButton = (props) => (
    <Button outline color={props.color} onClick={props.onClick}>
        {props.text}
    </Button>
);

const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

const points = Array.apply(null, new Array(anecdotes.length)).map(
    Number.prototype.valueOf,
    0
);

const App = (props) => {
    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState(props.points);

    const handleNewQuoteClick = () => {
        const quoteNumber = Math.floor(Math.random() * anecdotes.length);
        console.log(quoteNumber);
        setSelected(quoteNumber);
    };

    const handleLikeClick = () => {
        const copy = [...points];
        copy[selected] += 1;
        setPoints(copy);
    };

    const maxIndex = (array) => {
        return array.indexOf(Math.max.apply(null, array));
    };

    return (
        <div className="d-flex flex-column justify-content-center align-items-center">
            <h3>
                <u>Quote of the day</u>
            </h3>
            <Jumbotron className="display-1">
                {props.anecdotes[selected]}
            </Jumbotron>
            <div className="pb-2">
                This quote has been liked {points[selected]} times.
            </div>
            <ButtonGroup className="mb-5">
                <QuoteButton
                    onClick={handleNewQuoteClick}
                    text="New Quote"
                    color="success"
                />
                <QuoteButton
                    onClick={handleLikeClick}
                    text="Like"
                    color="primary"
                />
            </ButtonGroup>
            <h3>
                <u>Most Popular Quote</u>
            </h3>
            <div>{props.anecdotes[maxIndex(points)]}</div>
        </div>
    );
};

ReactDOM.render(
    <App anecdotes={anecdotes} points={points} />,
    document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
