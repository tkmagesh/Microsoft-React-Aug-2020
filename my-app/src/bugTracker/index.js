import React, { Fragment } from 'react'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import bugActionCreators from './actions';

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
 
function mapStateToProps(storeState){
    const bugs = storeState.bugsState;
    return { bugs : bugs };
}

function mapDispatchToProps(dispatch){
    const bugActionDispatchers = bindActionCreators(bugActionCreators, dispatch);
    return bugActionDispatchers;
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(BugTracker) 


/* 
export default connect( 
    ({bugsState : bugs}) => ({ bugs}),
    (dispatch) => bindActionCreators(bugActionCreators, dispatch)
)(BugTracker); 
*/

