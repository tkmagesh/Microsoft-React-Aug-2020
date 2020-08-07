import React from 'react';

const BugSort = ({sortBug}) => {
    const [sortAttr, setSortAttr] = React.useState('');
    const [isDesc, setIsDesc ] = React.useState(false);

    const sortAttrChange = (e) => {
        const attrName = e.target.value;
        setSortAttr(attrName);
        sortBug(attrName, isDesc);
    }
    const sortOrderChange = e => {
        const isDescOrder = e.target.checked;
        setIsDesc(isDescOrder);
        sortBug(sortAttr, isDescOrder);
    }
    return (
       
        <section className="sort">
            <label htmlFor="">Order By : </label>
            <select onChange={sortAttrChange}>
                <option value="">-------------</option>
                <option value="id">Id</option>
                <option value="name">Name</option>
                <option value="isClosed">Status</option>
                <option value="createdAt">Created</option>
            </select>
            <label htmlFor="">Descending ? :</label>
            <input type="checkbox" onChange={sortOrderChange}/>
        </section>
    );
}

export default BugSort;