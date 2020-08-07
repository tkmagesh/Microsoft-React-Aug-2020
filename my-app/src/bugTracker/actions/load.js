import bugApi from '../services/bugApi';

/* function load(){
     return async function(dispatch){
        const bugs = await bugApi.getAll();
        const action = { type: 'INIT_BUGS', payload: bugs };
        dispatch(action);
    }
} */

async function load(){
    const bugs = await bugApi.getAll();
    const action = { type: 'INIT_BUGS', payload: bugs };
    return action;
}

export default load;
