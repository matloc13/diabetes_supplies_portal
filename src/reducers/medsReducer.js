
const medsReducer = (state, action) => {
    console.log({state, action});
    
    switch  (action.type) {
        case "ADD_MED_TO_MEDS":
            if (action.med && state) {
                return [ ...state, action.med ];
            } else {
                return state;
            }
            
        case "SET_MEDS":
            if (state !== undefined) {
            return [ action.meds, ...state ];
            } else {
                return state;
            }
        default:
            return;
    }

}

export default medsReducer;