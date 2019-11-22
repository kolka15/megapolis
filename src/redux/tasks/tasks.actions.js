import {tasksActionTypes} from './tasks.types';

export const fetchTasksStart = () => ({
    type: tasksActionTypes.FETCH_TASKS_START,
});

export const fetchTasksSuccess = data => ({
    type: tasksActionTypes.FETCH_TASKS_SUCCESS,
    payload: data
});

export const fetchTasksFailure = err => ({
    type: tasksActionTypes.FETCH_TASKS_FAILURE,
    payload: err
});


export const addTaskStart = (task) => ({
    type: tasksActionTypes.ADD_TASK_START,
    payload: task
});

export const addTaskSuccess = (data) => ({
    type: tasksActionTypes.ADD_TASK_SUCCESS,
    payload: data
});

export const addTaskFailure = err => ({
    type: tasksActionTypes.ADD_TASK_FAILURE,
    payload: err
});





