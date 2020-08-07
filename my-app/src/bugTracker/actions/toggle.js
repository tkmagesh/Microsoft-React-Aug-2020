import bugApi from '../services/bugApi';

function toggle(bugToToggle){
    return async function(dispatch){
        const toggledBugData = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
        const toggledBug = await bugApi.save(toggledBugData);
        const action = { type: 'UPDATE_BUG', payload: toggledBug };
        dispatch(action);
    }
}
export default toggle;