import { createStore } from 'redux';
import bugsReducer from '../bugTracker/reducers/bugsReducer';

const appStore = createStore(bugsReducer);

export default appStore;