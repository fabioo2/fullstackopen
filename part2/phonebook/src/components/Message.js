import React from 'react';

const Message = ({ message }) => {
    let messageStyle = {};
    if (message.includes('Added')) {
        messageStyle = {
            color: 'green',
            borderWidth: 2,
            borderColor: 'green',
            borderStyle: 'solid',
            borderRadius: 5,
            backgroundColor: 'lightGrey',
            fontSize: 20,
            padding: 10,
            fontWeight: 'bold',
        };
    } else if (message.includes('Unable')) {
        messageStyle = {
            color: 'red',
            borderWidth: 2,
            borderColor: 'red',
            borderStyle: 'solid',
            borderRadius: 5,
            backgroundColor: 'lightGrey',
            fontSize: 20,
            padding: 10,
            fontWeight: 'bold',
        };
    } else {
        messageStyle = {
            display: 'none',
        };
    }

    return (
        <div>
            <p style={messageStyle}>{message}</p>
        </div>
    );
};

export default Message;
