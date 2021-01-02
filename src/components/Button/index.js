import React from 'react';

const Button = (props) => {
    return ( 
        <button className={`${props.color}-button`}>{props.children}</button>
     );
}

Button.defaultProps = {
    color: 'blue'
}

export default Button;
