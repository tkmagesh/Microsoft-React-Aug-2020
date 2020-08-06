function removeClosed(bugs) {
    const bugsToRetain = bugs.filter(bug => !bug.isClosed);
    const action = { type: 'INIT_BUGS', payload: bugsToRetain };
    return action;
}
export default removeClosed;