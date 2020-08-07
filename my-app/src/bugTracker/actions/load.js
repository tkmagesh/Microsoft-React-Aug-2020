import axios from 'axios';

function load(){
    return function(dispatch){
        axios.get('http://localhost:3030/bugs')
            .then(response => response.data)
            .then(function(bugs){
                const action = { type: 'INIT_BUGS', payload: bugs};
                dispatch(action);
            });
    }
}
export default load;
