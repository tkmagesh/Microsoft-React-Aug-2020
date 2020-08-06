import React from 'react';
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux';
import './index.css';

import * as serviceWorker from './serviceWorker';
import appStore from './store';
import bugActionCreators from './bugTracker/actions';
import BugTracker from './bugTracker';

const bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);

function renderApp() {
  const bugs = appStore.getState();
  ReactDOM.render(
    <React.StrictMode>
      <BugTracker bugs={bugs} {...bugActionDispatchers} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}
renderApp();
appStore.subscribe(renderApp);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
