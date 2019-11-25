import {tasksActionTypes} from './tasks.types';

const INITIAL_STATE = {
    isFetching: false,
    errorMessage: undefined,
    tasks: []
};

const tasksReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case tasksActionTypes.FETCH_TASKS_START:
        return {...state, isFetching: true, currentId: action.payload};
    case tasksActionTypes.FETCH_TASKS_SUCCESS:
        return {
            ...state,
            tasks: action.payload,
            isFetching: false
        };
    case tasksActionTypes.ADD_TASK_START:
        return {...state};
    case tasksActionTypes.ADD_TASK_SUCCESS:
        return {...state, isFetching: false};

    case tasksActionTypes.FETCH_TASKS_FAILURE:
    case tasksActionTypes.ADD_TASK_FAILURE:
        return {
            ...state,
            errorMessage: action.payload,
            isFetching: false
        };
    default:
        return state;
    }
};

export default tasksReducer;