import React, { Fragment } from 'react'
import BugStats from './views/bugStats';
import BugSort from './views/bugSort';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';
import './index.css';

const BugTracker = ({ bugs, addNew, toggle, remove, removeClosed }) => (
    <Fragment>
        <h3>Bug Tracker</h3>
        <hr />
        <BugStats bugs={bugs} />
        <BugSort />
        <BugEdit addNew={addNew} />
        <BugList {...{ bugs, toggle, remove, removeClosed }} />
    </Fragment>
);

export default BugTracker;