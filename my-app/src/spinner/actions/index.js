const spinnerActionCreators = {
    increment(delta) {
        const action = { type: 'INCREMENT', payload: delta };
        return action;
    },
    decrement(delta) {
        const action = { type: 'DECREMENT', payload: delta };
        return action;
    }
};

export default spinnerActionCreators;