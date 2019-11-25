import {createSelector} from 'reselect';

const selectTasks = state => state.tasks;

export const selectTasksItems = createSelector(
    [selectTasks],
    (tasks) => tasks.tasks
);

export const selectTasksFetching = createSelector(
    [selectTasks],
    (tasks) => tasks.isFetching
);

export const selectCurrentTask = createSelector(
    [selectTasks],
    (tasks) => tasks.tasks.filter(task => +task.id === +tasks.currentId)[0]
);

