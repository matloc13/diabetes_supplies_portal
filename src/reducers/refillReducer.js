const refillReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_REFILL':
            return [
                ...state,
                {
                    id: action.payload._id,
                    med_id: action.payload.med_id,
                    date: action.payload.date,
                    details: action.payload.details,
                },
            ];
        case 'SET_REFILLS':
            return (state = action.payload);
        default:
            return state;
    }
};

export default refillReducer;
