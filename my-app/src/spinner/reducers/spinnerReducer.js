function spinnerReducer(currentState = 0, action) {
    if (action.type === 'INCREMENT') return currentState + action.payload;
    if (action.type === 'DECREMENT') return currentState - action.payload;
    return currentState;
}

export default spinnerReducer;