import React from 'react';

function Button(props){
    return (
        <button
            style={{backgroundColor: props.style}}
            onClick={props.click}>
            {props.buttonTitle}
        </button>
    )
}

export default Button;
