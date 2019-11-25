import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './task-table.scss';
import {selectTasksItems} from '../../redux/tasks/tasks.selectors';
import {deleteTaskStart} from '../../redux/tasks/tasks.actions';

import {Can} from '../../icons/can';
import Pen from '../../icons/pen';
import {Link} from 'react-router-dom';


const TaskTable = () => {

    const tasks = useSelector(selectTasksItems);

    const dispatch = useDispatch();

    return (

        <div>
            <table className='task-table'>
                <tbody>
                    {
                        tasks &&
                    tasks.map((task, i) => (
                        <tr key={i}>
                            <td className='task-table__id'>
                                Задача №{task.id}
                            </td>
                            <td className='task-table__title'>
                                {task.title}
                            </td>
                            <td className='task-table__actions-cell'>
                                <Link to={`/items/${task.id}`}>
                                    <span className='task-table__edit'>
                                        <Pen className='task-table__edit-icon'/>
                                    </span>
                                </Link>
                                <span className='delete-btn' onClick={() => dispatch(deleteTaskStart(task.id))}>
                                    <Can className='delete-btn__delete-icon'/>
                                </span>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TaskTable;
