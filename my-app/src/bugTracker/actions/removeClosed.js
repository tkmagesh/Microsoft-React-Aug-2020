import remove from './remove';

function removeClosed() {
    return async function(dispatch, getState){
        const bugsState = getState().bugsState,
            bugs = bugsState.bugs;
        bugs.filter(bug => bug.isClosed).forEach(bugToRemove => {
            remove(bugToRemove)(dispatch);
        });
    }
}
export default removeClosed;