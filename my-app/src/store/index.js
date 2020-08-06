import { createStore, combineReducers } from 'redux';

import bugsReducer from '../bugTracker/reducers/bugsReducer';
import spinnerReducer from '../spinner/reducers/spinnerReducer';

const rootReducer = combineReducers({
    spinnerState : spinnerReducer,
    bugsState : bugsReducer
});

const appStore = createStore(rootReducer);

export default appStore;

