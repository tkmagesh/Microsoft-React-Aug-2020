import React, { useState } from 'react';

const BugEdit = ({ addNew }) => {
    const [newBugName, setNewBugName] = useState('');
    return (
        <section className="edit">
            <label htmlFor="">Bug Name :</label>
            <input
                type="text"
                value={newBugName}
                onChange={e => setNewBugName(e.target.value)}
            />
            <input
                type="button"
                value="Add New"
                onClick={e => addNew(newBugName)}
            />
        </section>
    )
};

export default BugEdit;