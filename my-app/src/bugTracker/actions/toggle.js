function toggle(bugToToggle){
    const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
    const action = { type: 'UPDATE_BUG', payload: toggledBug };
    return action;
}
export default toggle;