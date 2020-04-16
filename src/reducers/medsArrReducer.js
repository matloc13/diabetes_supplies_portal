const medsArrReducer = (state, action) => {
    // console.log({state, action});

    switch (action.type) {
        case 'SET_MED':
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name,
                    user_id: action.payload.user_id,
                    description: action.payload.description,
                    prescriptionNumber: action.payload.prescriptionNumber,
                    doctor: action.payload.doctor,
                    pharmacy: action.payload.pharmacy,
                    size: action.payload.size,
                    refillLength: action.payload.refillLength,
                    finished: action.payload.finished,
                },
            ];
        case 'SET_MEDS':
            return (state = action.json);
        default:
            return state;
    }
};

export default medsArrReducer;
