import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './task-table.scss';
import {selectTasksItems} from '../../redux/tasks/tasks.selectors';
import Cross from '../../icons/cross';
import {Can} from '../../icons/can';
import Pen from '../../icons/pen';



const TaskTable = () => {

    const tasks = useSelector(selectTasksItems);


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
                            <td>
                                <Cross/>
                                <Can/>
                                <Pen/>
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
