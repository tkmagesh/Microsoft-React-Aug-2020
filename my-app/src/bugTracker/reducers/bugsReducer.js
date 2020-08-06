const initialState = [];

function bugsReducer(currentState = initialState, action) {
    if (action.type === 'ADD_BUG') {
        const newState = [...currentState, action.payload];
        return newState;
    }
    if (action.type === 'UPDATE_BUG') {
        const bugToUpdate = action.payload;
        const newState = currentState.map(bug => bug.id === bugToUpdate.id ? bugToUpdate : bug);
        return newState;
    }
    if (action.type === 'REMOVE_BUG') {
        const bugToRemove = action.payload;
        const newState = currentState.filter(bug => bug.id !== bugToRemove.id);
        return newState;
    }
    if (action.type === 'INIT_BUGS') {
        return action.payload;
    }


    return currentState;
}
export default bugsReducer;