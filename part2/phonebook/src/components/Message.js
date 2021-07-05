import React from 'react';

const Message = ({ message, isError }) => {
    let messageStyle = {};
    if (message) {
        messageStyle = {
            display: 'block',
            borderWidth: 2,
            borderStyle: 'solid',
            backgroundColor: 'lightGrey',
            fontSize: 20,
            padding: 10,
            fontWeight: 'bold',
            borderRadius: 5,
        };
        if (isError) {
            messageStyle = {
                ...messageStyle,
                color: 'red',
                borderColor: 'red',
            };
        } else {
            messageStyle = {
                ...messageStyle,
                color: 'green',
                borderColor: 'green',
            };
        }
    }

    return (
        <div>
            <p style={messageStyle}>{message}</p>
        </div>
    );
};

export default Message;
