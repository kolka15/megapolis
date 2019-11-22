import React from 'react';
import './homepage.scss';
import Button from '../../components/Button/Button';

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className="homepage__upper-row">
                <h1>Список задач</h1>
                <Button text='Добавить'/>
            </div>
        </div>
    );
};

export default Homepage;
