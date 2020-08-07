import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';
import appStore from './store';
import BugTracker from './bugTracker';
import Spinner from './spinner';
import axios from 'axios';
window['axios'] = axios;

ReactDOM.render(
  <Provider store={appStore}>
    <div>
      <div>
        <label>Apply Filter</label>
        <input type="checkbox" />
      </div>
      <h1>My App</h1>
      <hr/>
      <Spinner/>
      <BugTracker/>
    </div>
  </Provider>
  , document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
