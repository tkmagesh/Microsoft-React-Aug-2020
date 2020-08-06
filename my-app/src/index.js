import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import './index.css';

import * as serviceWorker from './serviceWorker';
import appStore from './store';

import bugActionCreators from './bugTracker/actions';
import BugTracker from './bugTracker';
import spinnerActionCreators from './spinner/actions';
import Spinner from './spinner';

const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, appStore.dispatch);
const bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);


function renderApp() {
  const storeState = appStore.getState(),
    value = storeState.spinnerState,
    bugs = storeState.bugsState;

  ReactDOM.render(
    <div>
      <h1>My App</h1>
      <hr/>
      <Spinner value={value} {...spinnerActionDispatchers} />
      <BugTracker bugs={bugs} {...bugActionDispatchers} />
    </div>
    , document.getElementById('root')
  )
}
renderApp();
appStore.subscribe(renderApp);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
