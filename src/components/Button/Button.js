import React from 'react';
import './button.scss';

const Button = ({type = 'text', onClick, text, view = 'green'}) => {
    return (
        <button type={type} onClick={onClick} className={`button button_${view}`}>
            {text}
        </button>
    );
};

export default Button;
