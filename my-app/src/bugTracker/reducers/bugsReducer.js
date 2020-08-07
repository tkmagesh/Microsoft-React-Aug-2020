const initialState = {
    bugs : [],
    sortAttr : '',
    isDesc : false
};

function bugsReducer(currentState = initialState, action) {
    if (action.type === 'ADD_BUG') {
        const newState = { ...currentState, bugs : [...currentState.bugs, action.payload]};
        return newState;
    }
    if (action.type === 'UPDATE_BUG') {
        const bugToUpdate = action.payload;
        const newState = {...currentState, bugs : currentState.bugs.map(bug => bug.id === bugToUpdate.id ? bugToUpdate : bug)};
        return newState;
    }
    if (action.type === 'REMOVE_BUG') {
        const bugToRemove = action.payload;
        const newState = { ...currentState, bugs: currentState.bugs.filter(bug => bug.id !== bugToRemove.id)};
        return newState;
    }
    if (action.type === 'INIT_BUGS') {
        return { ...currentState, bugs : action.payload };
    }
    if (action.type === 'SORT_BUGS'){
        const { sortAttr, isDesc } = action.payload;
        const newState = { ...currentState, sortAttr, isDesc}
        return newState;
    }


    return currentState;
}
export default bugsReducer;