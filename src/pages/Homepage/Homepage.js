import React, {useEffect} from 'react';
import './homepage.scss';

import {useDispatch, useSelector} from 'react-redux';

import Button from '../../components/Button/Button';
import TaskTable from '../../components/TaskTable/TaskTable';
import {fetchTasksStart} from '../../redux/tasks/tasks.actions';
import {selectTasksFetching} from '../../redux/tasks/tasks.selectors';
import WithSpinner from '../../components/WithSpinner/WithSpinner';

const Homepage = () => {

    const dispatch = useDispatch();
    const isFetching = useSelector(selectTasksFetching);

    const TaskTableWithSpinner = WithSpinner(TaskTable);

    useEffect(() => {
        dispatch(fetchTasksStart());
    }, [dispatch]);


    return (
        <div className='homepage'>
            <div className="homepage__upper-row">
                <h1>Список задач</h1>
                <Button className='ml-auto' text='Добавить' view='green'/>
            </div>
            <TaskTableWithSpinner isLoading={isFetching}/>
        </div>
    );
};

export default Homepage;