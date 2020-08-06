import React from 'react';

const BugItem = ({ bug, toggle, remove }) => {
    const bugStyle = 'bugname ' + (bug.isClosed ? 'closed' : '');
    return (
        <li>
            <span className={bugStyle} onClick={_ => toggle(bug)}>
                {bug.name}
            </span>
            <div className="datetime">[{bug.createdAt.toString()}]</div>
            <input type="button" value="Remove" onClick={e => remove(bug)} />
        </li>
    )
}

export default BugItem;