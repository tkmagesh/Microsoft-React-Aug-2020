import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
import * as serviceWorker from './serviceWorker';
import appStore from './store';
import BugTracker from './bugTracker';
import Spinner from './spinner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Home = () => (
  <Fragment>
    <p>Eiusmod velit commodo deserunt nisi anim tempor ea eu. Irure magna occaecat nostrud aliqua incididunt consectetur eu ut anim mollit duis excepteur id irure. Esse enim ut consectetur aliquip ea magna eu amet qui ut do dolor. Amet est deserunt reprehenderit enim. Nulla exercitation nostrud sit consectetur aliquip aliquip officia quis laboris culpa id incididunt nostrud eiusmod. Ex culpa aliquip quis laborum aliqua cillum eiusmod do magna cupidatat ad. Mollit ad incididunt dolore est eiusmod labore veniam eu consequat eiusmod non elit proident labore.</p>
    <p>Aliqua consectetur exercitation ut nostrud enim id labore tempor labore amet veniam ad. Ex deserunt pariatur incididunt ex. Sit mollit laboris in magna excepteur aliquip minim enim culpa aliqua officia aliqua voluptate.</p>
  </Fragment>
)

ReactDOM.render(
  <Provider store={appStore}>
    <Router>
      <h1>My App</h1>
      <hr/>
      <div>
        <span> [<Link to="/">Home</Link>] </span>
        <span> [<Link to="/bugs">Bugs</Link>] </span>
        <span> [<Link to="/spinner">Spinner</Link>] </span>
      </div>
      <hr/>
      <Switch>
        <Route path="/bugs">
          <BugTracker />
        </Route>
        <Route path="/spinner">
          <Spinner />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </Provider>
  , document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
