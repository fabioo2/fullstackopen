import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Button, ButtonGroup, Table } from 'reactstrap';

const FeedbackButton = ({ onClick, text, color }) => (
    <Button outline color={color} onClick={onClick}>
        {text}
    </Button>
);

const Statistic = ({ text, value }) => (
    <tr>
        <th className="w-100">{text} </th>
        <th className="w-100">{value}</th>
    </tr>
);

const Statistics = ({ good, neutral, bad }) => {
    if (good === 0 && neutral === 0 && bad === 0) {
        return <div>no feedback given</div>;
    } else {
        const all = good + bad + neutral;
        const average = ((good - bad) / all).toFixed(2);
        const positive = ((good / all) * 100).toFixed(2) + '%';
        return (
            <div>
                <Table size="sm" className="min-w-10">
                    <tbody>
                        <Statistic text="good" value={good} />
                        <Statistic text="neutral" value={neutral} />
                        <Statistic text="bad" value={bad} />
                        <Statistic text="all" value={all} />
                        <Statistic text="average" value={average} />
                        <Statistic text="positive" value={positive} />
                    </tbody>
                </Table>
            </div>
        );
    }
};
const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGoodClick = () => {
        setGood(good + 1);
    };
    const handleNeutralClick = () => {
        setNeutral(neutral + 1);
    };
    const handleBadClick = () => {
        setBad(bad + 1);
    };

    return (
        <div className="row justify-content-center align-items-center">
            <div className="m-5 d-flex flex-column">
                <h2 className="pt-2">Give Feedback</h2>
                <div className="align-self-center">
                    <ButtonGroup>
                        <FeedbackButton
                            onClick={handleGoodClick}
                            text="good"
                            color="success"
                        />
                        <FeedbackButton
                            onClick={handleNeutralClick}
                            text="neutral"
                            color="secondary"
                        />
                        <FeedbackButton
                            onClick={handleBadClick}
                            text="bad"
                            color="danger"
                        />
                    </ButtonGroup>
                </div>
                <h2 className="pt-2">Statistics</h2>
                <Statistics good={good} bad={bad} neutral={neutral} />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
