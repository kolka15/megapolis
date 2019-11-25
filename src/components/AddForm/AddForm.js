import React, {useState} from 'react';
import './add-form.scss';
import Button from '../Button/Button';
import {useDispatch} from 'react-redux';
import {addTaskStart} from '../../redux/tasks/tasks.actions';

const AddForm = ({switchModal}) => {

    const [data, setData] = useState({});
    const [error, switchError] = useState(false);
    const dispatch = useDispatch();

    const onInputChange = e => {
        const value = e.target.value;
        switchError(false);
        setData({title: value});
    };

    const onAddTask = () => {
        if (!data.title || !data.title) {
            switchError(true);
            return;
        }
        dispatch(addTaskStart(data));
        switchModal(false);
    };

    return (
        <div className='add-form'>
            <div className='mb-2'>Краткое описание</div>
            <div className='mb-4 position-relative'>
                <input className='add-form__input-text' type="text" onChange={onInputChange}/>
                {
                    error &&
                        <span className='add-form__error'>Заголовок не может быть</span>
                }
            </div>
            <div>
                <Button text='Создать' view='green' className='ml-auto' onClick={onAddTask}/>
            </div>
        </div>
    );
};

export default AddForm;