import React, {useState} from 'react';
import './add-form.scss';
import Button from '../Button/Button';
import {useDispatch} from 'react-redux';
import {addTaskStart} from '../../redux/tasks/tasks.actions';

const AddForm = ({switchModal}) => {

    const [data, setData] = useState({});
    const dispatch = useDispatch();

    const onInputChange = e => {
        const value = e.target.value;
        setData({title: value});
    };

    const onAddTask = () => {
        dispatch(addTaskStart(data));
        switchModal(false);
    };

    return (
        <div className='add-form'>
            <div className='mb-2'>Краткое описание</div>
            <div className='mb-4'>
                <input className='add-form__input-text' type="text" onChange={onInputChange}/>
            </div>
            <div>
                <Button text='Создать' view='green' className='ml-auto' onClick={onAddTask}/>
            </div>
        </div>
    );
};

export default AddForm;