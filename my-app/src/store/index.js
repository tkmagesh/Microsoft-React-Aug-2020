import { createStore, combineReducers, applyMiddleware } from 'redux';

import bugsReducer from '../bugTracker/reducers/bugsReducer';
import spinnerReducer from '../spinner/reducers/spinnerReducer';

function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(action.type);
            console.group('BEFORE ');
            console.log(store.getState());
            console.groupEnd();
            console.log(action);
            next(action);
            console.group('AFTER');
            console.log(store.getState());
            console.groupEnd();
            console.groupEnd();
        }
    }
}

const rootReducer = combineReducers({
    spinnerState : spinnerReducer,
    bugsState : bugsReducer
});

const appStore = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default appStore;

