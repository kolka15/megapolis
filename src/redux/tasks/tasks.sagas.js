import {takeLatest, call, all, put} from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';
import {tasksActionTypes} from '../tasks/tasks.types';
import {
    fetchTasksSuccess,
    fetchTasksFailure,
    addTaskSuccess,
    addTaskFailure,
    deleteTaskSuccess,
    deleteTaskFailure,
    editTaskSuccess,
    editTaskFailure,
} from '../tasks/tasks.actions';
import {server} from '../../utils/server';


export function* fetchTasksAsync() {
    try {
        const response = yield fetch(`${server}/api/list`);
        const data = yield response.json();

        yield put(fetchTasksSuccess(data.data));

    } catch (error) {
        yield put(fetchTasksFailure(error.message));
    }
}

export function* fetchTasksStart() {
    yield takeLatest(tasksActionTypes.FETCH_TASKS_START, fetchTasksAsync);
}


export function* addTaskAsync({payload}) {
    try {
        const response = yield fetch(`${server}/api/list`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const data = yield response.json();

        yield put(addTaskSuccess(data.data));

        yield fetchTasksAsync();

    } catch (error) {
        yield put(addTaskFailure(error.message));
    }
}

export function* addTaskStart() {
    yield takeLatest(tasksActionTypes.ADD_TASK_START, addTaskAsync);
}


export function* deleteTaskAsync({payload}) {

    try {
        const response = yield fetch(`${server}/api/list/${payload}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = yield response.json();

        yield put(deleteTaskSuccess(data.data));

        yield fetchTasksAsync();

    } catch (error) {
        yield put(deleteTaskFailure(error.message));
    }
}

export function* deleteTaskStart() {
    yield takeLatest(tasksActionTypes.DELETE_TASK_START, deleteTaskAsync);
}


export function* editTaskAsync({payload}) {
    const {id, value} = payload;

    try {
        const response = yield fetch(`${server}/api/list/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title:value})
        });
        const data = yield response.json();

        yield put(editTaskSuccess(data.data));

        yield fetchTasksAsync();

    } catch (error) {
        yield put(editTaskFailure(error.message));
    }
}

export function* editTaskStart() {
    yield takeLatest(tasksActionTypes.EDIT_TASK_START, editTaskAsync);
}


export function* tasksSagas() {
    yield all([
        call(fetchTasksStart),
        call(addTaskStart),
        call(deleteTaskStart),
        call(editTaskStart),
    ]);
}