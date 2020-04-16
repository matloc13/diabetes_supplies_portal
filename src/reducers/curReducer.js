const curReducer = (state, action) => {
    switch (action.type) {
        case 'SET_CUR_DEV':
            return {
                ...state,
                user_id: action.payload.user_id,
                _id: action.payload._id,
                deviceName: action.payload.deviceName,
                brand: action.payload.brand,
                model: action.payload.model,
                serialNumber: action.payload.serialNumber,
                userSpec: action.payload.userSpec,
            };
        default:
            return;
    }
};

export default curReducer;
