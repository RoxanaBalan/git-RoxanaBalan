import React from 'react';

const UserInput = (props) => {
    return (
        <>
        
        <input
                type="text" 
                onChange={props.changed} 
                value={props.userName} 
            />
        
            <br />
            
         <input
                type="text" 
                onChange={props.changedEmail} 
                value={props.userEmail} 
            />
        
        </>
    )
}

export default UserInput;