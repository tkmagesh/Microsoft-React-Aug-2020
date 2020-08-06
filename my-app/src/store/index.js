import { createStore } from 'redux';

//import bugsReducer from '../bugTracker/reducers/bugsReducer';
import spinnerReducer from '../spinner/reducers/spinnerReducer';

//const appStore = createStore(bugsReducer);
const appStore = createStore(spinnerReducer);

export default appStore;