import {takeLatest, call, all, put} from 'redux-saga/effects';
import fetch from 'isomorphic-unfetch';
import {tasksActionTypes} from '../tasks/tasks.types';
import {fetchTasksSuccess, fetchTasksFailure, addTaskSuccess, addTaskFailure} from '../tasks/tasks.actions';
import {server} from '../../utils/server';


export function* fetchTasksAsync() {
    try {
        const response = yield fetch(`${server}/api/list`);
        const data = yield response.json();
        console.log (
            'data ', data ,
        );
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
        console.log (
            'data ', data ,
        );
        yield put(addTaskSuccess(data.data));

        yield fetchTasksAsync();

    } catch (error) {
        yield put(addTaskFailure(error.message));
    }
}

export function* addTaskStart() {
    yield takeLatest(tasksActionTypes.ADD_TASK_START, addTaskAsync);
}




export function* tasksSagas() {
    yield all([
        call(fetchTasksStart),
        call(addTaskStart),
    ]);
}