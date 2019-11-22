import {all, call} from 'redux-saga/effects';
import {tasksSagas} from './tasks/tasks.sagas';

export default function* rootSaga() {
    yield all([
        call(tasksSagas),
    ]);
}