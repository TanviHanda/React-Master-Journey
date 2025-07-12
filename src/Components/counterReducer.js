const initialState = { count: 0 };

function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'incrementByAmount': // ✅ fixed name
            return { count: state.count + action.payload };
        case 'decrementByAmount': // ✅ fixed name
            return { count: state.count - action.payload };
        default:
            return state;
    }
}

export { initialState, counterReducer };
