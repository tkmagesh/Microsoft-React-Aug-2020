import React, { useState, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import spinnerActionCreators from './actions';

import './index.css';

const Spinner = ({ value, increment, decrement }) => {
    const [delta, setDelta] = useState(0);
    return (
        <Fragment>
            <h3>Spinner</h3>
            <hr />
            <div>
                <span>Delta : </span>
                <input type="number" value={delta || 0} onChange={e => setDelta(e.target.valueAsNumber || 0)} />
                <br />
                <input type="button" value="Decrement" onClick={_ => decrement(delta)} />
                <span> [ {value} ] </span>
                <input type="button" value="Increment" onClick={_ => increment(delta)} />
            </div>
        </Fragment>
    );
};

function mapStateToProps(storeState){
    const value = storeState.spinnerState;
    return { value : value };
}

function mapDispatchToProps(dispatch){
    const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, dispatch);
    return spinnerActionDispatchers;
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Spinner);