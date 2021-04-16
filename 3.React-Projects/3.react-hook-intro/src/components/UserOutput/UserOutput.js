import React from 'react';

const UserOutput = (props) => {
    return (
        <>
            <p>Username: {props.userName}</p>
            <p>Static text!</p>
            <p>Email: {props.userEmail}</p>
        </>
    )
}

export default UserOutput;