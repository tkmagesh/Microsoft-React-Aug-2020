import React, { useState, Fragment } from 'react';
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

export default Spinner;