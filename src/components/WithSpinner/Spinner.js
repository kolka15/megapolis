import React from 'react';
import SpinnerImg from '../../assets/img/spinner-dark.svg';
import './spinner.scss';

const Spinner = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <img src={SpinnerImg} alt="spinner"/>
        </div>
    );
};

export default Spinner;
