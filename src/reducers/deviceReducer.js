
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
            return [ 
                ...state.deviceChanges, 
                    {
                        _id: action.payload.id,
                        user_id: action.payload.user_id,
                        device_id: action.payload.device_id,
                        date: action.payload.date,
                        item: action.payload.item,
                        note: action.payload.note
                    }
            ];
        case "ADD_NEW_FAILURE":
            return [ 
                ...state.deviceFailure, 
                    {
                        _id: action.payload.id,
                        user_id: action.payload.user_id,
                        device_id: action.payload.device_id,
                        date: action.payload.date,
                        item: action.payload.item,
                        note: action.payload.note
                    }
            ];
        case "ADD_NEW_AQUIRED":
            return [ 
                ...state.deviceAquired, 
                    {
                        _id: action.payload.id,
                        user_id: action.payload.user_id,
                        device_id: action.payload.device_id,
                        date: action.payload.date,
                        item: action.payload.item,
                        note: action.payload.note
                    }
            ];
        default:
            return state;
    }
}

export default deviceReducer;