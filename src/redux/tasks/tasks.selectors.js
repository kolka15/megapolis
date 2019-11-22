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

