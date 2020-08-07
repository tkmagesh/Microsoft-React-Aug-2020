import React, { Fragment, useEffect } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import bugActionCreators from './actions';

import BugStats from './views/bugStats';
import BugSort from './views/bugSort';
import BugEdit from './views/bugEdit';
import BugList from './views/bugList';
import './index.css';

const BugTracker = ({ bugs, addNew, toggle, remove, removeClosed, sortBug, load }) => {
    useEffect(() => {
        load();
    }, [load]);
    return (
        <Fragment>
            <h3>Bug Tracker</h3>
            <hr />
            <BugStats bugs={bugs} />
            <BugSort sortBug={sortBug} />
            <BugEdit addNew={addNew} />
            <BugList {...{ bugs, toggle, remove, removeClosed }} />
        </Fragment>
    );
}

function getDescComparer(comparer){
    return (p1, p2) => comparer(p1, p2) * -1;
}
function getComparer(attrName){
    return (p1, p2) => {
        if (p1[attrName] < p2[attrName]) return -1;
        if (p1[attrName] > p2[attrName]) return 1;
        return 0;
    }
}
function getComparerFor(attrName, isDesc){
    const comparer = getComparer(attrName);
    if (!isDesc) return comparer;
    return getDescComparer(comparer);
}

function mapStateToProps(storeState){
    const { bugsState } = storeState;
    //const bugs = bugsState.bugs.filter(bug => bug.id % 2 === spinnerState % 2 );
    const { bugs, sortAttr, isDesc } = bugsState;
    const bugsList = [...bugs];
    if (!sortAttr) return { bugs : bugsList };
    const comparer = getComparerFor(sortAttr, isDesc);
    bugsList.sort(comparer) ;
    return { bugs : bugsList};
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

