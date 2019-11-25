import {tasksActionTypes} from './tasks.types';

export const fetchTasksStart = (id) => ({
    type: tasksActionTypes.FETCH_TASKS_START,
    payload: id
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


export const deleteTaskStart = (id) => ({
    type: tasksActionTypes.DELETE_TASK_START,
    payload: id
});

export const deleteTaskSuccess = (data) => ({
    type: tasksActionTypes.DELETE_TASK_SUCCESS,
    payload: data
});

export const deleteTaskFailure = err => ({
    type: tasksActionTypes.DELETE_TASK_FAILURE,
    payload: err
});


export const editTaskStart = (id, value) => ({
    type: tasksActionTypes.EDIT_TASK_START,
    payload: {id, value}
});

export const editTaskSuccess = (data) => ({
    type: tasksActionTypes.EDIT_TASK_SUCCESS,
    payload: data
});

export const editTaskFailure = err => ({
    type: tasksActionTypes.EDIT_TASK_FAILURE,
    payload: err
});





