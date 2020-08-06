let currentBugId = 0;
function addNew(bugName){
    const newBug = {
        id: ++currentBugId,
        name: bugName,
        isClosed: false,
        createdAt: new Date()
    };
    const action = { type: 'ADD_BUG', payload: newBug };
    return action;
}
export default addNew;