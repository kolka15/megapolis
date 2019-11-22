import React from 'react';
import './button.scss';

const Button = ({type = 'text', onClick, text, view = 'green', className = ''}) => {
    return (
        <button type={type} onClick={onClick} className={`button button_${view} ${className}` }>
            {text}
        </button>
    );
};

export default Button;
