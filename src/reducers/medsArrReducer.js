
const medsArrReducer = (state, action) => {
    // console.log({state, action});
    
    switch  (action.type) {
        case "ADD_MED_TO_MEDS":
                return [ ...state, action.payload ];
        case "SET_MEDS":
            return state = action.json;
        default:
            return state;
    }

}

export default medsArrReducer;