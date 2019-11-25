import React, {useEffect, useState} from 'react';
import './task-page.scss';

import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import Button from '../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {selectCurrentTask} from '../../redux/tasks/tasks.selectors';
import {fetchTasksStart, editTaskStart, deleteTaskStart} from '../../redux/tasks/tasks.actions';
import {Can} from '../../icons/can';

const TaskPage = ({...props}) => {

    const id = props.match.params.id;

    const [title, setTitle] = useState('');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTasksStart(id));
    }, [dispatch, id]);

    const task = useSelector(selectCurrentTask);

    useEffect(() => {
        task && setTitle(task.title);
    }, [task]);

    return (
        <div className='task-page'>
            <div className='d-flex align-items-center'>
                <h1>Задача №{id}</h1>
                <Link className='btn-link ml-auto' to={'/'} onClick={() => dispatch(deleteTaskStart(id))}>
                    <span className='delete-btn '>
                        <Can className='delete-btn__delete-icon'/>
                    </span>
                </Link>
            </div>


            <div className='mb-2'>Краткое описание</div>
            <div className='mb-5 row'>
                <div className="col-6">
                    <input type="text" onChange={e => setTitle(e.target.value)} className='task-page__summary'
                        value={title}/>
                </div>
            </div>
            <div>
                <Link className='btn-link mr-3' onClick={() => dispatch(editTaskStart(id, title))} to={'/'}>
                    <Button text={'Сохранить'} view='green'/>
                </Link>
                <Link className='btn-link' to={'/'}>
                    <Button text={'Вернуться к списку'} view='blue'/>
                </Link>
            </div>
        </div>
    );
};

export default withRouter(TaskPage);
