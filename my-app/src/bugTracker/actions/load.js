import axios from 'axios';
import bugApi from '../services/bugApi';

function load(){
     return async function(dispatch){
        const bugs = await bugApi.getAll();
        const action = { type: 'INIT_BUGS', payload: bugs };
        dispatch(action);
    }
}
export default load;
