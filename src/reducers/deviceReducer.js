
const deviceReducer = (state, action) => {


    switch (action.type) {
        case "CREATE_DEVICE":
            return { 
                ...state,
                id: action.payload.id,
                user_id: action.payload.user_id,
                deviceName: action.payload.deviceName,
                brand: action.payload.brand,
                model: action.payload.model,
                serialNumber: action.payload.serialNumber,
                userSpec: action.payload.userSpec,
             };
        case "ADD_NEW_CHANGE":
            return;
        case "ADD_NEW_FAILURE":
            return;
        case "ADD_NEW_AQUIRED":
            return;
        default:
            return state;
    }
}

export default deviceReducer;